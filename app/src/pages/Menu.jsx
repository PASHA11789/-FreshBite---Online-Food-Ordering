import React from "react";
import { useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();
  const restaurantName = location.state?.restaurantName || "Our Menu";

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      <span className="text-xs font-extrabold tracking-widest text-primary uppercase">
        Explore culinary excellence
      </span>
      <h1 className="text-5xl lg:text-6xl font-black text-secondary leading-tight tracking-tight mt-2 mb-4">
        {restaurantName}
      </h1>
      <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
      <p className="text-neutral font-medium text-lg max-w-md mx-auto leading-relaxed">
        Handcrafted recipes prepared fresh with premium local ingredients. Explore the menu and customize your order.
      </p>
    </div>
  );
}

export default Menu;