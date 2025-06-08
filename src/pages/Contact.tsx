
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@tekbay.com',
      action: 'mailto:info@tekbay.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+966 54 118 9716',
      action: 'tel:+966541189716',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Kingdom of Saudi Arabia',
      action: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Sun - Thu: 8:00 AM - 6:00 PM',
      action: '#',
    },
  ];

  return (
    <div className="min-h-screen page-transition">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            Contact <span className="text-gradient">Information</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your logistics and technology operations? Get in touch with us 
            through any of the following channels.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action}
                className="flex items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 group hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900 group-hover:text-cyan-600 transition-colors mb-2">
                    {info.title}
                  </h4>
                  <p className="text-slate-600 text-lg">{info.details}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-block p-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl text-white max-w-2xl">
              <h4 className="font-bold text-2xl mb-4">Ready to start your project?</h4>
              <p className="text-cyan-100 text-lg leading-relaxed">
                We're here to help you succeed with your logistics, supply chain, and technology needs. 
                Reach out to us and we'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
