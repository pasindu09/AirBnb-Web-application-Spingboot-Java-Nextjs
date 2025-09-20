"use client";
import { useState } from "react";

const myRentals = [
  { id: 1, title: "Luxury Villa", location: "Galle", price: 120 },
  { id: 2, title: "City Apartment", location: "Colombo", price: 45 },
];

export default function ManageRentals() {
  const [rentals, setRentals] = useState(myRentals);

  const deleteRental = (id: number) => {
    setRentals(rentals.filter((r) => r.id !== id));
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Rentals</h1>
        <a
          href="/host/rentals/create"
          className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
        >
          + Add New
        </a>
      </div>
      <div className="grid gap-4">
        {rentals.map((r) => (
          <div
            key={r.id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{r.title}</h2>
              <p className="text-gray-600 text-sm">{r.location}</p>
              <p className="text-gray-800 font-medium">${r.price}/night</p>
            </div>
            <div className="flex gap-2">
              <a
                href={`/host/rentals/${r.id}`}
                className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
              >
                Edit
              </a>
              <button
                onClick={() => deleteRental(r.id)}
                className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {rentals.length === 0 && (
          <p className="text-gray-500">No rentals added yet.</p>
        )}
      </div>
    </div>
  );
}
