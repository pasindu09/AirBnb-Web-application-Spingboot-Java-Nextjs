export default function HostDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Host Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        <a href="/host/rentals" className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Manage Rentals</h2>
          <p className="text-gray-600">View, edit, and delete your properties.</p>
        </a>
        <a href="/host/rentals/create" className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Add New Rental</h2>
          <p className="text-gray-600">List a new property for guests to book.</p>
        </a>
        <a href="/host/settings" className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Settings</h2>
          <p className="text-gray-600">Update profile, payout, and preferences.</p>
        </a>
      </div>
    </div>
  );
}
