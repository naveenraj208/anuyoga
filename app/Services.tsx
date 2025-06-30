const services = [
    {
      title: 'Beginner Yoga',
      desc: 'Learn the basics of breath and balance.',
      image: './begin.jpg',
    },
    {
      title: 'Intermediate Yoga',
      desc: 'Build strength and endurance.',
      image: './inter.webp',
    },
    {
      title: 'Advanced Yoga',
      desc: 'Master poses and mindfulness.',
      image: './advanced.jpeg',
    },
    {
      title: 'Yoga for Aged',
      desc: 'Gentle yoga designed for seniors.',
      image: './old.webp',
    },
  ];
  
  export default function Services() {
    return (
      <section className="py-16 bg-purple-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-purple-700">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg border border-purple-200 hover:shadow-2xl transition-transform transform hover:-translate-y-1"
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  