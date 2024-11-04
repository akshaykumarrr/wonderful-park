import React from "react";
import { useCart } from '../CartContext';

const KidsRides = () => {
  const { addToCart } = useCart();

  const rides = [
    {
      id: 1,
      title: "Mini Ferris Wheel",
      description: "A smaller version of the classic Ferris wheel, designed for little ones!",
      imgSrc: "https://api.zamperla.com/resource/12887"
    },
    {
      id: 2,
      title: "Bouncy Castle",
      description: "Jump around and have fun in our safe and colorful bouncy castle!",
      imgSrc: "https://media.istockphoto.com/id/462869443/photo/boys-in-bounce-house.jpg?s=612x612&w=0&k=20&c=81n9mNomDw5-FnELUVPcayRk_lgNRiFYgxlwrivuA30="
    },
    {
      id: 3,
      title: "Toy Train",
      description: "A fun and slow ride around the park on our adorable toy train!",
      imgSrc: "https://media.istockphoto.com/id/1449425093/photo/train-ride-to-childrens-amusement-park.jpg?s=612x612&w=0&k=20&c=Qo8q6j4oyocQ7v1ghDEQNifY2vqIWVR6rO55NK47xUc="
    }
  ];

  const handleAddToCart = (ride) => {
    addToCart(ride);
    alert(`${ride.title} has been added to your cart!`); // Alert message
  };

  return (
    <section className="bg-white h-screen flex items-center justify-center">
      <div className="container h-full pb-14 pt-16 flex flex-col">
        <h1 className="text-4xl font-bold text-left pb-10">Kids Rides</h1>
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

export default KidsRides;
