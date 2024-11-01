import React from 'react';

const MenuData = {
  1: {
    name: "Olive & Green",
    items: [
      {
        id: 1,
        src: "https://therecipecritic.com/wp-content/uploads/2020/03/pasta-primavera-recipe-2-644x1000.jpg",
        name: 'Pasta Primavera',
        price: 12.99,
      },
      {
        id: 2,
        src: "https://www.gimmesomeoven.com/wp-content/uploads/2015/08/Caesar-Pasta-Salad-Recipe-9.jpg",
        name: 'Caesar Salad',
        price: 10.99,
      },
      {
        id: 1,
        src: "https://therecipecritic.com/wp-content/uploads/2020/03/pasta-primavera-recipe-2-644x1000.jpg",
        name: 'Pasta Primavera',
        price: 12.99,
      },
      {
        id: 2,
        src: "https://www.gimmesomeoven.com/wp-content/uploads/2015/08/Caesar-Pasta-Salad-Recipe-9.jpg",
        name: 'Caesar Salad',
        price: 10.99,
      },
    ],
  },
  2: {
    name: "Taste of India",
    items: [
      {
        id: 1,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTyb7FzEPHg6xfD64EvDsj1k49dNAhxqYxA&s",
        name: 'Butter Chicken',
        price: 14.99,
      },
      {
        id: 2,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgaBMCL_wZQhQboQwdDHYBOlSZHkBrcyzg9A&s",
        name: 'Naan Bread',
        price: 3.99,
      },
      {
        id: 1,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTyb7FzEPHg6xfD64EvDsj1k49dNAhxqYxA&s",
        name: 'Butter Chicken',
        price: 14.99,
      },
      {
        id: 2,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgaBMCL_wZQhQboQwdDHYBOlSZHkBrcyzg9A&s",
        name: 'Naan Bread',
        price: 3.99,
      },
      
    ],
  },
  3: {
    name: "Phothin",
    items: [
      {
        id: 1,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3JlX8cbs7-Ih9KQ-McLJ0sT69VqusvWapw&s",
        name: 'Pad Thai',
        price: 11.99,
      },
      {
        id: 2,
        src: "https://themom100.com/wp-content/uploads/2024/01/vietnamese-spring-rolls-5580.jpg",
        name: 'Spring Rolls',
        price: 5.99,
      },
      {
        id: 1,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3JlX8cbs7-Ih9KQ-McLJ0sT69VqusvWapw&s",
        name: 'Pad Thai',
        price: 11.99,
      },
      {
        id: 2,
        src: "https://themom100.com/wp-content/uploads/2024/01/vietnamese-spring-rolls-5580.jpg",
        name: 'Spring Rolls',
        price: 5.99,
      },
    ],
  },
};

function Menu({ menuItems }) {
  const restaurantData = MenuData[menuItems] || {};
  const items = restaurantData.items || [];

  return (
    <div className="flex flex-col items-center w-full">
      <div className='bg-gray-200 h-[20vh] w-full flex items-center justify-center'>
        <h1 className='text-green-600 font-bold text-4xl'>{restaurantData.name}</h1>
      </div>

      <div className="p-5 bg-gray-100 rounded-lg shadow-lg mt-5 w-full">
        <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">Menu</h2>
        {items.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <img className='h-48 w-full object-cover rounded-t-lg' src={item.src} alt={item.name} />
                <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                <p className="text-gray-700 mb-4"> Price: ${item.price}</p>

                <button
                  className="w-[50%] flex items-center justify-center py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 transition duration-200 ease-in-out"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 ">No menu items available for this restaurant.</p>
        )}
      </div>
    </div>
  );
}

export default Menu;
