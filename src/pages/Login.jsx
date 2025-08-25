import { useState } from "react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import Input from "../components/Form/Input";
import PasswordInput from "../components/Form/PasswordInput";
import { login as loginApi } from "../services/auth";
import { useAuth } from "../hooks/useAuth";
import bg from "../assets/login-wall.jpg";
import { required, minLen } from "../utils/validators";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const e = {};
    e.username = required(form.username);
    e.password = required(form.password) || minLen(6)(form.password);
    setErrors(e);
    return !Object.values(e).some(Boolean);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    if (!validate()) return;
    setLoading(true);
    try {
      const data = await loginApi(form);      // { token }
      login(data.token);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setApiError(
        err?.response?.data?.message || "Login gagal. Cek username/password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (

      <div className="flex-1 min-h-screen grid md:grid-cols-2 bg-white">
        <div className="hidden md:block">
          <img
            src={bg}
            alt="Board"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center justify-center p-6 md:p-10">
          <Card className="w-full max-w-md">
            <h1 className="mb-8 text-3xl font-semibold text-slate-800">Login</h1>

            {apiError && (
              <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-700">
                {apiError}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-4">
              <Input
                label="Username"
                placeholder="your.username"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                error={errors.username}
                autoFocus
              />

              <PasswordInput
                label="Password"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                error={errors.password}
              />

              <Button type="submit" loading={loading}>Login</Button>
            </form>

            <p className="mt-6 text-xs text-gray-500">
              Tips: Simpan token di storage aman bila aplikasi produksi (mis: Secure
              Storage di mobile). Ini contoh sederhana untuk web.
            </p>
          </Card>
        </div>
      </div>
  );
}
