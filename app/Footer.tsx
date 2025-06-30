export default function Footer() {
    return (
      <footer className="bg-purple-100 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Anu Yoga Academy. All rights reserved.</p>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.536374890512!2d77.74899997513592!3d13.065156387258925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f88b2f9e921%3A0xd98175f2608da870!2sKonig%20Orange%20County!5e0!3m2!1sen!2sin!4v1751293619727!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </footer>
    );
  }
  