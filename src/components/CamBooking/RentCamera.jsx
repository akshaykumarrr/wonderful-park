import React from "react";
import camerasData from "../../javascript/camerasData";

const RentCamera = ({ addToCart }) => {
  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold">Available Cameras for Rent</h2>
      <div className="camera-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
        {camerasData.map((camera) => (
          <div key={camera.id} className="camera-card bg-[#f4f4f4] p-4 rounded-lg flex flex-col items-center">
            <img src={camera.src} alt={camera.name} className="w-32 h-32 object-cover mb-4 rounded-md" />
            <h3 className="text-lg font-semibold">{camera.name}</h3>
            <p>Price: ${camera.price} per day</p>
            <button
              onClick={() => addToCart(camera)} 
              className="btn mt-2 bg-blue-500 text-white p-2 rounded-xl"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentCamera;
