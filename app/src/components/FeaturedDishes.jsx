import React from "react";

const dishesData = [
  {
    id: "d1",
    name: "Rustic Margherita Pizza",
    price: "$18.00",
    description: "Wood-fired crust, San Marzano tomatoes, fresh mozzarella, and basil.",
    rating: "4.9",
    reviews: "120",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "d2",
    name: "Truffle Smash Burger",
    price: "$15.50",
    description: "Double wagyu beef patty, truffle aioli, caramelized onions, brioche bun.",
    rating: "4.8",
    reviews: "85",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "d3",
    name: "Premium Nigiri Set",
    price: "$24.00",
    description: "Chef's selection of fresh seasonal fish, delicate sushi rice.",
    rating: "4.9",
    reviews: "210",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "d4",
    name: "Tropical Ahi Poke",
    price: "$16.50",
    description: "Marinated tuna, mango, avocado, edamame, atop warm quinoa.",
    rating: "4.7",
    reviews: "94",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "d5",
    name: "Wild Mushroom Risotto",
    price: "$19.00",
    description: "Creamy arborio rice, porcini mushrooms, parmesan, white wine reduction.",
    rating: "4.8",
    reviews: "112",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "d6",
    name: "Molten Lava Cake",
    price: "$12.00",
    description: "Warm dark chocolate center, vanilla bean ice cream, raspberry coulis.",
    rating: "4.9",
    reviews: "340",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop"
  }
];

function FeaturedDishes() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-extrabold text-secondary tracking-tight">
          Featured Dishes
        </h2>
        <a 
          href="/Menu" 
          className="text-primary font-bold text-sm hover:underline flex items-center gap-1"
        >
          View all &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishesData.map((dish) => (
          <div 
            key={dish.id} 
            className="group bg-[#FAF6F3]/50 rounded-[32px] overflow-hidden border border-[#EAE5E2] flex flex-col h-full hover:shadow-lg transition duration-300 relative"
          >
            <div className="relative w-full aspect-[16/11] overflow-hidden bg-neutral/5">
              <img 
                src={dish.image} 
                alt={dish.name} 
                className="w-full h-full object-cover group-hover:scale-102 transition duration-500"
              />
              <button 
                className="absolute top-4 right-4 bg-white/95 text-secondary/50 p-2.5 rounded-full shadow-sm hover:text-primary transition hover:scale-105 cursor-pointer flex items-center justify-center"
                aria-label="Add to Favorites"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-[18px] h-[18px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </button>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start gap-2 mb-2">
                <h3 className="font-extrabold text-[19px] text-secondary group-hover:text-primary transition duration-300">
                  {dish.name}
                </h3>
                <span className="font-extrabold text-[19px] text-[#B43E12] shrink-0">
                  {dish.price}
                </span>
              </div>

              <p className="text-neutral/75 text-sm font-medium leading-relaxed mb-6 flex-1 line-clamp-2">
                {dish.description}
              </p>

          
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1 text-sm font-bold text-[#A89A90]">
                  <span className="text-amber-500 text-lg">★</span>
                  <span className="text-secondary font-extrabold text-[15px]">{dish.rating}</span>
                  <span className="text-neutral/50 font-semibold text-xs">({dish.reviews})</span>
                </div>

                <button 
                  className="w-9 h-9 rounded-full bg-primary hover:bg-[#E0531F] text-white flex items-center justify-center transition active:scale-95 cursor-pointer shadow-sm shadow-primary/20"
                  aria-label="Add to Cart"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-[18px] h-[18px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedDishes;
