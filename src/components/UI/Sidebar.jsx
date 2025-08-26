export default function Sidebar() {
  const Item = ({ children }) => (
    <button className="w-full p-3 bg-transparent rounded-xl text-slate-600 hover:bg-slate-100 transition flex items-center gap-3">
      <span className="h-5 w-5 rounded bg-slate-300 inline-block" />
      <span className="text-sm">{children}</span>
    </button>
  );

  return (
    <aside className="fixed left-0 top-0 h-screen w-40 border-r bg-white z-20">
      <div className="flex items-center gap-3 px-4 py-5">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 text-white font-semibold">C</div>
        <span className="font-medium text-slate-800">Company</span>
      </div>
      <nav className="px-3 space-y-1">
        <Item>Dashboard</Item>
        <Item>Projects</Item>
        <Item>Tasks</Item>
        <Item>Messages</Item>
        <Item>Teams</Item>
        <Item>Settings</Item>
      </nav>
      <div className="mt-auto p-4">
        <button className="w-full rounded-xl border border-slate-200 py-2 text-sm text-slate-600 hover:bg-slate-50">
          Logout
        </button>
      </div>
    </aside>
  );
}
