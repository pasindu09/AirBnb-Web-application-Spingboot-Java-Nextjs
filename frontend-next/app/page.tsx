// app/page.tsx
"use client";
import { useState } from "react";

const rentals = [
  {
    id: 1,
    title: "Cozy Apartment in Colombo",
    location: "Colombo, Sri Lanka",
    price: 45,
    rating: 4.8,
    image:
      "https://source.unsplash.com/random/800x600/?apartment,colombo",
  },
  {
    id: 2,
    title: "Luxury Villa with Pool",
    location: "Galle, Sri Lanka",
    price: 120,
    rating: 4.9,
    image:
      "https://source.unsplash.com/random/800x600/?villa,beach",
  },
  {
    id: 3,
    title: "Mountain Cabin Retreat",
    location: "Kandy, Sri Lanka",
    price: 80,
    rating: 4.7,
    image:
      "https://source.unsplash.com/random/800x600/?cabin,mountain",
  },
];

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState<number | null>(null);

  const filteredRentals = rentals.filter((rental) => {
    const matchesSearch =
      rental.title.toLowerCase().includes(search.toLowerCase()) ||
      rental.location.toLowerCase().includes(search.toLowerCase());
    const matchesPrice = priceFilter ? rental.price <= priceFilter : true;
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-rose-500">Airbnb</h1>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-full border hover:shadow">
            Become a host
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
            <span className="text-sm font-medium">P</span>
          </div>
        </div>
      </nav>

      {/* Hero with Search */}
      <section className="bg-rose-100 py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Find your next stay
        </h2>
        <p className="text-gray-600 mb-6">
          Discover amazing places to stay around Sri Lanka
        </p>
        <div className="max-w-2xl mx-auto bg-white rounded-full shadow flex items-center overflow-hidden">
          <input
            type="text"
            placeholder="Search location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow px-4 py-3 outline-none"
          />
          <button className="bg-rose-500 text-white px-6 py-3 hover:bg-rose-600 transition">
            Search
          </button>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="flex gap-4 px-6 py-4 bg-white shadow-sm sticky top-0 z-10">
        <button
          onClick={() => setPriceFilter(50)}
          className={`px-4 py-2 rounded-full border ${
            priceFilter === 50 ? "bg-rose-500 text-white" : "hover:shadow"
          }`}
        >
          Budget (&lt; $50)
        </button>
        <button
          onClick={() => setPriceFilter(100)}
          className={`px-4 py-2 rounded-full border ${
            priceFilter === 100 ? "bg-rose-500 text-white" : "hover:shadow"
          }`}
        >
          Mid-range (&lt; $100)
        </button>
        <button
          onClick={() => setPriceFilter(null)}
          className="px-4 py-2 rounded-full border hover:shadow"
        >
          Clear Filter
        </button>
      </div>

      {/* Rentals Grid */}
      <section className="px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRentals.length > 0 ? (
          filteredRentals.map((rental) => (
            <div
              key={rental.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={rental.image}
                alt={rental.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {rental.title}
                </h3>
                <p className="text-gray-600 text-sm">{rental.location}</p>
                <div className="flex justify-between items-center mt-3">
                  <p className="font-medium">${rental.price}/night</p>
                  <span className="text-yellow-500">⭐ {rental.rating}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No rentals found.
          </p>
        )}
      </section>
    </div>
  );
}
