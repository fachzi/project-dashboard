import { useState } from "react";

export default function PasswordInput({ label, error, className = "", ...props }) {
  const [show, setShow] = useState(false);
  return (
    <div className={`w-full ${className}`}>
      {label && <label className="block mb-1 text-sm text-gray-700">{label}</label>}
      <div className="relative">
        <input
          {...props}
          type={show ? "text" : "password"}
          className="w-full rounded-lg border px-3 py-2 pr-10 outline-none
                     focus:ring-2 focus:ring-blue-500 border-gray-300"
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? "🙈" : "👁️"}
        </button>
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
