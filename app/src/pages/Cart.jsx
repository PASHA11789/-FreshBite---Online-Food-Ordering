import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { setIsCartOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
    setIsCartOpen(true);
  }, [navigate, setIsCartOpen]);

  return null;
}

export default Cart;