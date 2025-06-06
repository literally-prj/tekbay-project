
import { Shield, Building2, Truck, Network, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Solutions = () => {
  const solutions = [
    {
      icon: Shield,
      title: 'IT & Cybersecurity',
      description: 'Comprehensive cybersecurity and IT infrastructure solutions including data center services, networking, and security.',
      features: ['Data Center & Cloud Solutions', 'Enterprise Networking', 'Cybersecurity & Compliance', 'Professional Services', 'Digital Transformation'],
      color: 'from-cyan-500 to-blue-500',
      link: '/it-cybersecurity',
      image: '/lovable-uploads/9302018b-1ca1-4458-92b9-91dc33875a1f.png'
    },
    {
      icon: Building2,
      title: 'General Contracting',
      description: 'Trusted leader in general contracting, delivering high-quality, cost-effective solutions with focus on safety and sustainability.',
      features: ['Industrial Material Supply', 'Specialized Contracting', 'Turnkey Construction', 'MEP Services', 'Project Management'],
      color: 'from-amber-500 to-orange-500',
      link: '/general-contracting',
      image: '/lovable-uploads/43a859b5-46b1-4356-83b5-4591fbef9858.png'
    },
    {
      icon: Truck,
      title: 'Logistics Solutions',
      description: 'Full range of freight and transportation solutions from international freight to bespoke solutions across ground, sea, and air.',
      features: ['Ground Freight Access', 'Sea Freight (FCL & LCL)', 'Air Freight Delivery', 'RORO Transport', 'Cross-Border Solutions'],
      color: 'from-orange-500 to-red-500',
      link: '/logistics-solutions',
      image: '/lovable-uploads/5ec2875a-d527-4bfd-b18a-8a86e869ae7d.png'
    },
    {
      icon: Network,
      title: 'E-Commerce Solutions',
      description: 'Ecommerce warehousing and order fulfillment services bringing the best of technology and innovation together.',
      features: ['Storage & Fulfillment', 'Last Mile Delivery', 'International Shipping'],
      color: 'from-purple-500 to-violet-500',
      link: '/ecommerce-solutions',
      image: '/lovable-uploads/ce55a9ed-68ee-4ebf-a33b-2954724e4146.png'
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive solutions across logistics, supply chain, IT, and contracting services 
            engineered for Saudi Arabia's Vision 2030.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 hover:-translate-y-2"
              >
                {/* Image Header */}
                <div 
                  className="h-64 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.6)), url('${solution.image}')`
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${solution.color} rounded-full`}></div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link 
                    to={solution.link}
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${solution.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
