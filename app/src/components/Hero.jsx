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
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=800&auto=format&fit=crop'
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
    <div className="relative overflow-hidden bg-cream py-16 lg:py-24 border-b border-[#EAE5E2]">
   
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
    
        
        </div>


        <div className="w-full lg:w-[45%] flex justify-center items-center">
          <div className="relative w-full aspect-[4/3] max-w-[500px] lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        
            <img 
              src={hero.image} 
              alt={hero.headline} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
        
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
