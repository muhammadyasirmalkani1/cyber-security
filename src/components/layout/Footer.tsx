import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShieldCheck size={28} className="text-cyan-500" />
              <span className="text-xl font-bold">CyberSecurity</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              A leading provider of cybersecurity services and solutions for organizations and technology partners.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Industries</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-cyan-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">Dera Ghazi Khan<br />Punjab City, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-cyan-500 flex-shrink-0" />
                <a href="mailto:info@cybersecurity.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">muhammadyasirmalkani1@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-cyan-500 flex-shrink-0" />
                <a href="tel:+18005559876" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">+92 (335) 488-3737</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest security updates and insights.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" 
              />
              <button 
                type="submit" 
                className="w-full btn btn-primary text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Copyright &copy; {new Date().getFullYear()} Cyber Security Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;