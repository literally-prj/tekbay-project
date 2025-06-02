
import { Truck, Ship, Plane, Package, Globe, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const LogisticsSolutions = () => {
  const services = [
    {
      title: 'Third-Party Logistics (3PL)',
      description: 'Comprehensive third-party logistics services for efficient supply chain management, including warehousing, distribution, and inventory management.',
      icon: Package
    },
    {
      title: 'Fourth-Party Logistics (4PL)',
      description: 'Strategic fourth-party logistics management and optimization solutions, providing end-to-end supply chain orchestration.',
      icon: Globe
    },
    {
      title: 'Nationwide Coverage',
      description: 'Access to storage facilities and transportation networks in major cities as well as remote locations across the Kingdom.',
      icon: Truck
    },
    {
      title: 'SFDA Approved & ISO Certified',
      description: 'High standardized climate-controlled warehousing facilities operating under the highest quality and safety standards.',
      icon: Package
    },
    {
      title: 'Cold-Chain Logistics Management',
      description: 'Specialized frozen, ambient & chilled storage and transportation solutions maintaining product integrity throughout the supply chain.',
      icon: Package
    }
  ];

  const freightServices = [
    {
      title: 'Ground Freight',
      description: 'Access the largest transportation network in the GCC and the Middle East with comprehensive ground freight solutions.',
      icon: Truck
    },
    {
      title: 'Sea Freight',
      description: 'Choose from a wide variety of sea freight services (FCL & LCL) that matches the size and weight of your goods with competitive rates.',
      icon: Ship
    },
    {
      title: 'Air Freight',
      description: 'Ship your cargo to any destination worldwide with delivery speed and reliability that meets your urgent requirements.',
      icon: Plane
    },
    {
      title: 'RORO Services',
      description: 'Transport your trucks, trailers, tractors and cars as well as rolling assets through our specialized RORO services.',
      icon: Truck
    },
    {
      title: 'Cross-Border Transportation',
      description: 'Offering a vast range of dry and temperature-controlled fleets covering the GCC region with seamless customs clearance.',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Background */}
      <section 
        className="relative pt-32 pb-20 px-6 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/lovable-uploads/5ec2875a-d527-4bfd-b18a-8a86e869ae7d.png')`
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            Logistics <span className="text-gradient">Solutions</span>
          </h1>
          <div className="max-w-5xl mx-auto space-y-6 text-lg md:text-xl text-slate-200 leading-relaxed">
            <p>
              TEKBAY is your trusted partner in logistics and supply chain solutions, focused on precision, 
              efficiency, and reliability. We offer end-to-end services including transportation, warehousing, 
              and distribution to help businesses operate smarter and save costs.
            </p>
            <p>
              With advanced tracking systems, a skilled professional team, and a robust delivery network, we ensure timely, 
              dependable service from freight forwarding to last-mile delivery—tailored to your specific business needs.
            </p>
            <p>
              We simplify logistics complexities so you can focus on growth, offering transparent, scalable solutions that 
              keep your business moving forward in today's competitive marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* B2B Supply Chain Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              B2B Supply <span className="text-gradient">Chain</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Our multi-temperature facilities across the Kingdom offer our clients flexible warehousing 
              and transportation solutions, which cater to a variety of industries and sectors with the highest 
              standards of quality and efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl hover:border-orange-400/50 transition-all duration-700 hover-lift group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freight and Transportation Section */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Freight and <span className="text-gradient">Transportation</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Full range of freight and transportation solutions from international freight & temperature-controlled 
              first mile to bespoke solutions across ground, sea, and air with comprehensive tracking and monitoring.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freightServices.map((service, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl hover:border-orange-400/50 transition-all duration-700 hover-lift group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-20 glass-card p-12 rounded-3xl text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Seamless Global <span className="text-gradient">Connectivity</span>
            </h3>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Our integrated logistics platform provides real-time visibility, predictive analytics, and proactive 
              communication to ensure your supply chain operates at peak efficiency while maintaining the flexibility 
              to adapt to changing market demands.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LogisticsSolutions;
