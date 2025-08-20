export default function PreferencesForm() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg w-1/2 shadow-lg">
      <h2 className="text-lg font-bold mb-6 border-b border-gray-600 pb-2">
        My Study Group Preferences
      </h2>

      {/* Courses */}
      <label className="block text-sm mb-1">Courses</label>
      <select className="w-full p-2 mb-4 rounded bg-gray-700">
        <option>Select Courses for Study Group</option>
      </select>

      {/* Time Slots */}
      <label className="block text-sm mb-1">Available Time Slots</label>
      <select className="w-full p-2 mb-2 rounded bg-gray-700">
        <option>Select Day</option>
      </select>
      <div className="flex gap-2 mb-4">
        <input type="time" className="p-2 rounded bg-gray-700 flex-1" />
        <input type="time" className="p-2 rounded bg-gray-700 flex-1" />
      </div>

      {/* Study Type */}
      <label className="block text-sm mb-2">Study Type</label>
      <div className="space-y-2 mb-6">
        {[
          "Tutoring to Learn More",
          "Revising Together",
          "Personal TA (Paid)",
          "TA for Group (Paid)",
        ].map((type, i) => (
          <label key={i} className="flex items-center gap-2">
            <input type="radio" name="study" className="accent-blue-500" />
            {type}
          </label>
        ))}
      </div>

      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded w-full">
        Save
      </button>
    </div>
  );
}
