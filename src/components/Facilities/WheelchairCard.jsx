// WheelchairCard.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice'; // Adjust the path as necessary

function WheelchairCard({ wheelchair }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(wheelchair)); 
        alert(`${wheelchair.title} added to cart`); // Alert for confirmation
    };

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img className="w-full h-48 object-contain" src={wheelchair.src} alt={wheelchair.title} />
            <div className="p-5">
                <h1 className="font-bold text-xl text-gray-800">{wheelchair.title}</h1>
                <p className="text-gray-600">Price: {wheelchair.price}</p>
                <p className="text-gray-600">Duration: {wheelchair.duration}</p>
                <button 
                    onClick={handleAddToCart} // Call the handler
                    className="mt-4 w-full p-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-200 ease-in-out"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default WheelchairCard;
