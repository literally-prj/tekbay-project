
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-8">
              <span className="text-3xl font-light tracking-wide text-white">
                TEK-BAY
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-md font-light">
              Pioneering the future of technology with innovative solutions that transform businesses 
              and drive digital excellence across all industries.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-4 text-slate-400" />
                <span className="font-light">hello@tek-bay.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-4 text-slate-400" />
                <span className="font-light">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-4 text-slate-400" />
                <span className="font-light">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium mb-6 tracking-wide">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors font-light">Software Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-light">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-light">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-light">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-light">AI & ML</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-medium mb-6 tracking-wide">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-white transition-colors font-light">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-light">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-light">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors font-light">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-light">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400 font-light">
            © 2024 TEK-BAY. All rights reserved. Built with innovation and excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
