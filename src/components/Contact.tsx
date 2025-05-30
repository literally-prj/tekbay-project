
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@tek-bay.com',
      action: 'mailto:hello@tek-bay.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'San Francisco, CA',
      action: '#',
    },
  ];

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Ready to transform your business? Let's discuss how we can help you achieve your technology goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="bg-slate-50 p-12 border border-slate-200">
            <h3 className="text-2xl font-medium text-slate-900 mb-8 tracking-wide">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2 tracking-wide">First Name</label>
                  <Input placeholder="John" className="rounded-none border-slate-300 focus:border-slate-900 h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2 tracking-wide">Last Name</label>
                  <Input placeholder="Doe" className="rounded-none border-slate-300 focus:border-slate-900 h-12" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 tracking-wide">Email</label>
                <Input type="email" placeholder="john@example.com" className="rounded-none border-slate-300 focus:border-slate-900 h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 tracking-wide">Company</label>
                <Input placeholder="Your Company" className="rounded-none border-slate-300 focus:border-slate-900 h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 tracking-wide">Message</label>
                <Textarea 
                  placeholder="Tell us about your project..." 
                  className="rounded-none border-slate-300 focus:border-slate-900 min-h-[140px]" 
                />
              </div>
              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-none py-4 font-medium tracking-wide">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-medium text-slate-900 mb-8 tracking-wide">Contact Information</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-12 font-light">
                We're here to help you succeed. Reach out to us through any of the following channels, 
                and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="flex items-center p-8 bg-slate-50 hover:bg-slate-100 transition-colors duration-300 border border-slate-200 group"
                >
                  <div className="w-12 h-12 bg-slate-900 flex items-center justify-center mr-6 group-hover:bg-slate-800 transition-colors duration-300">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 group-hover:text-slate-700 transition-colors tracking-wide">
                      {info.title}
                    </h4>
                    <p className="text-slate-600 font-light">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-8 bg-slate-900 text-white">
              <h4 className="font-medium mb-4 tracking-wide">Ready to start your project?</h4>
              <p className="text-slate-300 mb-6 font-light">
                Schedule a free consultation to discuss your technology needs and how we can help.
              </p>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900 rounded-none font-medium tracking-wide">
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
