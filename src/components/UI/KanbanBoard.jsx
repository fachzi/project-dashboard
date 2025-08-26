import { useMemo, useState } from "react";
import Column from "./Column";
import AddTaskModal from "./AddTaskModal";
// import { initialTasks } from "../data/tasks";

export default function KanbanBoard() {
//   const [tasks, setTasks] = useState(initialTasks);

//   const grouped = useMemo(() => {
//     return {
//       todo: tasks.filter((t) => t.status === "todo"),
//       doing: tasks.filter((t) => t.status === "doing"),
//       done: tasks.filter((t) => t.status === "done"),
//     };
//   }, [tasks]);

  const addTask = (t) => {
    const id = Math.random().toString(36).slice(2, 9);
    setTasks((prev) => [{ id, ...t }, ...prev]);
  };

  return (
    <>

      <div className="grid gap-6 md:grid-cols-3">
        Hello
        {/* <Column title="TO DO" items={grouped.todo} countBadge={grouped.todo.length} />
        <Column title="DOING" items={grouped.doing} countBadge={grouped.doing.length} />
        <Column title="DONE" items={grouped.done} countBadge={grouped.done.length} /> */}
      </div>

    </>
  );
}
