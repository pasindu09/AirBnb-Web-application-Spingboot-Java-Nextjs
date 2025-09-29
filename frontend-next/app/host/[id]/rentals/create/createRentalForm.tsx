import { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export default function CreateRentalForm() {
    const [image, setImage] = useState<File | null>(null);
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    const [description, setDescription] = useState("");
    const [propertyType, setPropertyType] = useState(""); // NEW
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState<number | "">("");

    const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const payload = {
    title,
    country,
    region,
    propertyType,
    price,
    description,
  };

  try {
    const response = await fetch("http://localhost:8080/rentals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    console.log("Rental created:", data);
    alert("Rental created successfully!");
  } catch (err) {
    console.error(err);
    alert("Failed to create rental");
  }
};


    return (
        <div className="p-8 max-w-2xl mx-auto">
            <div className="bg-white shadow-lg rounded-2xl p-8 border">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    🏡 Create New Rental
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-500 focus:outline-none"
                            placeholder="Beautiful villa with sea view"
                        />
                    </div>

                    {/* Rental Type */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Rental Type</label>
                        <select
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-500 focus:outline-none"
                        >
                            <option value="">Select type</option>
                            <option value="APARTMENT">Apartment</option>
                            <option value="HOUSE">House</option>
                            <option value="CONDO">Condo</option>
                            <option value="VILLA">Villa</option>
                        </select>
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Country</label>
                        <CountryDropdown
                            value={country}
                            onChange={(val) => setCountry(val)}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-500 focus:outline-none"
                        />
                    </div>

                    {/* Region */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Region</label>
                        <RegionDropdown
                            country={country}
                            value={region}
                            onChange={(val) => setRegion(val)}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-500 focus:outline-none"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Price per night</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-500 focus:outline-none"
                            placeholder="100"
                        />
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Upload Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files?.[0] || null)}
                            className="w-full border rounded-lg px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-rose-500 focus:outline-none"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-500 focus:outline-none"
                            placeholder="Write a detailed description of your rental..."
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-rose-500 text-white rounded-lg font-medium hover:bg-rose-600 transition-all shadow-md"
                    >
                        Create Rental
                    </button>
                </form>
            </div>
        </div>
    );
}
