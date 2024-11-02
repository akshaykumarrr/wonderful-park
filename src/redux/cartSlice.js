// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalAmount: 0, // Initialize totalAmount
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            state.totalAmount += action.payload.price; // Add item price to totalAmount
        },
        removeFromCart: (state, action) => {
            const itemToRemove = state.items.find(item => item.id === action.payload.id);
            if (itemToRemove) {
                state.totalAmount -= itemToRemove.price; 
                state.items = state.items.filter(item => item.id !== action.payload.id);
            }
        },
        calculateTotalAmount: (state) => {
            // Recalculate totalAmount from items array
            state.totalAmount = state.items.reduce((acc, item) => acc + item.price, 0);
        },
    },
});

export const { addToCart, removeFromCart, calculateTotalAmount } = cartSlice.actions;

export default cartSlice.reducer;
