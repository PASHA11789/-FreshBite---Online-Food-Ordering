import mockRestaurants from "../data/mockRestaurants.json";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const restaurantDetailsMap = {
  r1: { rating: 4.8, priceTier: "$$$", deliveryTime: "20-30 min" },
  r2: { rating: 4.6, priceTier: "$$", deliveryTime: "15-25 min" },
  r3: { rating: 4.9, priceTier: "$$", deliveryTime: "30-40 min" },
  r4: { rating: 4.7, priceTier: "$$$", deliveryTime: "25-35 min" },
  r5: { rating: 4.5, priceTier: "$$", deliveryTime: "20-30 min" },
  r6: { rating: 4.8, priceTier: "$", deliveryTime: "15-25 min" }
};

function FeaturedRestaurants() {
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [selectedRating, setSelectedRating] = useState("Any");
  const [selectedPrice, setSelectedPrice] = useState("All");

  const cuisineCategories = ["All", "Desi", "Fast Food", "Drinks", "Desserts"];

  const filteredRestaurants = useMemo(() => {
    return mockRestaurants.filter((restaurant) => {
      const details = restaurantDetailsMap[restaurant.id] || { rating: 4.7, priceTier: "$$", deliveryTime: "20-30" };
      
      const matchesCuisine =
        selectedCuisine === "All" ||
        restaurant.menu.some((item) => item.category === selectedCuisine);

      const matchesRating =
        selectedRating === "Any" ||
        details.rating >= parseFloat(selectedRating);

      const matchesPrice =
        selectedPrice === "All" ||
        details.priceTier === selectedPrice;

      return matchesCuisine && matchesRating && matchesPrice;
    });
  }, [selectedCuisine, selectedRating, selectedPrice]);

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

      <div className="bg-white border border-[#EAE5E2] rounded-[28px] p-5 mb-8 shadow-xs flex flex-col md:flex-row gap-6 md:items-center justify-between">
        <div className="space-y-2.5">
          <span className="text-[10px] font-extrabold tracking-wider text-neutral/70 uppercase block">Cuisine</span>
          <div className="flex flex-wrap gap-2">
            {cuisineCategories.map((cuisine) => (
              <button
                key={cuisine}
                onClick={() => setSelectedCuisine(cuisine)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition cursor-pointer ${
                  selectedCuisine === cuisine
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-[#FAF6F3] border-[#EAE5E2] text-secondary hover:bg-[#EAE5E2]"
                }`}
              >
                {cuisine}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-6 items-center">
          <div className="space-y-2.5">
            <span className="text-[10px] font-extrabold tracking-wider text-neutral/70 uppercase block">Rating</span>
            <div className="flex gap-2">
              {[
                { label: "Any Rating", value: "Any" },
                { label: "4.6+ ★", value: "4.6" },
                { label: "4.8+ ★", value: "4.8" }
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSelectedRating(opt.value)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                    selectedRating === opt.value
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-[#FAF6F3] border-[#EAE5E2] text-secondary hover:bg-[#EAE5E2]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2.5">
            <span className="text-[10px] font-extrabold tracking-wider text-neutral/70 uppercase block">Price</span>
            <div className="flex gap-2">
              {["All", "$", "$$", "$$$"].map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedPrice(tier)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                    selectedPrice === tier
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-[#FAF6F3] border-[#EAE5E2] text-secondary hover:bg-[#EAE5E2]"
                  }`}
                >
                  {tier === "All" ? "Any Price" : tier}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {filteredRestaurants.length === 0 ? (
        <div className="text-center py-16 bg-white border border-[#EAE5E2] rounded-[32px] shadow-sm">
          <p className="text-neutral font-medium text-lg">No restaurants match your selected filters.</p>
          <button
            onClick={() => {
              setSelectedCuisine("All");
              setSelectedRating("Any");
              setSelectedPrice("All");
            }}
            className="mt-4 text-primary font-bold text-sm hover:underline cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((restaurant) => {
            const details = restaurantDetailsMap[restaurant.id] || { rating: 4.7, priceTier: "$$", deliveryTime: "20-30 min" };

            return (
              <Link
                to="/Menu"
                state={{ restaurantName: restaurant.name }}
                key={restaurant.id}
                className="group bg-white rounded-3xl overflow-hidden border border-[#EAE5E2] shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col h-full cursor-pointer"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral/10">
                  <img
                    src={
                      restaurant.images?.[0] ||
                      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop"
                    }
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-secondary font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-sm">
                      {restaurant.menu?.[0]?.category || "Gourmet"}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-sm border border-cream/20">
                      {details.priceTier}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <h3 className="font-extrabold text-xl text-secondary group-hover:text-primary transition duration-300">
                      {restaurant.name}
                    </h3>
                    <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-lg text-xs font-bold border border-amber-200 shrink-0">
                      ⭐ {details.rating.toFixed(1)}
                    </div>
                  </div>

                  <p className="text-neutral/80 text-sm font-medium leading-relaxed mb-6 flex-1 line-clamp-2">
                    {restaurant.description}
                  </p>

                  <div className="flex items-center justify-between border-t border-[#EAE5E2] pt-4 mt-auto">
                    <span className="text-xs font-bold text-neutral/70 flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4 text-neutral/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      {details.deliveryTime}
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
      )}
    </div>
  );
}

export default FeaturedRestaurants;