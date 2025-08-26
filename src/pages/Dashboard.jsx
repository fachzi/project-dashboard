import Button from "../components/UI/Button";
import KanbanBoard from "../components/UI/KanbanBoard";
import Sidebar from "../components/UI/Sidebar";
import Topbar from "../components/UI/Topbar";
import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
  const { logout } = useAuth();
  return (
    <>
      <Topbar />
      <Sidebar />
      <KanbanBoard />
      {/* <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-xl md:text-2xl font-semibold text-slate-800">
          Hello Abdul, <span className="font-normal text-slate-600">Here’s your tasks</span>
        </h1>
        <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow">
            <div className="px-6 pb-10">
              <KanbanBoard />
            </div>
          <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
          <p className="text-gray-600 mb-6">
            Kamu sudah login. Ini halaman contoh yang dilindungi.
          </p>
          <Button onClick={logout}>Logout</Button>
        </div>
      </div> */}
    </>
  );
}
