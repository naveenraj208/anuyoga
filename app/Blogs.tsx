'use client';

import Image from 'next/image';
import { blogsData } from './data/blogsData';

export default function Blogs() {
  return (
    <section className="bg-gradient-to-b from-purple-50 via-white to-purple-100 py-20 px-4 md:px-10" id="blogs">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 mb-16">
          Our Yoga Insights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="relative group bg-white shadow-xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-800 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition duration-500" />
              </div>

              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-purple-700 mb-2 group-hover:text-purple-900 transition">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm">{blog.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
