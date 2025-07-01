import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import ContactForm from './ContactForm';
import Testimonials from './Testimonials';
import Founder from './founder';
import Blogs from './Blogs';
import Footer from './Footer';

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Founder />
      <WhyChooseUs />
      <ContactForm />
      <Testimonials />
      <Blogs/>
      <Footer />
    </main>
  );
}
