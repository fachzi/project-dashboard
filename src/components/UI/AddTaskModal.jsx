import { useState } from "react";

export default function AddTaskModal({ open, onClose, onCreate }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onCreate({ title, desc, status: "todo", tags: [] });
    setTitle(""); setDesc("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-20 grid place-items-center bg-black/30 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-slate-800">Add a task</h3>
        <form onSubmit={submit} className="mt-4 space-y-4">
          <div>
            <label className="block text-sm text-slate-700 mb-1">Title</label>
            <input
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              autoFocus
            />
          </div>
          <div>
            <label className="block text-sm text-slate-700 mb-1">Description</label>
            <textarea
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              value={desc}
              onChange={(e)=>setDesc(e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="rounded-lg border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50">Cancel</button>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
