import React from "react";
import { Link } from "react-router-dom";

const DryRides = () => {
  return (
    <section className="bg-white h-screen flex items-center justify-center">
      <div className="container h-full pb-14 pt-16 flex flex-col">
        <h1 className="text-4xl font-bold text-left pb-10">Dry Rides</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Ride 1 */}
          <div className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center p-4 py-7">
            <img src="https://funderlandpark.com/wp-content/uploads/2016/09/boy-carousel_11a9346e0a8e072646ba660ee773664c.jpg" alt="Dry Ride 1" className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold text-center px-3">Classic Carousel</h2>
            <p className="text-center px-3">Enjoy a classic carousel ride with beautiful horses and gentle music!</p>
            <Link to="/cart" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</Link>
          </div>
          {/* Ride 2 */}
          <div className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center p-4 py-7">
            <img src= "https://media.istockphoto.com/id/186293315/photo/looping-roller-coaster.jpg?s=612x612&w=0&k=20&c=r0Uq8QvhEjoFOodlgaD_5gMOYOF4rbFxKIp6UOFrcJA=" alt="Dry Ride 2" className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold text-center px-3">Ferris Wheel</h2>
            <p className="text-center px-3">Get a bird's eye view of the park from our giant Ferris wheel, perfect for families!</p>
            <Link to="/cart" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</Link>
          </div>
          {/* Ride 3 */}
          <div className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center p-4 py-7">
            <img src="https://i.pinimg.com/564x/c8/34/0d/c8340d31ef696a16319515bb53bd340d.jpg" alt="Dry Ride 3" className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold text-center px-3">Gentle Roller Coaster</h2>
            <p className="text-center px-3">A smooth and gentle roller coaster perfect for the whole family!</p>
            <Link to="/cart" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DryRides;
