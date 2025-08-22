import Button from "../components/UI/Button";
import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
  const { logout } = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
        <p className="text-gray-600 mb-6">
          Kamu sudah login. Ini halaman contoh yang dilindungi.
        </p>
        <Button onClick={logout}>Logout</Button>
      </div>
    </div>
  );
}
