import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-[#FAF6F3] border-t border-[#EAE5E2] py-8 mt-12">
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-secondary/70">
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <span className="font-serif font-bold text-xl text-primary">FreshBite</span>
          <span className="text-[#8c827b] font-semibold text-[13px] md:border-l md:border-[#EAE5E2] md:pl-4">
            &copy; 2024 FreshBite Culinary Comfort. All rights reserved.
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6 justify-center text-[13px] font-extrabold text-[#8c827b]">
          <a href="/About" className="hover:text-primary transition">About Us</a>
          <a href="/Contact" className="hover:text-primary transition">Contact Us</a>
          <p className='hover:text-primary transition cursor-pointer'>Terms of Service</p>
          <p className='hover:text-primary transition cursor-pointer'>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
