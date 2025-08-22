export default function Button({
  children,
  className = "",
  loading = false,
  ...props
}) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`w-full rounded-xl py-3 font-medium transition
        bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60 ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
