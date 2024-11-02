// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0, // Initialize total
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            state.total += action.payload.price; // Add item price to the total
        },
        removeFromCart: (state, action) => {
            const itemToRemove = state.items.find(item => item.id === action.payload.id);
            if (itemToRemove) {
                state.total -= itemToRemove.price; 
                state.items = state.items.filter(item => item.id !== action.payload.id);
            }
        },
        calculateTotal: (state) => {
            
            state.total = state.items.reduce((acc, item) => acc + item.price, 0);
        },
    },
});

export const { addToCart, removeFromCart, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;
