import Footer from "../components/Footer.jsx"
import Hero from "../components/Hero.jsx"
import FeaturedRestaurants from "../components/FeaturedRestaurants.jsx"

function homePage() {
    return (
        <>
            <Hero />
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-6 justify-start">
                <h2 className="font-extrabold text-3xl text-secondary tracking-tight md:border-r md:border-[#EAE5E2] md:pr-6"> 
                    Cravings
                </h2>
                
                <div className="flex flex-wrap items-center gap-3.5">
                    <button className="flex items-center gap-2.5 bg-white border border-[#EAE5E2] py-2.5 px-6 rounded-full font-bold text-[15px] text-secondary hover:bg-primary/5 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition duration-300 shadow-sm cursor-pointer">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10-6.414a1 1 0 0 0-1.397-.914L4 9.172A2 2 0 0 0 2.83 11.53l3.65 8.76a2 2 0 0 0 2.5 1.12l10.15-3.832a2 2 0 0 0 1.25-2.288L20 4.586Z" />
                        </svg>
                        <span>Pizza</span>
                    </button>

                    <button className="flex items-center gap-2.5 bg-white border border-[#EAE5E2] py-2.5 px-6 rounded-full font-bold text-[15px] text-secondary hover:bg-primary/5 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition duration-300 shadow-sm cursor-pointer">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 11c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v1H3v-1ZM2 16h20v2c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-2ZM3 13h18M5 14.5h14" />
                        </svg>
                        <span>Burgers</span>
                    </button>

                    <button className="flex items-center gap-2.5 bg-white border border-[#EAE5E2] py-2.5 px-6 rounded-full font-bold text-[15px] text-secondary hover:bg-primary/5 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition duration-300 shadow-sm cursor-pointer">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-primary">
                            <ellipse cx="12" cy="7" rx="8" ry="4" />
                            <path d="M4 7v10c0 2.2 3.6 4 8 4s8-1.8 8-4V7" />
                            <ellipse cx="12" cy="7" rx="4" ry="2" />
                            <ellipse cx="12" cy="7" rx="2" ry="1" />
                        </svg>
                        <span>Sushi</span>
                    </button>

                    <button className="flex items-center gap-2.5 bg-white border border-[#EAE5E2] py-2.5 px-6 rounded-full font-bold text-[15px] text-secondary hover:bg-primary/5 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition duration-300 shadow-sm cursor-pointer">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.243 3.757a5.978 5.978 0 0 0-8.486 0L5.757 9.757a5.978 5.978 0 0 0 0 8.486l6 6a1 1 0 0 0 1.414 0l6-6a5.978 5.978 0 0 0 0-8.486l1.072-1.072a1 1 0 0 0-1.414-1.414l-1.072 1.072ZM12 11.5l5.5-5.5M8.5 15l2-2" />
                        </svg>
                        <span>Healthy</span>
                    </button>

                    <button className="flex items-center gap-2.5 bg-white border border-[#EAE5E2] py-2.5 px-6 rounded-full font-bold text-[15px] text-secondary hover:bg-primary/5 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition duration-300 shadow-sm cursor-pointer">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a3 3 0 0 1 3 3v2H9V5a3 3 0 0 1 3-3ZM6 10c0-1.657 1.343-3 3-3h6c1.657 0 3 1.343 3 3v2H6v-2ZM18 12 15.5 21H8.5L6 12h12Z" />
                        </svg>
                        <span>Desserts</span>
                    </button>
                </div>
            </div>

            <FeaturedRestaurants />
            <Footer />
        </>
    )
}

export default homePage