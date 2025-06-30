'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bgimage.jpeg')" }}
    >
      {/* Gradient overlay for soft purple/lavender tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-[#E6E6FA] opacity-60"></div>

      {/* Main content */}
      <div className="relative text-center px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-pink-400 to-purple-300">
          Anu Yoga Academy
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-purple-900 font-semibold max-w-2xl mx-auto">
          Discover the harmony of mind, body, and spirit through the timeless practice of yoga.
        </p>
      </div>
    </section>
  );
}
