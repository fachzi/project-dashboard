// import avatar from "../assets/avatar.png";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto px-6 py-4 flex items-center justify-end">
        <div className="flex items-center gap-3">
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700">
            Add a task
          </button>
          <img
            // src={avatar}
            alt="avatar"
            className="h-8 w-8 rounded-full ring-2 ring-white object-cover"
            onError={(e)=>{e.currentTarget.style.display='none'}}
          />
        </div>
      </div>
    </header>
  );
}
