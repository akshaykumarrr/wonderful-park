import React from "react";
import { useCart } from '../CartContext';

const DryRides = () => {
  const { addToCart } = useCart();

  const rides = [
    {
      id: 1,
      title: "Classic Carousel",
      description: "Enjoy a classic carousel ride with beautiful horses and gentle music!",
      imgSrc: "https://funderlandpark.com/wp-content/uploads/2016/09/boy-carousel_11a9346e0a8e072646ba660ee773664c.jpg"
    },
    {
      id: 2,
      title: "Ferris Wheel",
      description: "Get a bird's eye view of the park from our giant Ferris wheel, perfect for families!",
      imgSrc: "https://media.istockphoto.com/id/186293315/photo/looping-roller-coaster.jpg?s=612x612&w=0&k=20&c=r0Uq8QvhEjoFOodlgaD_5gMOYOF4rbFxKIp6UOFrcJA="
    },
    {
      id: 3,
      title: "Gentle Roller Coaster",
      description: "A smooth and gentle roller coaster perfect for the whole family!",
      imgSrc: "https://i.pinimg.com/564x/c8/34/0d/c8340d31ef696a16319515bb53bd340d.jpg"
    }
  ];

  const handleAddToCart = (ride) => {
    addToCart(ride);
    alert(`${ride.title} has been added to your cart!`); 
  };

  return (
    <section className="bg-white h-screen flex items-center justify-center">
      <div className="container h-full pb-14 pt-16 flex flex-col">
        <h1 className="text-4xl font-bold text-left pb-10">Dry Rides</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {rides.map((ride) => (
            <div key={ride.id} className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center p-4 py-7">
              <img src={ride.imgSrc} alt={ride.title} className="w-full h-48 object-cover rounded" />
              <h2 className="text-lg font-semibold text-center px-3">{ride.title}</h2>
              <p className="text-center px-3">{ride.description}</p>
              <button
                onClick={() => handleAddToCart(ride)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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

export default DryRides;
