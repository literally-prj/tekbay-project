
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/a79daf2d-99ec-4d4e-a37b-1524822dac84.png" 
                alt="TEKBAY Logo" 
                className="h-16"
              />
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
                <span>+966 54 118 9716</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-cyan-400" />
                <span>Kingdom of Saudi Arabia</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/it-cybersecurity" className="hover:text-cyan-400 transition-colors">IT & Cybersecurity</Link></li>
              <li><Link to="/general-contracting" className="hover:text-cyan-400 transition-colors">General Contracting</Link></li>
              <li><Link to="/logistics-solutions" className="hover:text-cyan-400 transition-colors">Logistics Solutions</Link></li>
              <li><Link to="/ecommerce-solutions" className="hover:text-cyan-400 transition-colors">E-Commerce Solutions</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 TEKBAY. All rights reserved. Supporting Saudi Arabia's Vision 2030.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
