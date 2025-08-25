import { useMemo, useState } from "react";
import Column from "./Column";
import AddTaskModal from "./AddTaskModal";
// import { initialTasks } from "../data/tasks";

export default function KanbanBoard() {
//   const [tasks, setTasks] = useState(initialTasks);
  const [open, setOpen] = useState(false);

  const grouped = useMemo(() => {
    return {
      todo: tasks.filter((t) => t.status === "todo"),
      doing: tasks.filter((t) => t.status === "doing"),
      done: tasks.filter((t) => t.status === "done"),
    };
  }, [tasks]);

  const addTask = (t) => {
    const id = Math.random().toString(36).slice(2, 9);
    setTasks((prev) => [{ id, ...t }, ...prev]);
  };

  return (
    <>
      <div className="mb-5 flex justify-end">
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Add a task
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Column title="TO DO" items={grouped.todo} countBadge={grouped.todo.length} />
        <Column title="DOING" items={grouped.doing} countBadge={grouped.doing.length} />
        <Column title="DONE" items={grouped.done} countBadge={grouped.done.length} />
      </div>

      <AddTaskModal open={open} onClose={() => setOpen(false)} onCreate={addTask} />
    </>
  );
}
