'use client';

import Image from 'next/image';
import founderImage from '../public/logo.png'; // Replace this with the actual image path

export default function Founder() {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 md:px-10" id="founder">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-purple-200">
            <Image
              src={founderImage}
              alt="Yogabhushan Umashankari Baskar"
              className="object-cover w-full h-full"
              width={500}
              height={600}
            />
          </div>
        </div>

        {/* Right: Info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">Meet Our Founder</h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Yogabhushan Umashankari Baskar
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            With over a decade of dedication to the yogic path, <strong className="text-purple-700">Yogabhushan Umashankari Baskar</strong> has transformed lives through her holistic and disciplined approach to yoga. She is the proud recipient of the prestigious <strong>“Yogabhushan”</strong> title from the <strong>Swami Vivekananda District Yoga Wellness Center, Udupi</strong>.
            <br /><br />
            A certified <strong>Yoga Protocol Instructor</strong> accredited by the <strong>AYUSH Ministry</strong>, she continues her journey as a lifelong learner by currently pursuing a <strong>Yoga Therapist certification</strong> under the same authority.
            <br /><br />
            Her passionate commitment to promoting physical, mental, and spiritual wellness has led her to train more than <strong>100 students</strong> over the past <strong>10+ years</strong>. Her teachings are not just practices—they’re transformative journeys for each student she mentors.
          </p>
        </div>
      </div>
    </section>
  );
}
