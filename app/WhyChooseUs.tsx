// components/WhyChooseUs.tsx
const benefits = [
    "Experienced Certified Trainers",
    "Serene and Calming Ambience",
    "Flexible Batch Timings",
    "Tailored Yoga Plans",
    "Focus on Mindfulness & Meditation",
    "Safe for All Age Groups",
  ];
  
  export default function WhyChooseUs() {
    return (
      <section className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, i) => (
                <div key={i} className="bg-white shadow-md p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="text-xl font-semibold text-purple-700">{benefit}</h3>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, i) => (
                <div key={i} className="bg-white shadow-md p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="text-xl font-semibold text-purple-700">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  