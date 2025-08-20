export default function TopTabs() {
  return (
    <div className="bg-gray-700 px-6 py-3 flex gap-4 shadow">
      {[
        "My Profile",
        "Connections",
        "Messages",
        "Search",
        "Preference",
        "Study Group",
      ].map((tab, i) => (
        <button
          key={i}
          className={`px-4 py-1 rounded ${
            tab === "Study Group"
              ? "bg-blue-600 text-white"
              : "bg-gray-600 hover:bg-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
