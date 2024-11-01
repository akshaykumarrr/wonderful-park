import React from "react";
import { Link } from "react-router-dom";

const WaterRides = () => {
  return (
    <section className="bg-white h-screen flex items-center justify-center">
      <div className="container h-full pb-14 pt-16 flex flex-col">
        <h1 className="text-4xl font-bold text-left pb-10">Water Rides</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Ride 1 */}
          <div className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center p-4 py-7">
            <img src="https://t.ly/hhFgk" alt="Dry Ride 1" className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold text-center px-3">Wave Pool</h2>
            <p className="text-center px-3">Splash around in our massive wave pool, perfect for all ages!</p>
            <Link to="/cart" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</Link>
          </div>
          {/* Ride 2 */}
          <div className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center p-4 py-7">
            <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXSO0Dje1UrDEVH7UT5jQzEZn3ma-Tjj5EQ&s" alt="Dry Ride 2" className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold text-center px-3">Lazy River</h2>
            <p className="text-center px-3">Relax and float along our gentle lazy river ride, perfect for a leisurely day!</p>
            <Link to="/cart" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</Link>
          </div>
          {/* Ride 3 */}
          <div className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center p-4 py-7">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPpCIgsk7E7o1_TL36HRy4lr7cgfOCHzwKeA&s" alt="Dry Ride 3" className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold text-center px-3">Tidal Wave</h2>
            <p className="text-center px-3">Experience the thrill of our giant swing that sends you plummeting into the splash zone!</p>
            <Link to="/cart" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterRides;
