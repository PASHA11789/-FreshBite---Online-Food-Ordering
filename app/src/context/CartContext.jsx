import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [promoDiscount, setPromoDiscount] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('freshbite_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart:', e);
      }
    }

    const savedWishlist = localStorage.getItem('freshbite_wishlist');
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (e) {
        console.error('Failed to parse wishlist:', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('freshbite_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('freshbite_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (item, restaurantName) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (i) => i.id === item.id
      );

      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + 1,
        };
        return newItems;
      } else {
        return [...prevItems, { ...item, quantity: 1, restaurantName }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setPromoDiscount(0);
  };

  const toggleWishlist = (item, restaurantName) => {
    setWishlist((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, { ...item, restaurantName }];
      }
    });
  };

  const isInWishlist = (itemId) => {
    return wishlist.some((i) => i.id === itemId);
  };

  const applyPromoCode = (code) => {
    if (code.trim().toUpperCase() === "FRESHBITE20") {
      setPromoDiscount(20);
      return { success: true, message: "Promo code FRESHBITE20 applied! 20% discount." };
    }
    return { success: false, message: "Invalid promo code." };
  };

  const cartCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const cartTotal = useMemo(() => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    if (promoDiscount > 0) {
      return total * (1 - promoDiscount / 100);
    }
    return total;
  }, [cartItems, promoDiscount]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        wishlist,
        toggleWishlist,
        isInWishlist,
        promoDiscount,
        applyPromoCode,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
