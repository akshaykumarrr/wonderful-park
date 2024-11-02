// WheelChair.jsx
import React, { useState } from 'react';
import oldWheelChair from '../../javascript/oldWheelChair';
import handicappedWheelChair from '../../javascript/handicappedWheelChair';
import WheelchairCard from './WheelchairCard'; // Import the new component

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
                        className="text-gray-400 font-bold p-8 rounded-xl cursor-pointer shadow-lg transform hover:scale-105 transition duration-300 ease-in-out relative"
                        onClick={() => handleSelect(oldWheelChair)} // Corrected the variable name
                    >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4JV1XZi2lUKIpXHSYtFdb5a91EMhwiouMXQ&s"
                            alt="Old People Wheelchair"
                            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white"
                        />
                        <h2 className="text-3xl text-center mb-2">Old People Wheelchairs</h2>
                    </div>

                    <div
                        className="text-gray-400 font-bold p-8 rounded-xl cursor-pointer shadow-lg transform hover:scale-105 transition duration-300 ease-in-out relative"
                        onClick={() => handleSelect(handicappedWheelChair)} // Corrected the variable name
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
                        <WheelchairCard key={wheelchair.id} wheelchair={wheelchair} /> // Use WheelchairCard component
                    ))}
                </div>
            </div>
        </>
    );
}

export default WheelChair;
