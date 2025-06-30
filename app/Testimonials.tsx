// components/Testimonials.tsx

import { testimonials } from './data/testimonials';

export default function Testimonials() {
  return (
    <section className="bg-purple-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-300 text-left"
            >
              <p className="text-gray-700 text-lg italic">“{t.quote}”</p>
              <p className="mt-4 text-purple-800 font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
