import React, { useState } from "react";

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 w-full flex-1">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-xs font-extrabold tracking-widest text-primary uppercase">
          Get in Touch
        </span>
        <h1 className="text-4xl lg:text-6xl font-black text-secondary tracking-tight mt-2 mb-4 leading-tight">
          Contact <span className="text-primary underline">Us</span>
        </h1>
        <p className="text-neutral font-medium text-base max-w-xl mx-auto leading-relaxed">
          Questions about your order or cravings? Send us a message and we'll reply right away!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Contact Info & Hours */}
        <div className="space-y-8">
          <div className="bg-white border border-[#EAE5E2] rounded-[32px] p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-xl font-extrabold text-secondary flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
              Kitchen Information
            </h2>
            
            <div className="space-y-4 text-sm font-semibold text-neutral">
              <div className="flex items-start gap-4">
                <span className="text-xl">📍</span>
                <div>
                  <h3 className="font-extrabold text-secondary">Headquarters</h3>
                  <p className="mt-0.5">Plot 42, Block H-3, Johar Town, Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xl">📞</span>
                <div>
                  <h3 className="font-extrabold text-secondary">Phone Number</h3>
                  <p className="mt-0.5">+92 (042) 111-373-742 (111-FRESH)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xl">✉️</span>
                <div>
                  <h3 className="font-extrabold text-secondary">Support Email</h3>
                  <p className="mt-0.5">hello@freshbite-kitchens.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="bg-white border border-[#EAE5E2] rounded-[32px] p-6 sm:p-8 shadow-sm space-y-5">
            <h2 className="text-xl font-extrabold text-secondary flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
              Operating Hours
            </h2>
            <div className="space-y-2 text-xs font-bold text-neutral">
              <div className="flex justify-between border-b border-[#EAE5E2]/50 pb-2">
                <span>Monday - Friday</span>
                <span className="text-secondary">11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-[#EAE5E2]/50 pb-2">
                <span>Saturday</span>
                <span className="text-secondary">10:00 AM - Midnight</span>
              </div>
              <div className="flex justify-between pb-1">
                <span>Sunday</span>
                <span className="text-secondary">10:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Simulated Map */}
          <div className="bg-[#FAF6F3] border border-[#EAE5E2] rounded-[32px] p-6 shadow-xs text-center flex flex-col items-center justify-center h-48 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop')] opacity-25 bg-cover bg-center group-hover:scale-105 transition duration-500"></div>
            <div className="relative z-10 space-y-2">
              <span className="text-3xl text-primary animate-bounce inline-block">📍</span>
              <h3 className="font-extrabold text-secondary">FreshBite Johar Town Hub</h3>
              <p className="text-neutral text-xs font-semibold">Simulated GPS Live Kitchen Map</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-white border border-[#EAE5E2] rounded-[32px] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-secondary flex items-center gap-2 border-b border-[#EAE5E2] pb-3 mb-6">
              <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
              Send Message
            </h2>

            {submitted ? (
              <div className="text-center py-16 space-y-3">
                <span className="text-4xl">✉️</span>
                <h3 className="font-extrabold text-secondary text-lg">Message Sent!</h3>
                <p className="text-neutral text-xs font-semibold max-w-xs mx-auto leading-relaxed">
                  Thank you for writing. Our kitchen support team will review your message and reach out to your inbox shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-primary font-bold text-xs hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-neutral">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                    className="bg-[#FAF6F3] border border-[#EAE5E2] rounded-xl py-2.5 px-4 text-sm text-secondary outline-none focus:bg-white focus:border-primary/50 transition font-medium"
                    placeholder="e.g. Syed Usama"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-neutral">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                    className="bg-[#FAF6F3] border border-[#EAE5E2] rounded-xl py-2.5 px-4 text-sm text-secondary outline-none focus:bg-white focus:border-primary/50 transition font-medium"
                    placeholder="e.g. usama@example.com"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-neutral">Your Message</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                    className="bg-[#FAF6F3] border border-[#EAE5E2] rounded-xl py-2.5 px-4 text-sm text-secondary outline-none focus:bg-white focus:border-primary/50 transition font-medium resize-none"
                    placeholder="What would you like to say?..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#B43E12] text-white py-3 rounded-full font-bold hover:bg-[#9A3412] active:scale-[0.99] transition shadow-md shadow-[#B43E12]/15 mt-3 cursor-pointer text-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;
