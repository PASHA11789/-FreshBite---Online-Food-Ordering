import React from 'react';

function Footer() {
  return (
    <footer className="p-4 bg-gray-100 text-center border-t">
      <p>&copy; {new Date().getFullYear()} FreshBite. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
