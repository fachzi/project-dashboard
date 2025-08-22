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
        className={`w-full rounded-lg border px-3 py-2 outline-none
          focus:ring-2 focus:ring-blue-500 border-gray-300`}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
