
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                TEKBAY
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Your trusted partner in logistics and supply chain solutions, focused on precision, 
              efficiency, and reliability. We simplify logistics so you can focus on growth.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-cyan-400" />
                <span>info@tekbay.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-cyan-400" />
                <span>+966 (11) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-cyan-400" />
                <span>Riyadh, Saudi Arabia</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Freight & Transportation</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">B2B Supply Chain</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">E-Commerce Solutions</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">IT Security</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">General Contracting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Vision 2030</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 TEKBAY Digital Transformation. All rights reserved. Supporting Saudi Arabia's Vision 2030.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
