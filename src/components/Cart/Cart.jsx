// Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, calculateTotalAmount } from '../../redux/cartSlice';

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    React.useEffect(() => {
        dispatch(calculateTotalAmount()); // Ensure totalAmount is up-to-date in Redux
    }, [cartItems, dispatch]);

    const handleRemoveItem = (itemId) => {
        dispatch(removeFromCart({ id: itemId }));
    };

    return (
        <div className="p-5 bg-gray-100 rounded-lg shadow-lg mt-5">
            <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
            {cartItems.length > 0 ? (
                <>
                    <ul className="space-y-4">
                        {cartItems.map((item, index) => (
                            <li key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
                                <img src={item.src} className="h-24 w-24 object-contain" alt={item.name} />
                                <span className="flex-1 mx-4 text-center font-medium">{item.name}</span>
                                <span className="font-semibold text-lg">${item.price.toFixed(2)}</span>
                                <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="ml-4 text-red-600 hover:text-red-800 transition duration-200"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 sticky bottom-0 bg-gray-200 p-4 rounded-lg shadow-lg flex justify-between items-center">
                        <h3 className="text-lg font-bold">Total: <span className="text-green-600">${totalAmount.toFixed(2)}</span></h3>
                        <Link to='/payment'>
                            <button
                                className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-green-700 transition duration-200"
                            >
                                Pay Now
                            </button>
                        </Link>
                    </div>
                </>
            ) : (
                <p className="text-center">No items in the cart.</p>
            )}
        </div>
    );
}

export default Cart;
