export default function Matches() {
  const matches = [
    { name: "Mc - Klien Larbi", detail: "Calculus 101 | Mon 2 - 4 PM" },
    {
      name: "Study Group 1 (4 members)",
      detail: "DCIT 302 101 | Fri 1PM - 2PM, Wed 9AM - 12PM",
    },
    {
      name: "Study Group 2 (7 members)",
      detail: "DCIT 308 | Thu 3PM - 4PM, Fri 12PM - 2PM",
    },
    {
      name: "Olivia Bennett (Teaching Assistant)",
      detail: "DCIT 321 | Mon 9AM - 4PM",
    },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg w-1/2 shadow-lg">
      <h2 className="text-lg font-bold mb-6 border-b border-gray-600 pb-2">
        Suggested Matches
      </h2>

      {matches.map((m, i) => (
        <div key={i} className="mb-4 pb-3 border-b border-gray-700">
          <p className="font-semibold">{m.name}</p>
          <p className="text-sm text-gray-400">{m.detail}</p>
          <button className="mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded">
            Connect
          </button>
        </div>
      ))}
    </div>
  );
}
