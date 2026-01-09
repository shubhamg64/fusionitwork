import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import analytics from '../lib/mixpanel';

export default function Footer() {
  const handleSocialClick = (platform: string) => {
    analytics.trackButtonClick(`${platform} Social Link`, 'Footer');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Fusiin IT Works
            </h3>
            <p className="text-gray-400 mb-4">
              Transforming businesses through innovative digital solutions. We specialize in digital marketing, SEO, and comprehensive IT services.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleSocialClick('LinkedIn')}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </button>
              <button
                onClick={() => handleSocialClick('Twitter')}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </button>
              <button
                onClick={() => handleSocialClick('Facebook')}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook size={20} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <span>info@fusiinitworks.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>123 Tech Street, Digital City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fusiin IT Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
