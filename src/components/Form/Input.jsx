export default function Input({
  label,
  error,
  className = "",
  ...props
}) {
  return (
    <div className={`w-full ${className}`}>
      {label && <label className="block mb-1 text-sm text-gray-700">{label}</label>}
      <input
        {...props}
        className={`w-full bg-transparent outline-none border-b border-slate-300 pb-2 text-slate-500 placeholder:text-slate-400 focus:border-blue-500 transition`}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
