export default function CreateRental() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create New Rental</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 focus:ring-rose-500 focus:outline-none"
            placeholder="Beautiful villa with sea view"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 focus:ring-rose-500 focus:outline-none"
            placeholder="Galle, Sri Lanka"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Price per night</label>
          <input
            type="number"
            className="w-full border rounded-lg px-4 py-2 focus:ring-rose-500 focus:outline-none"
            placeholder="100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 focus:ring-rose-500 focus:outline-none"
            placeholder="https://example.com/image.jpg"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
        >
          Create Rental
        </button>
      </form>
    </div>
  );
}
