import { useState, useEffect } from "react";

const heroVariations = [
  {
    id: 'default',
    badge: 'QUICK & FRESH',
    headline: 'Deliciousness Delivered to Your Doorstep.',
    description: 'Experience culinary comfort with every bite. Handcrafted meals, prepared with love and the freshest ingredients.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'sweet',
    badge: 'TREAT YOURSELF',
    headline: 'Craving something sweet?',
    description: 'Dive into our decadent desserts. From warm molten lava cakes to rich, creamy shakes, we have your sugar fix.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'crunchy',
    badge: 'CRISPY CRAVINGS',
    headline: "How 'bout something crunchy?",
    description: 'Satisfy your cravings with our crispy, golden-fried favorites and sizzling, juicy smash burgers.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'spicy',
    badge: 'SPICE IT UP',
    headline: 'In the mood for some spice?',
    description: 'Experience authentic flavors with our rich curries, fresh garlic naan, and sizzling BBQ straight from the grill.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop'
  }
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroVariations.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const hero = heroVariations[activeIndex];

  return (
    <div className="relative overflow-hidden bg-cream py-16 lg:py-24 border-b border-[#EAE5E2] ">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-y-12 translate-x-12 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl translate-y-12 -translate-x-12 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase py-1.5 px-4 rounded-full mb-6 shadow-sm border border-primary/5">
            {hero.badge}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-secondary leading-[1.1] tracking-tight mb-6 min-h-[140px] sm:min-h-[110px] lg:min-h-[190px]">
            {hero.headline}
          </h1>

          <p className="text-lg text-neutral font-medium mb-8 leading-relaxed max-w-lg min-h-[84px] sm:min-h-[56px] lg:min-h-[84px]">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#B43E12] text-white py-4 px-8 rounded-full font-bold shadow-lg shadow-[#B43E12]/20 hover:bg-[#9A3412] active:scale-[0.98] transition cursor-pointer text-base text-center">
              Order Now
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-[#EAE5E2] text-secondary hover:bg-neutral/5 py-4 px-8 rounded-full font-bold active:scale-[0.98] transition cursor-pointer text-base text-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
              </svg>
              <span>How it works</span>
            </button>
          </div>

          <div className="flex items-center gap-2.5 mt-10">
            {heroVariations.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex 
                    ? 'w-8 bg-primary shadow-sm' 
                    : 'w-3 bg-neutral/30 hover:bg-neutral/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[45%] flex justify-center items-center">
          <div className="relative w-full aspect-[4/3] max-w-[500px] lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <img 
              src={hero.image} 
              alt={hero.headline} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md py-3 px-5 rounded-2xl border border-white/20 shadow-lg flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                🚚
              </div>
              <div className="text-left">
                <p className="text-secondary font-extrabold text-sm leading-tight">Fast Delivery</p>
                <p className="text-neutral text-xs font-semibold mt-0.5">Under 30 minutes</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
