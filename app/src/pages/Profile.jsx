import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useCart } from "../context/CartContext";

function Profile() {
  const { user, logout } = useAuth();
  const { wishlist, toggleWishlist, addToCart, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("profile");
  const [orders, setOrders] = useState([]);
  
  const [addresses, setAddresses] = useState([
    { id: 1, label: "Home", details: "House 24B, Street 5, Johar Town, Lahore" },
    { id: 2, label: "Office", details: "Software Park, DHA Phase 5, Lahore" }
  ]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({ label: "", details: "" });

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

  const handleLogout = () => {
    logout();
    navigate("/SignIn");
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    if (!newAddress.label || !newAddress.details) return;
    setAddresses((prev) => [
      ...prev,
      { id: Date.now(), label: newAddress.label, details: newAddress.details }
    ]);
    setNewAddress({ label: "", details: "" });
    setShowAddressForm(false);
  };

  const handleDeleteAddress = (id) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  const getOrderProgress = (orderDateStr) => {
    try {
      const placedTime = new Date(orderDateStr).getTime();
      const now = Date.now();
      const elapsedSeconds = Math.max(0, (now - placedTime) / 1000);

      if (elapsedSeconds < 60) {
        return { index: 0, status: "Order Placed" };
      } else if (elapsedSeconds < 180) {
        return { index: 1, status: "Preparing" };
      } else if (elapsedSeconds < 300) {
        return { index: 2, status: "Out for Delivery" };
      } else {
        return { index: 3, status: "Delivered" };
      }
    } catch (e) {
      return { index: 0, status: "Order Placed" };
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 w-full flex-1">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase">
            User Account
          </span>
          <h1 className="text-4xl font-extrabold text-secondary tracking-tight mt-1">
            Welcome, {user?.name || "Guest"}
          </h1>
        </div>
        <p className="text-neutral font-medium text-sm">
          Manage your account profile, addresses, wishlist, and active orders.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-64 bg-white border border-[#EAE5E2] rounded-[32px] p-5 shadow-xs shrink-0 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible gap-2.5">
          {[
            { id: "profile", label: "👤 Profile Details" },
            { id: "wishlist", label: "❤️ My Wishlist" },
            { id: "addresses", label: "📍 Saved Addresses" },
            { id: "orders", label: "🍔 Order Tracking" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold text-left whitespace-nowrap transition cursor-pointer flex-1 md:flex-none ${
                activeTab === tab.id
                  ? "bg-[#FFECE5] text-primary"
                  : "bg-transparent text-secondary/70 hover:bg-[#FAF6F3]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex-1 w-full min-h-[400px]">
          
          {activeTab === "profile" && (
            <div className="bg-white border border-[#EAE5E2] rounded-[32px] p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-secondary flex items-center gap-2 border-b border-[#EAE5E2] pb-3">
                <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
                Profile Details
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary text-3xl font-extrabold border border-primary/20 shrink-0">
                  {user?.name ? user.name.charAt(0) : "G"}
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="font-black text-secondary text-lg">{user?.name || "Guest Chef"}</h3>
                  <p className="text-neutral text-xs font-semibold">{user?.email || "guest@freshbite.com"}</p>
                  <p className="text-neutral/70 text-[10px] font-bold uppercase">Customer Member Since 2026</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE5E2] flex justify-end">
                <button
                  onClick={handleLogout}
                  className="bg-primary hover:bg-[#E0531F] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-sm shadow-primary/20 transition active:scale-95 cursor-pointer"
                >
                  Sign Out Account
                </button>
              </div>
            </div>
          )}

          {activeTab === "wishlist" && (
            <div className="bg-white border border-[#EAE5E2] rounded-[32px] p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-secondary flex items-center gap-2 border-b border-[#EAE5E2] pb-3">
                <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
                My Wishlist
              </h2>

              {wishlist.length === 0 ? (
                <div className="text-center py-16 space-y-2">
                  <span className="text-3xl text-neutral/40">❤️</span>
                  <p className="text-neutral font-medium text-sm">Your wishlist is empty.</p>
                  <button 
                    onClick={() => navigate("/Menu")} 
                    className="text-primary font-bold text-xs hover:underline cursor-pointer"
                  >
                    Explore Food Menu
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {wishlist.map((item) => (
                    <div 
                      key={item.id} 
                      className="bg-[#FAF6F3] border border-[#EAE5E2] rounded-2xl p-4 flex gap-3 relative"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 rounded-xl object-cover shrink-0 bg-neutral/10"
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <h4 className="font-extrabold text-sm text-secondary truncate">{item.name}</h4>
                          <span className="text-[10px] text-[#B43E12] font-semibold block">{item.restaurantName}</span>
                          <span className="font-black text-xs text-secondary mt-0.5 block">${item.price.toFixed(2)}</span>
                        </div>
                        <button
                          onClick={() => {
                            addToCart(item, item.restaurantName);
                            setIsCartOpen(true);
                          }}
                          className="bg-primary hover:bg-[#E0531F] text-white px-3 py-1 rounded-lg text-[10px] font-bold shadow-sm transition active:scale-95 cursor-pointer mt-2 w-full text-center"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <button
                        onClick={() => toggleWishlist(item, item.restaurantName)}
                        className="absolute top-2 right-2 text-[#B43E12] hover:scale-105 transition cursor-pointer"
                        aria-label="Remove"
                      >
                        ❤️
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "addresses" && (
            <div className="bg-white border border-[#EAE5E2] rounded-[32px] p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex justify-between items-center border-b border-[#EAE5E2] pb-3">
                <h2 className="text-xl font-extrabold text-secondary flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
                  Saved Addresses
                </h2>
                <button
                  onClick={() => setShowAddressForm(true)}
                  className="bg-primary hover:bg-[#E0531F] text-white px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer"
                >
                  + Add New
                </button>
              </div>

              {showAddressForm && (
                <form onSubmit={handleAddAddress} className="bg-[#FAF6F3] border border-[#EAE5E2] p-4 rounded-2xl space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-neutral">Label (e.g. Work)</label>
                      <input 
                        type="text"
                        required
                        value={newAddress.label}
                        onChange={(e) => setNewAddress(p => ({ ...p, label: e.target.value }))}
                        className="bg-white border border-[#EAE5E2] rounded-xl py-1.5 px-3 text-xs text-secondary outline-none"
                        placeholder="Home, Office"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-neutral">City</label>
                      <input type="text" disabled value="Lahore" className="bg-neutral/10 text-neutral border border-[#EAE5E2] rounded-xl py-1.5 px-3 text-xs cursor-not-allowed" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-neutral">Street Address</label>
                    <input 
                      type="text"
                      required
                      value={newAddress.details}
                      onChange={(e) => setNewAddress(p => ({ ...p, details: e.target.value }))}
                      className="bg-white border border-[#EAE5E2] rounded-xl py-1.5 px-3 text-xs text-secondary outline-none"
                      placeholder="e.g. Block H, Johar Town"
                    />
                  </div>
                  <div className="flex justify-end gap-2 text-xs font-bold">
                    <button type="button" onClick={() => setShowAddressForm(false)} className="px-3 py-1.5 bg-neutral/10 hover:bg-neutral/20 rounded-lg text-secondary">Cancel</button>
                    <button type="submit" className="px-3 py-1.5 bg-primary text-white rounded-lg">Save</button>
                  </div>
                </form>
              )}

              <div className="space-y-3.5">
                {addresses.map((address) => (
                  <div 
                    key={address.id}
                    className="border border-[#EAE5E2] rounded-2xl p-4 flex justify-between items-start"
                  >
                    <div className="space-y-0.5">
                      <span className="inline-block bg-[#FFECE5] text-primary text-[10px] font-black px-2 py-0.5 rounded-md">
                        {address.label}
                      </span>
                      <p className="text-secondary text-sm font-semibold mt-1">{address.details}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteAddress(address.id)}
                      className="text-neutral/40 hover:text-[#B43E12] transition cursor-pointer text-xs font-bold"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="bg-white border border-[#EAE5E2] rounded-[32px] p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-secondary flex items-center gap-2 border-b border-[#EAE5E2] pb-3">
                <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
                Order Tracking Status
              </h2>

              {orders.length === 0 ? (
                <div className="text-center py-16 space-y-2">
                  <span className="text-3xl text-neutral/40">🍔</span>
                  <p className="text-neutral font-medium text-sm">No recent orders to track.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {orders.slice(0, 3).map((order) => {
                    const tracking = getOrderProgress(order.date);

                    return (
                      <div 
                        key={order.id}
                        className="bg-[#FAF6F3] border border-[#EAE5E2] rounded-2xl p-5 space-y-4"
                      >
                        <div className="flex justify-between items-center flex-wrap gap-2">
                          <span className="font-extrabold text-secondary text-xs">
                            Order #{order.id}
                          </span>
                          <span className="text-[10px] bg-primary text-white font-black px-2 py-0.5 rounded-md">
                            {tracking.status}
                          </span>
                        </div>

                        <div className="relative pt-6 pb-2">
                          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#EAE5E2] -translate-y-1/2 rounded-full"></div>
                          <div 
                            className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 rounded-full transition-all duration-500"
                            style={{ width: `${(tracking.index / 3) * 100}%` }}
                          ></div>

                          <div className="relative flex justify-between">
                            {["Placed", "Preparing", "Shipped", "Arrived"].map((step, idx) => {
                              const isActive = idx <= tracking.index;
                              return (
                                <div key={idx} className="flex flex-col items-center">
                                  <div 
                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-black z-10 transition duration-300 ${
                                      isActive 
                                        ? "bg-primary text-white border-primary" 
                                        : "bg-white text-neutral/50 border-[#EAE5E2]"
                                    }`}
                                  >
                                    {idx + 1}
                                  </div>
                                  <span className={`text-[10px] font-bold mt-1.5 ${isActive ? "text-secondary" : "text-neutral/60"}`}>
                                    {step}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div className="text-[11px] font-semibold text-neutral flex justify-between border-t border-[#EAE5E2]/50 pt-2">
                          <span>Items count: {order.items.length}</span>
                          <span className="font-extrabold text-secondary">Total: ${order.total.toFixed(2)}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Profile;
