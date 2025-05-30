
import { Code, Smartphone, Cloud, Shield, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored solutions built with cutting-edge technologies to meet your unique business requirements.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize your business operations.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    },
    {
      icon: Zap,
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and data-driven insights to accelerate your business growth.',
    },
    {
      icon: Users,
      title: 'Digital Transformation',
      description: 'Strategic consulting and implementation to modernize your business processes.',
    },
  ];

  return (
    <section id="solutions" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Our Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive technology solutions designed to drive innovation and accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-white hover:bg-slate-50 transition-all duration-300 border border-slate-100 hover:border-slate-200"
            >
              <div className="mb-8">
                <div className="w-12 h-12 bg-slate-900 flex items-center justify-center group-hover:bg-slate-800 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4 tracking-wide">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
