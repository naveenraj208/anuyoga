// components/Footer.tsx

export default function Footer() {
    return (
      <footer className="bg-purple-100 text-gray-800 pt-10 pb-6 mt-20 border-t border-purple-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold text-purple-700 mb-2">Anu Yoga Academy</h3>
            <p className="text-sm">
              Breathe in peace. Breathe out stress. Your journey toward inner calm and physical
              well-being starts here.
            </p>
          </div>
  
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-purple-700 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-purple-600">About Us</a></li>
              <li><a href="#services" className="hover:text-purple-600">Services</a></li>
              <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
              <li><a href="#testimonials" className="hover:text-purple-600">Testimonials</a></li>
            </ul>
          </div>
  
          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-purple-700 mb-3">Contact</h4>
            <p className="text-sm">Phone: +91 8884960197</p>
            <p className="text-sm">Email: info@anuyogaacademy.com</p>
            <p className="text-sm">Location: Bangalore, India</p>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="mt-10 text-center text-sm text-gray-600 border-t border-purple-200 pt-4">
          © {new Date().getFullYear()} Anu Yoga Academy. All rights reserved. | Built by{' '}
          <a
            href="https://naveenraj.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 font-medium hover:underline"
          >
            naveenraj.tech
          </a>
        </div>
      </footer>
    );
  }
  