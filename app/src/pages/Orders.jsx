import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Orders() {
  const [orders, setOrders] = useState([]);
  const { addToCart, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrders = localStorage.getItem("freshbite_orders");
    if (savedOrders) {
      try {
        setOrders(JSON.parse(savedOrders));
      } catch (e) {
        console.error("Failed to parse orders:", e);
      }
    }
  }, []);

  const formatDate = (dateStr) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (e) {
      return dateStr;
    }
  };

  const handleReorder = (order) => {
    order.items.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        addToCart(item, item.restaurantName);
      }
    });
    setIsCartOpen(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 w-full flex-1">
      <div className="mb-10">
        <h1 className="text-3xl lg:text-5xl font-black text-secondary mb-2 tracking-tight">
          Your Orders
        </h1>
        <p className="text-neutral font-medium text-sm">
          Track active deliveries and review your order history.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="bg-white border border-[#EAE5E2] rounded-[32px] p-12 shadow-sm text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center text-neutral/40 mb-4 border border-[#EAE5E2]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 2.24a4.5 4.5 0 1 1 9.01 0c-.002.201-.009.403-.02.606m-9.01-.606c-.012.203-.018.404-.02.607m9.03-.607H9.723"
              />
            </svg>
          </div>
          <h3 className="text-lg font-extrabold text-secondary">No orders placed yet</h3>
          <p className="text-neutral text-sm mt-1 max-w-sm">
            Ready to experience culinary comfort? Browse our featured spots and satisfy your cravings.
          </p>
          <button
            onClick={() => navigate("/Menu")}
            className="mt-6 bg-primary hover:bg-[#E0531F] text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-sm transition active:scale-95 cursor-pointer"
          >
            Browse Menu
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white border border-[#EAE5E2] rounded-[32px] shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
            >
              <div className="bg-[#FAF6F3]/50 px-6 py-4 border-b border-[#EAE5E2] flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-secondary text-base">
                      Order #{order.id}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-neutral">
                    {formatDate(order.date)}
                  </span>
                </div>
                <div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold border shadow-xs ${
                      order.status === "Delivered"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-[#FFECE5] text-[#FF6B35] border-[#FFECE5]"
                    }`}
                  >
                    ● {order.status}
                  </span>
                </div>
              </div>

              <div className="px-6 py-4 divide-y divide-[#EAE5E2]/50">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-2xl object-cover shrink-0 bg-neutral/10"
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-extrabold text-sm text-secondary truncate">
                          {item.name}
                        </h4>
                        <span className="font-extrabold text-sm text-secondary pt-0.5 shrink-0">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-neutral font-semibold mt-1">
                        <span>
                          {item.category} • {item.restaurantName}
                        </span>
                        <span>Qty: {item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#FAF6F3]/30 px-6 py-4 border-t border-[#EAE5E2]/70 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="text-xs font-semibold text-neutral space-y-0.5">
                  <p>
                    <span className="font-bold text-secondary">Deliver to:</span> {order.customerName}
                  </p>
                  <p className="line-clamp-1">
                    <span className="font-bold text-secondary">Address:</span> {order.address}
                  </p>
                  <p>
                    <span className="font-bold text-secondary">Payment:</span> {order.paymentMethod}
                  </p>
                </div>
                <div className="flex sm:flex-col items-end justify-between w-full sm:w-auto gap-4 border-t border-[#EAE5E2]/50 pt-3 sm:pt-0 sm:border-0">
                  <div className="text-right">
                    <span className="text-xs font-bold text-neutral">Total amount</span>
                    <p className="text-xl font-black text-primary leading-none mt-0.5">
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => handleReorder(order)}
                    className="bg-primary hover:bg-[#E0531F] text-white px-5 py-2 rounded-xl font-bold text-xs shadow-sm shadow-primary/20 transition active:scale-95 cursor-pointer flex items-center gap-1.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                    <span>Reorder</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
