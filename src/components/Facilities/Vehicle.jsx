import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

function Vehicle({ vehicle }) {
    const dispatch = useDispatch();

    // Check if vehicle is undefined
    if (!vehicle) {
        return <div>Loading...</div>; // Or handle the case as you wish
    }

    const handleAddToCart = () => {
        dispatch(addToCart(vehicle));
        alert("Vehicle added to cart");
    };

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={vehicle.src} alt={vehicle.name} />
            <div className="p-5">
                <h1 className="font-bold text-xl text-gray-800">{vehicle.name}</h1>
                <p className="text-gray-600">Price: ${vehicle.price}</p>
                <p className="text-gray-600">Duration: {vehicle.duration}</p>
                <button
                    onClick={handleAddToCart}
                    className="mt-4 w-full p-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-gray-600 transition duration-200 ease-in-out"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Vehicle;
