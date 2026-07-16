import React, { useState } from "react";
import { useCart } from "../context/CartContext";

function ProductDetailModal({ item, restaurantName, onClose }) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!item) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(item, restaurantName);
    }
    onClose();
  };

  const isLiked = isInWishlist(item.id);

  const ingredients = ["Fresh dough", "Olive oil", "Organic herbs", "Local spices", "Garlic butter", "Mozzarella cheese", "Himalayan salt"];
  const nutrition = {
    calories: "280 kcal",
    protein: "8.5 g",
    carbs: "32.0 g",
    fat: "11.2 g"
  };

  const reviews = [
    { name: "Fatima K.", rating: 5, comment: "Cozy taste, absolutely delicious! Order arrived hot and fresh." },
    { name: "Ali R.", rating: 4.5, comment: "Amazing flavor profiles. Could use slightly more garlic, but still excellent!" },
    { name: "Zainab M.", rating: 5, comment: "Cozy and delicious! My absolute go-to craving killer." }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      <div 
        className="absolute inset-0 bg-secondary/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative bg-[#FFF8F0] w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] border border-[#EAE5E2]">
        
        <div className="relative w-full md:w-1/2 aspect-[16/10] md:aspect-auto md:h-full bg-neutral/10 shrink-0">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => toggleWishlist(item, restaurantName)}
            className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs p-2.5 rounded-full shadow-sm hover:scale-105 transition cursor-pointer text-neutral hover:text-[#B43E12]"
            aria-label="Add to Wishlist"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill={isLiked ? "currentColor" : "none"} 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className={`w-5 h-5 ${isLiked ? "text-[#B43E12]" : "text-neutral/70"}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
          
          <div className="absolute bottom-4 left-4">
            <span className="bg-primary/95 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-sm">
              {item.category}
            </span>
          </div>
        </div>

        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-none">
          
          <div className="space-y-5">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-2xl font-black text-secondary leading-tight">
                  {item.name}
                </h3>
                <span className="text-xs font-bold text-neutral">
                  from {restaurantName}
                </span>
              </div>
              <button 
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-[#FAF6F3] text-secondary/60 hover:text-primary hover:bg-[#FFECE5] flex items-center justify-center transition cursor-pointer shrink-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-[18px] h-[18px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex justify-between items-baseline border-b border-[#EAE5E2]/60 pb-4">
              <span className="text-2xl font-black text-[#B43E12]">${item.price.toFixed(2)}</span>
            </div>

            <p className="text-neutral/80 text-sm font-medium leading-relaxed">
              {item.description}
            </p>

            <div>
              <h4 className="text-xs font-extrabold tracking-wider text-neutral/70 uppercase mb-2">Ingredients</h4>
              <div className="flex flex-wrap gap-1.5">
                {ingredients.map((ing, i) => (
                  <span key={i} className="bg-white border border-[#EAE5E2] rounded-lg px-2.5 py-1 text-[11px] font-semibold text-secondary">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#EAE5E2] rounded-2xl p-4">
              <h4 className="text-xs font-extrabold tracking-wider text-neutral/70 uppercase mb-3">Nutritional Information</h4>
              <div className="grid grid-cols-4 gap-2 text-center">
                {Object.entries(nutrition).map(([key, val]) => (
                  <div key={key} className="space-y-1">
                    <span className="text-[10px] font-extrabold text-neutral/60 uppercase">{key}</span>
                    <p className="text-[13px] font-black text-secondary">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-extrabold tracking-wider text-neutral/70 uppercase mb-3">Customer Reviews</h4>
              <div className="space-y-3">
                {reviews.map((rev, idx) => (
                  <div key={idx} className="bg-white/40 border border-[#EAE5E2]/50 rounded-2xl p-3.5 text-xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-extrabold text-secondary">{rev.name}</span>
                      <span className="text-amber-500 font-bold">★ {rev.rating}</span>
                    </div>
                    <p className="text-neutral font-medium leading-relaxed">{rev.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[#EAE5E2]/80 pt-6 mt-6 flex flex-col sm:flex-row items-center gap-4">
            
            <div className="bg-white rounded-2xl px-3 py-1.5 flex items-center gap-4 border border-[#EAE5E2] w-full sm:w-auto justify-between">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="text-neutral/70 hover:text-primary font-bold text-lg cursor-pointer px-2"
              >
                −
              </button>
              <span className="text-sm font-extrabold text-secondary select-none">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="text-neutral/70 hover:text-primary font-bold text-lg cursor-pointer px-2"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 w-full bg-primary hover:bg-[#E0531F] text-white py-3.5 rounded-2xl font-bold text-sm shadow-sm flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer"
            >
              <span>Add {quantity} to Cart</span>
              <span>•</span>
              <span>${(item.price * quantity).toFixed(2)}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetailModal;
