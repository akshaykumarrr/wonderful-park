import React from 'react';

const vehiclesData = [
    {
        id: 1,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQ8iNdbUksVL82kB2DGXrAxNu7Qi5wfH2uA&s",
        title: "Scooter",
        price: "23$",
        duration: "1 hour",
    },
    {
        id: 2,
        src: "https://5.imimg.com/data5/SELLER/Default/2023/7/329417836/QA/LY/BK/11567184/14-seater-electric-sightseeing-bus-500x500.png",
        title: "Shuttle",
        price: "100$",
        duration: "1 hour",
    },


    {
        id: 3,
        src: "https://www.eichertrucksandbuses.com/_next/image?url=https%3A%2F%2Fcms.eichertrucksandbuses.com%2F%2Fuploads%2Ftruck%2Fsub-category%2F4e6bee24bedc8aaeebe89ee4d31d93f6.png&w=1080&q=75",
        title: "Bus",
        price: "11$",
        duration: "1 hour",

    },
];

function Vehicles() {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="flex bg-gray-300 h-[20vh] w-full items-center justify-center">
                    <h1 className="m-5 text-black font-bold text-4xl">Book Vehicles Now</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 w-full">
                    {vehiclesData.map((vehicle) => (
                        <div key={vehicle.id} className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                            <img className="w-full h-48 object-cover" src={vehicle.src} alt={vehicle.title} />
                            <div className="p-5">
                                <h1 className="font-bold text-xl text-gray-800">{vehicle.title}</h1>
                                <p className="text-gray-600">Price: {vehicle.price}</p>
                                <p className="text-gray-600">Duration: {vehicle.duration}</p>
                                <button className="mt-4 w-full p-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-200 ease-in-out">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Vehicles;