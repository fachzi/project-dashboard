export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl shadow-lg bg-white ${className}`}>{children}</div>
  );
}
