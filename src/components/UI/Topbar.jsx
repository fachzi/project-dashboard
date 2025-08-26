import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
export default function Topbar() {
    const [open, setOpen] = useState(false);

    const addTask = (t) => {
    const id = Math.random().toString(36).slice(2, 9);
    setTasks((prev) => [{ id, ...t }, ...prev]);
  };

  return (
    <>
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto px-6 py-4 flex items-center justify-end">
            <div className="flex items-center gap-3">
            <button 
                onClick={() => setOpen(true)}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700">
                Add a task
            </button>
            <img
                alt="avatar"
                className="h-8 w-8 rounded-full ring-2 ring-white object-cover"
                onError={(e)=>{e.currentTarget.style.display='none'}}
            />
            </div>
        </div>
        </header>
        <AddTaskModal open={open} onClose={() => setOpen(false)} onCreate={addTask} />
    </>
  );
}
