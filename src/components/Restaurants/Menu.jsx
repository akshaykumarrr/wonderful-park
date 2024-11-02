import React from 'react';

function Menu({ menuItems }) {
    return (
        <div className="menu">
            <h2 className="text-2xl font-bold">Menu</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {menuItems.map(item => (
                    <div key={item.id} className="p-4 bg-white rounded shadow">
                        <img src={item.src} alt={item.name} className="h-32 w-full object-cover rounded" />
                        <h3 className="font-semibold">{item.name}</h3>
                        <p>${item.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
