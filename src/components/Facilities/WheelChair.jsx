import React, { useState } from 'react';

const oldWheelChairData = [
    {
        id: 1,
        src: "https://media.seniority.in/catalog/product/cache/5e761624598432260ed1d4db05cdec91/7/1/71_ngee1d5l.jpg",
        title: "Regular Wheel Chair",
        price: "45$",
        duration: "1 day",
    },
    {
        id: 2,
        src: "https://5.imimg.com/data5/SELLER/Default/2024/2/391391565/OB/JG/XI/2118790/front-wheel-drive-power-chair-500x500.jpg",
        title: "Automatic Wheel Chair",
        price: "90$",
        duration: "1 hour",
    },
    {
        id: 3,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lR8sWaRUUh3_yL2XaU-Hc4CHAzqMIFtNCw&s",
        title: "Comfort-pro Wheel Chair",
        price: "110$",
        duration: "1 day",
    },
];

const handicappedWheelChairData = [
    {
        id: 1,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4EdHFC_e-KkrLXq_SNTc0rbwzPWf9iukYA&s",
        title: "Handicapped Wheel Chair",
        price: "45$",
        duration: "1 day",
    },
    {
        id: 2,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9STMAbS2mwmXbDqrC7DTcvRqfdhyxulxJRA&s",
        title: "Automatic Handicapped Wheel Chair",
        price: "90$",
        duration: "1 day",
    },
    {
        id: 3,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujHYkQelEeZXllpsnEsaqe6fUNfBZltXu_w&s",
        title: "Comfort-Handicapped Wheel Chair",
        price: "45$",
        duration: "1 day",
    },
];

function WheelChair() {
    const [selectedData, setSelectedData] = useState([]);

    const handleSelect = (data) => {
        setSelectedData(data);
    };

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="flex bg-gray-300 h-[20vh] w-full items-center justify-center">
                    <h1 className="m-5 text-gray-600 font-bold text-4xl">Book Wheelchairs Now</h1>
                </div>

                <div className="flex gap-8 my-12">
    <div
        className=" text-gray-400 font-bold p-8 rounded-xl cursor-pointer shadow-lg transform hover:scale-105 transition duration-300 ease-in-out relative"
        onClick={() => handleSelect(oldWheelChairData)}
    >
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4JV1XZi2lUKIpXHSYtFdb5a91EMhwiouMXQ&s"
            alt="Old People Wheelchair"
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white"
        />
        <h2 className="text-3xl text-center mb-2">Old People Wheelchairs</h2>
        
    </div>

    <div
        className=" text-gray-400 font-bold p-8 rounded-xl cursor-pointer shadow-lg transform hover:scale-105 transition duration-300 ease-in-out relative"
        onClick={() => handleSelect(handicappedWheelChairData)}
    >
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJLCrCGXKClohXnLUjS1BRBTpZ9ItUOyoz-w&s"
            alt="Handicapped Wheelchair"
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white"
        />
        <h2 className="text-3xl text-center mb-2">Handicapped Wheelchairs</h2>
        
    </div>
</div>


                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 w-full">
                    {selectedData.map((wheelchair) => (
                        <div key={wheelchair.id} className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                            <img className="w-full h-48 object-contain" src={wheelchair.src} alt={wheelchair.title} />
                            <div className="p-5">
                                <h1 className="font-bold text-xl text-gray-800">{wheelchair.title}</h1>
                                <p className="text-gray-600">Price: {wheelchair.price}</p>
                                <p className="text-gray-600">Duration: {wheelchair.duration}</p>
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

export default WheelChair;