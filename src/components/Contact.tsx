
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get In <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to transform your logistics and technology operations? Let's discuss how we can help you 
            achieve your business goals with our comprehensive solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200/50">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <Input placeholder="Ahmed" className="rounded-lg border-slate-300 focus:border-cyan-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <Input placeholder="Al-Rashid" className="rounded-lg border-slate-300 focus:border-cyan-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <Input type="email" placeholder="ahmed@company.com" className="rounded-lg border-slate-300 focus:border-cyan-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                <Input placeholder="Your Company" className="rounded-lg border-slate-300 focus:border-cyan-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your logistics or technology needs..." 
                  className="rounded-lg border-slate-300 focus:border-cyan-500 min-h-[120px]" 
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-lg py-3">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Contact Information</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We're here to help you succeed with your logistics, supply chain, and technology needs. 
                Reach out to us through any of the following channels, and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200/50 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-slate-600">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl text-white">
              <h4 className="font-semibold mb-2">Ready to start your project?</h4>
              <p className="text-cyan-100 mb-4">
                Schedule a free consultation to discuss your logistics, technology, or contracting needs and how we can help.
              </p>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
