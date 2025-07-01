import Navbar from '../Navbar';
import Footer from '../Footer';
import { studentsData } from '.././data/studentsData';
import Image from 'next/image';

export default function StudentsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-purple-50 to-white min-h-screen py-16 px-6">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-purple-700">Our Proud Students</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {studentsData.map((student) => (
            <div
              key={student.id}
              className="relative bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
                <Image
                  src={student.image}
                  alt={student.name}
                  fill
                  className="object-cover"
                />
                {/* Rotated Name */}
                <div className="absolute top-4 left-[-40px] transform -rotate-90 origin-left">
                  <span className="text-sm font-bold text-purple-600 tracking-widest">
                    {student.name}
                  </span>
                </div>
              </div>
              <p className="text-center text-gray-700 text-sm font-medium">{student.achievement}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
