
import { Building2, Wrench, Hammer, Settings, Truck, ShieldCheck } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GeneralContracting = () => {
  const offerings = [
    {
      title: 'Industrial Material Supply',
      description: 'Comprehensive supply of industrial materials for construction and infrastructure projects.',
      icon: Truck
    },
    {
      title: 'Specialized Contracting Services',
      description: 'Expert specialized contracting services tailored to specific industry requirements.',
      icon: Settings
    },
    {
      title: 'Abrasive Blasting & Protective Coating',
      description: 'Professional surface preparation and protective coating services for industrial applications.',
      icon: ShieldCheck
    },
    {
      title: 'Asphalt Works & Surface Marking',
      description: 'Complete asphalt construction and professional surface marking solutions.',
      icon: Building2
    },
    {
      title: 'Pipeline Color Coding Solutions',
      description: 'Specialized pipeline identification and color coding systems for safety compliance.',
      icon: Wrench
    },
    {
      title: 'Custom Safety Signage',
      description: 'Design and installation of custom safety signage and wayfinding systems.',
      icon: Hammer
    },
    {
      title: 'Turnkey Construction Projects',
      description: 'Complete project management from concept to completion for construction projects.',
      icon: Building2
    },
    {
      title: 'Operations & General Maintenance',
      description: 'Ongoing operational support and comprehensive maintenance services.',
      icon: Settings
    },
    {
      title: 'General Building Construction',
      description: 'Full-service building construction for commercial and industrial facilities.',
      icon: Building2
    },
    {
      title: 'Innovative Engineering Services',
      description: 'Cutting-edge engineering solutions and technical consulting services.',
      icon: Wrench
    },
    {
      title: 'Mechanical, Electrical & Plumbing (MEP)',
      description: 'Complete MEP services for building infrastructure and systems.',
      icon: Settings
    },
    {
      title: 'Procurement & Facility Management',
      description: 'Strategic procurement and comprehensive facility management solutions.',
      icon: Truck
    },
    {
      title: 'Industrial Cleaning Solutions',
      description: 'Specialized industrial cleaning and maintenance services.',
      icon: ShieldCheck
    },
    {
      title: 'Comprehensive Electrical Services',
      description: 'Full electrical installation, maintenance, and consulting services.',
      icon: Wrench
    },
    {
      title: 'Industrial Automation Systems',
      description: 'Advanced automation solutions for industrial processes and operations.',
      icon: Settings
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
            General <span className="text-gradient">Contracting</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Tekbay is a trusted leader in general contracting, delivering high-quality, cost-effective solutions 
            tailored to client needs. We prioritize safety, sustainability, and customer satisfaction, leveraging 
            technology and best practices to exceed expectations. From new builds to renovations and project 
            management, we turn visions into reality with precision and integrity.
          </p>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-16 text-center">
            Our <span className="text-gradient">Offerings</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {offerings.map((offering, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-2xl hover:border-amber-400/50 transition-all duration-700 hover-lift group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <offering.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
                    {offering.title}
                  </h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GeneralContracting;
