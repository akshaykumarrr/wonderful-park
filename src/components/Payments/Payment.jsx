// Payment.js
import React from 'react';
import { useSelector } from 'react-redux';
import qr from './scanner.jpg';

function Payment() {
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    return (
        <div className="flex justify-center items-center">
            <div className="p-5 bg-gray-100 rounded-lg shadow-lg my-[25vh] w-[50vw]">
                <h1 className="text-4xl font-bold text-center mb-4">Pay Here !!</h1>
                <p className="text-lg font-semibold text-center mb-6">
                    Total Amount: <span className="text-green-600">${totalAmount.toFixed(2)}</span>
                </p>
                <div className="flex flex-col items-center">
                    {/* QR Code */}
                    <div className="w-32 h-32 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                        <img src={qr} alt="QR Code" />
                    </div>
                    {/* Transaction ID input */}
                    <input
                        type="text"
                        placeholder="Enter Transaction ID"
                        className="p-2 border border-gray-300 rounded-md mb-4 w-64"
                    />
                    <button
                        className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
                    >
                        Submit Payment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Payment;
