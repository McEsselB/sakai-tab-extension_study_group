export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 p-6 flex flex-col">
      <h2 className="text-xl font-bold mb-8 text-blue-400">
        University of Ghana
      </h2>
      <ul className="space-y-3 text-gray-300">
        <li className="hover:text-white cursor-pointer">Overview</li>
        <li className="hover:text-white cursor-pointer">Profile</li>
        <li className="hover:text-white cursor-pointer">Membership</li>
        <li className="hover:text-white cursor-pointer">Calendar</li>
        <li className="hover:text-white cursor-pointer">Resources</li>
        <li className="hover:text-white cursor-pointer">Announcements</li>
        <li className="hover:text-white cursor-pointer">Preferences</li>
        <li className="hover:text-white cursor-pointer">Account</li>
        <li className="hover:text-white cursor-pointer">Dashboard</li>
      </ul>
    </div>
  );
}
