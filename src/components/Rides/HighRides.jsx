import React from "react";
import { Link } from "react-router-dom";

const highrides = () => {
  return (
    <section className="bg-white h-screen flex items-center justify-center">
      <div className="container h-full pb-14 pt-16 flex flex-col">
        <h1 className="text-4xl font-bold text-left pb-10">High Thrill Rides</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Ride 1 */}
          <div className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center p-4 py-7">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Kingda_Ka_tower.jpg/390px-Kingda_Ka_tower.jpg" alt="High Thrill Ride 1" className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold text-center px-3">RollerCoaster Tycoon</h2>
            <p className="text-center px-3">Get ready for the ultimate roller coaster experience with twists, turns, and a breathtaking drop!</p>
            <Link to="/cart" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</Link>
          </div>
          {/* Ride 2 */}
          <div className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center p-4 py-7">
            <img src="https://www.intamin.com/wp-content/uploads/2019/09/intamin-amusement-rides-vertical-rides-products-overview-gyro-drop-370x200.jpg" alt="High Thrill Ride 2" className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold text-center px-3">Vertical Drop</h2>
            <p className="text-center px-3">Experience the thrill of falling from a height with a straight drop that will leave you breathless!</p>
            <Link to="/cart" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</Link>
          </div>
          {/* Ride 3 */}
          <div className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center p-4 py-7">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Chair-O-Planes%2C_night.jpg/330px-Chair-O-Planes%2C_night.jpg" alt="High Thrill Ride 3" className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold text-center px-3">Spinning Swing</h2>
            <p className="text-center px-3">Feel the rush as you swing high above the park while spinning in circles!</p>
            <Link to="/cart" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default highrides;
