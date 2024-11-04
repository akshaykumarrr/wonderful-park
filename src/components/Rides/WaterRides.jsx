import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const WaterRides = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (ride) => {
    addToCart(ride);
    alert(`${ride.title} has been added to the cart.`);
  };

  const rides = [
    {
      id: 1,
      title: "Wave Pool",
      img: "https://t.ly/hhFgk",
      description: "Splash around in our massive wave pool, perfect for all ages!"
    },
    {
      id: 2,
      title: "Lazy River",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXSO0Dje1UrDEVH7UT5jQzEZn3ma-Tjj5EQ&s",
      description: "Relax and float along our gentle lazy river ride, perfect for a leisurely day!"
    },
    {
      id: 3,
      title: "Tidal Wave",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPpCIgsk7E7o1_TL36HRy4lr7cgfOCHzwKeA&s",
      description: "Experience the thrill of our giant swing that sends you plummeting into the splash zone!"
    }
  ];

  return (
    <section className="bg-white h-screen flex items-center justify-center">
      <div className="container h-full pb-14 pt-16 flex flex-col">
        <h1 className="text-4xl font-bold text-left pb-10">Water Rides</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {rides.map((ride) => (
            <div key={ride.id} className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center p-4 py-7">
              <img src={ride.img} alt={ride.title} className="w-full h-48 object-cover rounded" />
              <h2 className="text-lg font-semibold text-center px-3">{ride.title}</h2>
              <p className="text-center px-3">{ride.description}</p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => handleAddToCart({ id: ride.id, title: ride.title })}
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

export default WaterRides;
