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
          className="w-full bg-transparent outline-none border-b text-slate-500 border-slate-300 pb-2 placeholder:text-slate-400 focus:border-blue-500 transition"
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute bg-transparent outline-none right-0 top-1/2 -translate-y-1/2 p-1 text-slate-400"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ?
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3l18 18" />
              <path d="M10.58 10.58A3 3 0 0012 15a3 3 0 001.42-.38M9.88 4.24A9.77 9.77 0 0112 4c5.52 0 9 4 10 8- .31 1.34-1 2.58-2 3.61M6.1 6.1C4.13 7.46 2.78 9.5 2 12c1 4 4.48 8 10 8a9.9 9.9 0 004.12-.86" />
            </svg>
           : 
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>}
        </button>
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
