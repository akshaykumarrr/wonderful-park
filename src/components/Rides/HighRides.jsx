import React, { useContext } from "react";
import { CartContext } from "../CartContext"; 

const highrides = () => {
  const { addToCart } = useContext(CartContext); 

  const handleAddToCart = (ride) => {
    addToCart(ride);
    alert(`${ride.title} has been added to the cart.`);
  };

  const ridesData = [
    {
      id: 1,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Kingda_Ka_tower.jpg/390px-Kingda_Ka_tower.jpg",
      title: "RollerCoaster Tycoon",
      description: "Get ready for the ultimate roller coaster experience with twists, turns, and a breathtaking drop!",
    },
    {
      id: 2,
      src: "https://www.intamin.com/wp-content/uploads/2019/09/intamin-amusement-rides-vertical-rides-products-overview-gyro-drop-370x200.jpg",
      title: "Vertical Drop",
      description: "Experience the thrill of falling from a height with a straight drop that will leave you breathless!",
    },
    {
      id: 3,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Chair-O-Planes%2C_night.jpg/330px-Chair-O-Planes%2C_night.jpg",
      title: "Spinning Swing",
      description: "Feel the rush as you swing high above the park while spinning in circles!",
    },
  ];

  return (
    <section className="bg-white h-screen flex items-center justify-center">
      <div className="container h-full pb-14 pt-16 flex flex-col">
        <h1 className="text-4xl font-bold text-left pb-10">High Thrill Rides</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ridesData.map((ride) => (
            <div key={ride.id} className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center p-4 py-7">
              <img src={ride.src} alt={`High Thrill Ride ${ride.id}`} className="w-full h-48 object-cover rounded" />
              <h2 className="text-lg font-semibold text-center px-3">{ride.title}</h2>
              <p className="text-center px-3">{ride.description}</p>
              <button 
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => handleAddToCart(ride)} 
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default highrides;
