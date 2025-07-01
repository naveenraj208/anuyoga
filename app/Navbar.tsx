import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-purple-700 flex items-center gap-2">
        <img src="./logo.png" alt="Anu Yoga Academy" className="h-10 w-10 rounded-full" />
        Anu Yoga Academy
      </div>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><a href="#hero" className="hover:text-purple-500">Home</a></li>
        <li><a href="#services" className="hover:text-purple-500">Services</a></li>
        <li><a href="#choose" className="hover:text-purple-500">Why Choose Us</a></li>
        <li><a href="/students" className="hover:text-purple-500">Students</a></li>
        <li><a href="#blogs" className="hover:text-purple-500">Blogs</a></li>
        <li><a href="#contact" className="hover:text-purple-500">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
