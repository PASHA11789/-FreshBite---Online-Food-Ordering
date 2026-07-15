import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  const isActive = (path) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path.toLowerCase())) return true;
    return false;
  };

  return (
    <header className="py-4 px-10 bg-cream flex justify-between items-center border-b border-[#EAE5E2] shadow-sm">
      <Link to="/" className="font-bold text-primary text-3xl tracking-tight">
        FreshBite
      </Link>
      
      <nav className="flex items-center gap-8">
        <Link 
          to="/Menu" 
          className={`relative pb-1 cursor-pointer transition text-[17px] font-bold ${
            isActive('/menu') 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-secondary/75 hover:text-primary'
          }`}
        >
          Menu
        </Link>
        <Link 
          to="/Offers" 
          className={`relative pb-1 cursor-pointer transition text-[17px] font-bold ${
            isActive('/offers') 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-secondary/75 hover:text-primary'
          }`}
        >
          Offers
        </Link>
        <Link 
          to="/Orders" 
          className={`relative pb-1 cursor-pointer transition text-[17px] font-bold ${
            isActive('/orders') 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-secondary/75 hover:text-primary'
          }`}
        >
          Orders
        </Link>
        
      
        <Link 
          to="/Cart" 
          className={`relative p-1.5 cursor-pointer transition ${
            isActive('/cart') ? 'text-primary' : 'text-secondary/75 hover:text-primary'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[26px] h-[26px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.7 2.1-7.5H6.218M9 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full border border-cream"></span>
        </Link>

        <Link 
          to="/SignIn" 
          className={`relative p-1.5 cursor-pointer transition ${
            isActive('/signin') ? 'text-primary' : 'text-secondary/75 hover:text-primary'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[26px] h-[26px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
