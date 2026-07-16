import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import mockRestaurants from "../data/mockRestaurants.json";
import { useCart } from "../context/CartContext";
import ProductDetailModal from "../components/ProductDetailModal.jsx";

const getItemRating = (id) => {
  const num = parseInt(id.replace(/\D/g, "")) || 0;
  return 4.0 + (num % 10) * 0.1;
};

const getItemReviewsCount = (id) => {
  const num = parseInt(id.replace(/\D/g, "")) || 0;
  return 15 + (num % 85);
};

const getPriceTier = (price) => {
  if (price < 7.00) return "$";
  if (price <= 16.00) return "$$";
  return "$$$";
};

const getDietaryTag = (itemId) => {
  const idNum = parseInt(itemId.replace(/\D/g, "")) || 0;
  const mod = idNum % 4;
  if (mod === 0) return "Veg";
  if (mod === 1) return "Vegan";
  if (mod === 2) return "Gluten-Free";
  return "Non-Veg";
};

function Menu() {
  const location = useLocation();
  const restaurantName = location.state?.restaurantName || "Our Menu";
  const isGlobalMenu = restaurantName === "Our Menu";
  
  const { addToCart, setIsCartOpen, toggleWishlist, isInWishlist } = useCart();
  
  const restaurantDetails = isGlobalMenu 
    ? {
        name: "Our Menu",
        description: "Discover culinary comfort crafted with fresh ingredients and a lot of love. From sun-drenched Italian classics to modern American favorites."
      }
    : (mockRestaurants.find(restaurant => restaurant.name === restaurantName) || mockRestaurants[0]);

  const menuItems = useMemo(() => {
    if (isGlobalMenu) {
      return mockRestaurants.flatMap(r => r.menu.map(item => ({ ...item, restaurantName: r.name })));
    }
    return (restaurantDetails?.menu || []).map(item => ({ ...item, restaurantName: restaurantDetails.name }));
  }, [restaurantDetails, isGlobalMenu]);

  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [selectedRating, setSelectedRating] = useState("Any");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedDietary, setSelectedDietary] = useState("All");
  const [selectedDetailItem, setSelectedDetailItem] = useState(null);

  const cuisineCategories = useMemo(() => {
    const categories = new Set(menuItems.map(item => item.category));
    return ["All", ...Array.from(categories)];
  }, [menuItems]);

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const rating = getItemRating(item.id);
      const priceTier = getPriceTier(item.price);
      const dietary = getDietaryTag(item.id);

      const matchesCuisine = selectedCuisine === "All" || item.category === selectedCuisine;
      const matchesRating = selectedRating === "Any" || rating >= parseFloat(selectedRating);
      const matchesPrice = selectedPrice === "All" || priceTier === selectedPrice;
      const matchesDietary = selectedDietary === "All" || dietary === selectedDietary;

      return matchesCuisine && matchesRating && matchesPrice && matchesDietary;
    });
  }, [menuItems, selectedCuisine, selectedRating, selectedPrice, selectedDietary]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 w-full flex-1">

      <div className="mb-10">
        <span className="text-xs font-extrabold tracking-widest text-primary uppercase">
          Menu Exploration
        </span>
        <h1 className="text-3xl lg:text-5xl font-black text-secondary tracking-tight mt-1 mb-2">
          {isGlobalMenu ? (
            <>Explore the <span className="text-primary underline">Menu</span></>
          ) : (
            <>Explore <span className="text-primary underline">{restaurantDetails.name}'s</span> Menu</>
          )}
        </h1>
        <p className="text-neutral font-medium text-sm max-w-2xl leading-relaxed">
          {restaurantDetails.description}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start w-full">

        <aside className="w-full lg:w-60 shrink-0 flex flex-col sm:flex-row lg:flex-col gap-6 bg-white border border-[#EAE5E2] rounded-[32px] p-6 shadow-sm">
          
          <div className="flex-1 space-y-3">
            <h3 className="text-xs font-extrabold tracking-wider text-neutral/70 uppercase">
              Cuisine
            </h3>
            <div className="flex flex-wrap gap-2">
              {cuisineCategories.map((cuisine) => (
                <button
                  key={cuisine}
                  onClick={() => setSelectedCuisine(cuisine)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold border transition cursor-pointer ${
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

          <div className="flex-1 space-y-3">
            <h3 className="text-xs font-extrabold tracking-wider text-neutral/70 uppercase">
              Dietary
            </h3>
            <div className="flex flex-wrap gap-2">
              {["All", "Veg", "Non-Veg", "Vegan", "Gluten-Free"].map((diet) => (
                <button
                  key={diet}
                  onClick={() => setSelectedDietary(diet)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold border transition cursor-pointer ${
                    selectedDietary === diet
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-[#FAF6F3] border-[#EAE5E2] text-secondary hover:bg-[#EAE5E2]"
                  }`}
                >
                  {diet}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <h3 className="text-xs font-extrabold tracking-wider text-neutral/70 uppercase">
              Rating
            </h3>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Any Rating", value: "Any" },
                { label: "4.2+ ★", value: "4.2" },
                { label: "4.5+ ★", value: "4.5" }
              ].map((opt) => (
                <label key={opt.value} className="flex items-center gap-3 text-xs font-semibold text-secondary cursor-pointer select-none">
                  <input
                    type="radio"
                    name="rating-filter"
                    checked={selectedRating === opt.value}
                    onChange={() => setSelectedRating(opt.value)}
                    className="accent-primary w-4 h-4 cursor-pointer"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <h3 className="text-xs font-extrabold tracking-wider text-neutral/70 uppercase">
              Price
            </h3>
            <div className="flex gap-2">
              {["$", "$$", "$$$"].map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedPrice(selectedPrice === tier ? "All" : tier)}
                  className={`flex-1 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer text-center ${
                    selectedPrice === tier
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-[#FAF6F3] border-[#EAE5E2] text-secondary hover:bg-[#EAE5E2]"
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex-1 w-full">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-[32px] border border-[#EAE5E2] shadow-sm">
              <p className="text-neutral font-medium text-lg">No dishes found matching the selected filters.</p>
              <button 
                onClick={() => { setSelectedCuisine("All"); setSelectedRating("Any"); setSelectedPrice("All"); setSelectedDietary("All"); }}
                className="mt-4 text-primary font-bold text-sm hover:underline cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => {
                const rating = getItemRating(item.id);
                const reviews = getItemReviewsCount(item.id);
                const dietaryTag = getDietaryTag(item.id);
                const liked = isInWishlist(item.id);
                const currentRestName = item.restaurantName || restaurantDetails.name;

                return (
                  <div 
                    key={item.id} 
                    className="group bg-white rounded-3xl overflow-hidden border border-[#EAE5E2] shadow-sm hover:shadow-lg transition duration-300 flex flex-col h-full relative"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(item, currentRestName);
                      }}
                      className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-xs p-1.5 rounded-full shadow-xs hover:scale-105 transition cursor-pointer text-neutral/50 hover:text-[#B43E12]"
                    >
                      <span className="text-[12px]">{liked ? "❤️" : "🤍"}</span>
                    </button>

                    <div 
                      onClick={() => setSelectedDetailItem({ ...item, restaurantName: currentRestName })}
                      className="cursor-pointer flex-1 flex flex-col"
                    >
                      <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral/10">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-102 transition duration-500"
                        />
                        <div className="absolute top-3 right-3">
                          <span className="bg-white/95 backdrop-blur-sm text-secondary font-extrabold text-[10px] px-2 py-0.5 rounded-full shadow-sm border border-[#EAE5E2] flex items-center gap-0.5">
                            ⭐ {rating.toFixed(1)}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex justify-between items-start gap-2 mb-1.5">
                          <h3 className="font-extrabold text-sm text-secondary group-hover:text-primary transition duration-300 leading-snug">
                            {item.name}
                          </h3>
                          <span className="font-extrabold text-sm text-[#B43E12] shrink-0">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>

                        <p className="text-neutral/80 text-xs font-medium leading-relaxed mb-4 flex-1 line-clamp-2">
                          {item.description}
                        </p>

                        <div className="flex items-center justify-between border-t border-[#EAE5E2]/60 pt-3 mt-auto">
                          <div className="flex gap-1.5">
                            <span className="bg-[#FAF6F3] text-neutral text-[9px] font-bold px-2 py-0.5 rounded-md border border-[#EAE5E2]">
                              {item.category}
                            </span>
                            <span className={`text-[9px] font-black px-2 py-0.5 rounded-md border ${
                              dietaryTag === "Veg" || dietaryTag === "Vegan"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                : "bg-orange-50 text-[#FF6B35] border-orange-200"
                            }`}>
                              {dietaryTag}
                            </span>
                          </div>

                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(item, currentRestName);
                              setIsCartOpen(true);
                            }}
                            className="w-7 h-7 rounded-full bg-primary hover:bg-[#E0531F] text-white flex items-center justify-center transition active:scale-95 cursor-pointer shadow-xs"
                            aria-label="Add to Cart"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-[14px] h-[14px]">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {selectedDetailItem && (
        <ProductDetailModal
          item={selectedDetailItem}
          restaurantName={selectedDetailItem.restaurantName}
          onClose={() => setSelectedDetailItem(null)}
        />
      )}
    </div>
  );
}

export default Menu;