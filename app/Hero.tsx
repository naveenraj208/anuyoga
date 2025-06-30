'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const lines = ['Inhale Positivity,', 'Exhale Negativity'];
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedLines, setTypedLines] = useState(['', '']);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const line = lines[currentLineIndex];

    // If all lines are typed, stop
    if (currentLineIndex >= lines.length) return;

    // If full line is typed, wait and move to next
    if (charIndex > line.length) {
      setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 800);
      return;
    }

    const timeout = setTimeout(() => {
      setTypedLines((prev) => {
        const updated = [...prev];
        updated[currentLineIndex] = line.substring(0, charIndex);
        return updated;
      });
      setCharIndex((prev) => prev + 1);
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, currentLineIndex]);

  return (
    <section
      id="hero"
      className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-gradient-to-br from-white to-purple-100 overflow-hidden"
    >
     

      {/* Text Block */}
      <div className="max-w-xl relative z-10">
        <h1 className="text-4xl lg:text-6xl font-bold leading-snug">
          <div className="min-h-[3rem] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            {typedLines[0]}
          </div>
          <div className="min-h-[3rem] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            {typedLines[1]}
          </div>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover peace, balance, and flexibility with our expert-guided yoga sessions.
        </p>
        <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700">
          Get Started
        </button>
      </div>

      {/* Image Block */}
      <div className="mt-12 lg:mt-0 relative z-10">
        <div className="absolute bg-purple-200 rounded-[70px] w-80 h-80 -z-10 blur-2xl top-8 left-8"></div>
        <Image
          src="/hero-yoga.jpg"
          alt="Yoga Pose"
          width={500}
          height={500}
          className="rounded-[60px_0px_60px_0px] shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
