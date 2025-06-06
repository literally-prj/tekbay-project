
import { Mail, Phone, MapPin } from 'lucide-react';

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
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Contact <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Information</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to transform your logistics and technology operations? Get in touch with us 
            through any of the following channels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.action}
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 group hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <info.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-xl text-slate-900 group-hover:text-cyan-600 transition-colors mb-3">
                {info.title}
              </h4>
              <p className="text-slate-600 text-center text-lg">{info.details}</p>
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
  );
};

export default Contact;
