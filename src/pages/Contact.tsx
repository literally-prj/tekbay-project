
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

  const services = [
    'IT & Cybersecurity',
    'General Contracting',
    'Logistics Solutions',
    'E-Commerce Solutions',
    'Consultation',
    'Other'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your logistics and technology operations? Let's discuss how we can help you 
            achieve your business goals with our comprehensive solutions.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-200/50">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Send us a message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h4>
                  <p className="text-slate-600">Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Ahmed" 
                        className="rounded-lg border-slate-300 focus:border-cyan-500" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Al-Rashid" 
                        className="rounded-lg border-slate-300 focus:border-cyan-500" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ahmed@company.com" 
                      className="rounded-lg border-slate-300 focus:border-cyan-500" 
                      required
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                      <Input 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company" 
                        className="rounded-lg border-slate-300 focus:border-cyan-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                      <Input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+966 XX XXX XXXX" 
                        className="rounded-lg border-slate-300 focus:border-cyan-500" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Service of Interest</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 px-3 py-2"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your logistics or technology needs..." 
                      className="rounded-lg border-slate-300 focus:border-cyan-500 min-h-[120px]" 
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-lg py-3"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h3>
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
                    className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200/50 group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors text-lg">
                        {info.title}
                      </h4>
                      <p className="text-slate-600">{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="p-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl text-white">
                <h4 className="font-bold text-xl mb-3">Ready to start your project?</h4>
                <p className="text-cyan-100 mb-6 leading-relaxed">
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

      <Footer />
    </div>
  );
};

export default Contact;
