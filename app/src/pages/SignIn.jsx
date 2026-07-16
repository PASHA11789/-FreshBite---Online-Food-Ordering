import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSignIn = (e) => {
        e.preventDefault();
        if (!email || !password) return alert("Required input fields cannot be empty");
        const res = login(email, password);
        if (res.success) {
            navigate("/");
        } else {
            alert(res.message);
        }
    };

    return (
        <div className="flex w-full min-h-screen overflow-hidden">
            <div className="relative hidden lg:flex lg:w-[60%] h-[100vh] bg-[url('/restaurantImages/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface.jpg')] justify-between bg-cover flex flex-col bg-center p-10">
                <div className="absolute inset-0 bg-black/45"></div>
                <h1 className="relative z-10 text-2xl w-[200px] font-bold text-primary font-serif">Fresh Bite</h1>
                <div className="relative z-10 w-[70%] flex flex-col gap-5 text-white bg-white/10 backdrop-blur-md border border-white/15 p-8 rounded-2xl shadow-xl">
                    <h1 className="text-6xl font-bold text-secondary-300"> Taste the heart of every home </h1>
                    <p className="font-bold text-2xl text-white/95">Experience Culinary comfort with our curated selection of chef-made meals, delivered with warmth and care.</p>
                </div>
            </div>

            <div className="w-full lg:w-[40%] min-h-screen bg-cream flex items-center justify-center p-6 sm:p-10">
                <div className="w-full max-w-[420px] flex flex-col">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl sm:text-5xl font-bold text-secondary tracking-tight">Welcome Back</h1>
                        <p className="text-[15px] sm:text-[17px] mt-2.5 text-neutral/90 font-medium">We've missed your appetite! Please sign in.</p>
                    </div>

                    <form className="flex flex-col gap-5" onSubmit={handleSignIn}>
                        <div>
                            <label className="block text-secondary font-bold text-[15px] mb-2">Email Address</label>
                            <div className="relative flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-neutral/60 absolute left-4.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.92V6.75" />
                                </svg>
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="chef@freshbite.com" 
                                    className="w-full bg-white border border-[#EAE5E2] rounded-[20px] py-4 pl-13 pr-5 text-secondary placeholder-[#C2B7B0] outline-none focus:border-primary/50 transition font-medium"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-secondary font-bold text-[15px]">Password</label>
                                <span className="text-[#B43E12] font-bold text-sm sm:text-[15px] hover:underline cursor-pointer">Forgot Password?</span>
                            </div>
                            <div className="relative flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-neutral/60 absolute left-4.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0V10.5m-2.25 10.5h13.5c1.125 0 2.25-1.07 2.25-2.25v-6.75c0-1.18-1.07-2.25-2.25-2.25H4.875c-1.18 0-2.25 1.07-2.25 2.25v6.75c0 1.18 1.07 2.25 2.25 2.25Z" />
                                </svg>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••" 
                                    className="w-full bg-white border border-[#EAE5E2] rounded-[20px] py-4 pl-13 pr-13 text-secondary placeholder-[#C2B7B0] outline-none focus:border-primary/50 transition font-medium"
                                />
                                <button 
                                    type="button" 
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4.5 focus:outline-none flex items-center"
                                >
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-neutral/60 hover:text-secondary transition">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-neutral/60 hover:text-secondary transition">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-[#B43E12] text-white py-4 rounded-full font-bold hover:bg-[#9A3412] active:scale-[0.99] transition shadow-md shadow-[#B43E12]/15 mt-3 cursor-pointer text-base">
                            Sign In to FreshBite
                        </button>
                    </form>

                    <div className="flex items-center my-7">
                        <div className="flex-1 h-[1px] bg-[#EAE5E2]"></div>
                        <span className="px-4 text-[11px] font-bold text-neutral tracking-wider uppercase">or continue with</span>
                        <div className="flex-1 h-[1px] bg-[#EAE5E2]"></div>
                    </div>

                    <div className="flex gap-4">
                        <button className="flex items-center justify-center gap-2.5 flex-1 bg-white border border-[#EAE5E2] py-4 rounded-[20px] font-bold text-secondary hover:bg-neutral/5 transition cursor-pointer text-[15px]">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                            </svg>
                            <span>Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-2.5 flex-1 bg-white border border-[#EAE5E2] py-4 rounded-[20px] font-bold text-secondary hover:bg-neutral/5 transition cursor-pointer text-[15px]">
                            <svg className="w-5 h-5 fill-current text-secondary" viewBox="0 0 24 24">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.58 2.95-1.39z" />
                            </svg>
                            <span>Apple</span>
                        </button>
                    </div>

                    <div className="text-center mt-10 text-[15px] font-medium text-neutral/80">
                        New to the kitchen?{' '}
                        <span className="text-[#B43E12] font-bold hover:underline cursor-pointer ml-1">
                            Create an account
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
