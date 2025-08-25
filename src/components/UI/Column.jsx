import TaskCard from "./TaskCard";

export default function Column({ title, items, countBadge }) {
  return (
    <section>
      <div className="mb-3 flex items-center gap-2">
        <h2 className="text-xs font-semibold tracking-widest text-slate-500">{title}</h2>
        {typeof countBadge === "number" && (
          <span className="rounded-md bg-slate-200/70 px-2 py-0.5 text-xs text-slate-700">
            {countBadge}
          </span>
        )}
      </div>
      <div className="space-y-4">
        {items.map((t) => (
          <TaskCard key={t.id} task={t} />
        ))}
      </div>
    </section>
  );
}
