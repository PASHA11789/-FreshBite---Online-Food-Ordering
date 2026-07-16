import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/authContext";

function CheckOut() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "Lahore",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod"); // 'cod' or 'card'
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  const deliveryFee = 2.99;
  const tax = 1.50;
  const total = cartTotal > 0 ? cartTotal + deliveryFee + tax : 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    // Simulate order placement
    const generatedId = `FB-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setIsSuccess(true);
    clearCart(); // Clear cart after placing order
  };

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto my-16 px-6 text-center">
        <div className="bg-white border border-[#EAE5E2] rounded-[32px] p-8 shadow-md flex flex-col items-center">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-6 border border-emerald-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </div>
          
          <h2 className="text-3xl font-black text-secondary tracking-tight mb-2">
            Order Placed!
          </h2>
          <p className="text-neutral text-sm font-semibold mb-6">
            Thank you for ordering with FreshBite.
          </p>

          <div className="w-full bg-[#FAF6F3] rounded-2xl p-5 mb-8 border border-[#EAE5E2] text-left space-y-3">
            <div className="flex justify-between text-xs font-bold text-neutral">
              <span>Order ID</span>
              <span className="text-secondary">{orderId}</span>
            </div>
            <div className="flex justify-between text-xs font-bold text-neutral">
              <span>Delivery Time</span>
              <span className="text-primary font-black">25-35 mins</span>
            </div>
            <div className="flex justify-between text-xs font-bold text-neutral pt-2 border-t border-[#EAE5E2]">
              <span>Customer</span>
              <span className="text-secondary">{formData.fullName}</span>
            </div>
            <div className="flex justify-between text-xs font-bold text-neutral">
              <span>Address</span>
              <span className="text-secondary text-right line-clamp-1">{formData.address || "Lahore, Pakistan"}</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            className="w-full bg-primary hover:bg-[#E0531F] text-white py-3.5 rounded-2xl font-bold text-sm shadow-sm transition active:scale-95 cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 w-full">
      <div className="mb-10">
        <h1 className="text-3xl lg:text-5xl font-black text-secondary mb-2 tracking-tight">
          Checkout
        </h1>
        <p className="text-neutral font-medium text-sm">
          Please review your items and enter details to complete your order.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
        {/* Forms Card */}
        <form onSubmit={handleSubmit} className="flex-1 w-full space-y-8">
          {/* Shipping Form */}
          <div className="bg-white border border-[#EAE5E2] rounded-[32px] p-6 sm:p-8 shadow-sm space-y-5">
            <h2 className="text-lg font-black text-secondary border-b border-[#EAE5E2] pb-3 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
              Delivery Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-neutral">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="bg-[#FAF6F3] border border-[#EAE5E2] rounded-xl py-2.5 px-4 text-sm text-secondary outline-none focus:bg-white focus:border-primary/50 transition font-medium"
                  placeholder="e.g. Syed Usama"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-neutral">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-[#FAF6F3] border border-[#EAE5E2] rounded-xl py-2.5 px-4 text-sm text-secondary outline-none focus:bg-white focus:border-primary/50 transition font-medium"
                  placeholder="e.g. 0321-1234567"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-neutral">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="bg-[#FAF6F3] border border-[#EAE5E2] rounded-xl py-2.5 px-4 text-sm text-secondary outline-none focus:bg-white focus:border-primary/50 transition font-medium"
                placeholder="e.g. usama@example.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-neutral">Delivery Address</label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                className="bg-[#FAF6F3] border border-[#EAE5E2] rounded-xl py-2.5 px-4 text-sm text-secondary outline-none focus:bg-white focus:border-primary/50 transition font-medium"
                placeholder="Street address, house/apartment number"
              />
            </div>

            <div className="flex flex-col gap-1.5 col-span-1">
              <label className="text-xs font-bold text-neutral">City</label>
              <input
                type="text"
                name="city"
                disabled
                value={formData.city}
                className="bg-[#FAF6F3]/50 border border-[#EAE5E2] text-neutral/70 rounded-xl py-2.5 px-4 text-sm cursor-not-allowed font-medium"
              />
            </div>
          </div>

          {/* Payment Method Form */}
          <div className="bg-white border border-[#EAE5E2] rounded-[32px] p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-lg font-black text-secondary border-b border-[#EAE5E2] pb-3 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
              Payment Method
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label
                onClick={() => setPaymentMethod("cod")}
                className={`border rounded-2xl p-4 flex items-center justify-between cursor-pointer transition select-none ${
                  paymentMethod === "cod"
                    ? "bg-[#FFECE5] border-primary/50 shadow-xs"
                    : "bg-[#FAF6F3] border-[#EAE5E2] hover:bg-[#EAE5E2]/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cream border border-[#EAE5E2] flex items-center justify-center text-primary font-bold">
                    💵
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-secondary">Cash on Delivery</p>
                    <p className="text-[11px] text-neutral font-semibold">Pay when food arrives</p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                  className="accent-primary w-4.5 h-4.5"
                />
              </label>

              <label
                onClick={() => setPaymentMethod("card")}
                className={`border rounded-2xl p-4 flex items-center justify-between cursor-pointer transition select-none ${
                  paymentMethod === "card"
                    ? "bg-[#FFECE5] border-primary/50 shadow-xs"
                    : "bg-[#FAF6F3] border-[#EAE5E2] hover:bg-[#EAE5E2]/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cream border border-[#EAE5E2] flex items-center justify-center text-primary font-bold">
                    💳
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-secondary">Credit / Debit Card</p>
                    <p className="text-[11px] text-neutral font-semibold">Secure online payment</p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                  className="accent-primary w-4.5 h-4.5"
                />
              </label>
            </div>

            {/* Collapsible Card Details Form */}
            {paymentMethod === "card" && (
              <div className="bg-[#FAF6F3] border border-[#EAE5E2] rounded-2xl p-5 space-y-4 transition-all duration-300">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-neutral">Cardholder's Name</label>
                  <input
                    type="text"
                    name="cardName"
                    required={paymentMethod === "card"}
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="bg-white border border-[#EAE5E2] rounded-xl py-2.5 px-4 text-sm text-secondary outline-none focus:border-primary/50 transition font-medium"
                    placeholder="e.g. Syed Usama"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-neutral">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    required={paymentMethod === "card"}
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="bg-white border border-[#EAE5E2] rounded-xl py-2.5 px-4 text-sm text-secondary outline-none focus:border-primary/50 transition font-medium"
                    placeholder="xxxx xxxx xxxx xxxx"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-neutral">Expiry Date</label>
                    <input
                      type="text"
                      name="cardExpiry"
                      required={paymentMethod === "card"}
                      value={formData.cardExpiry}
                      onChange={handleInputChange}
                      className="bg-white border border-[#EAE5E2] rounded-xl py-2.5 px-4 text-sm text-secondary outline-none focus:border-primary/50 transition font-medium"
                      placeholder="MM / YY"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-neutral">CVV</label>
                    <input
                      type="password"
                      name="cardCvv"
                      required={paymentMethod === "card"}
                      value={formData.cardCvv}
                      onChange={handleInputChange}
                      className="bg-white border border-[#EAE5E2] rounded-xl py-2.5 px-4 text-sm text-secondary outline-none focus:border-primary/50 transition font-medium"
                      placeholder="xxx"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>

        {/* Order Summary Sidebar */}
        <div className="w-full lg:w-[400px] shrink-0 bg-white border border-[#EAE5E2] rounded-[32px] p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-lg font-black text-secondary border-b border-[#EAE5E2] pb-3 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
            Your Order
          </h2>

          {cartItems.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <p className="text-neutral font-medium text-sm">Your cart is empty.</p>
              <button
                onClick={() => navigate("/Menu")}
                className="text-primary font-bold text-xs hover:underline"
              >
                Go to Menu
              </button>
            </div>
          ) : (
            <>
              {/* Scrollable list */}
              <div className="max-h-60 overflow-y-auto divide-y divide-[#EAE5E2]/50 pr-2 space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 pt-3 first:pt-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-xl object-cover shrink-0 bg-neutral/10"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-secondary truncate">{item.name}</h4>
                      <p className="text-[10px] text-neutral font-semibold">Qty: {item.quantity}</p>
                      <p className="text-[10px] text-[#B43E12] font-semibold truncate">{item.restaurantName}</p>
                    </div>
                    <span className="font-extrabold text-xs text-secondary pt-0.5">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Subtotals */}
              <div className="space-y-2 border-t border-[#EAE5E2]/60 pt-4">
                <div className="flex justify-between text-xs font-semibold text-neutral">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs font-semibold text-neutral">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs font-semibold text-neutral">
                  <span>Tax & Service Charge</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-secondary border-t border-[#EAE5E2]/60 pt-3">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout submit trigger */}
              <button
                onClick={handleSubmit}
                disabled={cartItems.length === 0}
                className="w-full bg-primary hover:bg-[#E0531F] disabled:bg-neutral/30 disabled:cursor-not-allowed text-white py-3.5 rounded-2xl font-bold text-sm shadow-sm flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer"
              >
                <span>Place Order</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
