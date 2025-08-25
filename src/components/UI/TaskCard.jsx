function Tag({ label, color = "slate" }) {
  const palettes = {
    slate: "bg-slate-100 text-slate-700",
    green: "bg-emerald-100 text-emerald-700",
    purple: "bg-violet-100 text-violet-700",
  };
  const style =
    label.toLowerCase() === "backend" ? palettes.green :
    label.toLowerCase() === "frontend" ? palettes.purple :
    palettes.slate;

  return (
    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${style}`}>
      {label}
    </span>
  );
}

export default function TaskCard({ task }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-slate-800">{task.title}</h3>
      {task.desc && (
        <p className="mt-1 text-sm text-slate-600 line-clamp-2">{task.desc}</p>
      )}

      {task.links?.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
          {task.links.map((l, idx) => (
            <a
              key={idx}
              href="#"
              className="inline-flex items-center gap-1 text-blue-600 hover:underline"
              onClick={(e)=>e.preventDefault()}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 007.54-.54l1-1a5 5 0 10-7.07-7.07l-1 1" />
                <path d="M14 11a5 5 0 00-7.54.54l-1 1a5 5 0 107.07 7.07l1-1" />
              </svg>
              {l}
            </a>
          ))}
        </div>
      )}

      {task.tags?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {task.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      )}
    </div>
  );
}
