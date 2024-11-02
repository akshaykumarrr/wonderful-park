import React, { useState } from "react";
import photographersData from "../../javascript/photographersData";

const BookPhotographer = ({ addToCart }) => {
  const [selectedPhotographer, setSelectedPhotographer] = useState(null);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const bookSlot = (photographer) => {
    if (!date || !timeSlot) {
      alert("Please select both a date and time slot.");
      return;
    }
    setSelectedPhotographer(photographer);
    alert(`Slot booked with ${photographer.name} on ${date} at ${timeSlot} for $${photographer.price}`);
    addToCart(photographer);
  };

  return (
    <div className="mt-5">
      <h2 className="text-3xl font-bold text-left mb-6">Available Photographers</h2>
      <div className="photographer-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photographersData.map((photographer) => (
          <div
            key={photographer.id}
            className={`photographer-card border p-5 rounded-lg shadow-lg ${
              photographer.available ? 'bg-green-50' : 'bg-red-50'
            } flex flex-col items-center justify-between`}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-1">{photographer.name}</h3>
              <p className="text-gray-600">Experience: {photographer.experience}</p>
              <p className="text-gray-600">Price: ${photographer.price}</p>
              <p className={`font-semibold ${photographer.available ? "text-green-600" : "text-red-600"}`}>
                Status: {photographer.available ? "Available" : "Not Available"}
              </p>
            </div>
            {photographer.available && (
              <div className="mt-4 w-full text-center">
                <input
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  className="border rounded p-2 w-full mb-2"
                />
                <input
                  type="time"
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="border rounded p-2 w-full"
                />
                <button
                  onClick={() => bookSlot(photographer)}
                  className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 w-full"
                >
                  Book Slot
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookPhotographer;
