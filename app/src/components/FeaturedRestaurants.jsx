import mockRestaurants from "../data/mockRestaurants.json";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function FeaturedRestaurants (){
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
         
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                    <span className="text-xs font-extrabold tracking-widest text-primary uppercase">
                        Local Favorites
                    </span>
                    <h2 className="text-4xl font-extrabold text-secondary tracking-tight mt-1">
                        Featured Restaurants
                    </h2>
                </div>
                <p className="text-neutral font-medium max-w-md">
                    Handpicked top culinary spots in Lahore, offering everything from traditional Desi to gourmet burgers.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockRestaurants.map((restaurant, idx) => {
                    const ratings = ["4.8", "4.6", "4.9", "4.7", "4.5", "4.8"];
                    const deliveryTimes = ["20-30 min", "15-25 min", "30-40 min", "25-35 min", "20-30 min", "15-25 min"];
                    
                    return (
                        <Link 
                            to="/Menu"
                            state={{ restaurantName: restaurant.name }}
                            key={restaurant.id} 
                            className="group bg-white rounded-3xl overflow-hidden border border-[#EAE5E2] shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col h-full cursor-pointer"
                        >
                          
                            <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral/10">
                                <img 
                                    src={restaurant.images?.[0] || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop'} 
                                    alt={restaurant.name} 
                                    className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-secondary font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-sm">
                                        {restaurant.menu?.[0]?.category || 'Gourmet'}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex justify-between items-start gap-2 mb-3">
                                    <h3 className="font-extrabold text-xl text-secondary group-hover:text-primary transition duration-300">
                                        {restaurant.name}
                                    </h3>
                                    <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-lg text-xs font-bold border border-amber-200 shrink-0">
                                        ⭐ {ratings[idx] || "4.7"}
                                    </div>
                                </div>

                                <p className="text-neutral/80 text-sm font-medium leading-relaxed mb-6 flex-1 line-clamp-2">
                                    {restaurant.description}
                                </p>

                                <div className="flex items-center justify-between border-t border-[#EAE5E2] pt-4 mt-auto">
                                    <span className="text-xs font-bold text-neutral/70 flex items-center gap-1.5">
                                        <svg className="w-4 h-4 text-neutral/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        {deliveryTimes[idx] || "20-30 min"}
                                    </span>
                                    <span className="text-xs font-extrabold text-primary group-hover:underline">
                                        View Menu &rarr;
                                    </span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default FeaturedRestaurants