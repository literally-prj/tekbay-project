
import { Building2, Wrench, Hammer, Settings, Truck, ShieldCheck } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GeneralContracting = () => {
  const offerings = [
    {
      title: 'Industrial Material Supply',
      description: 'Comprehensive supply of high-quality industrial materials for construction and infrastructure projects, ensuring timely delivery and cost-effective solutions.',
      icon: Truck
    },
    {
      title: 'Specialized Contracting Services',
      description: 'Expert specialized contracting services tailored to specific industry requirements, from heavy industrial to commercial applications.',
      icon: Settings
    },
    {
      title: 'Abrasive Blasting & Protective Coating',
      description: 'Professional surface preparation and protective coating services for industrial applications, ensuring longevity and corrosion resistance.',
      icon: ShieldCheck
    },
    {
      title: 'Asphalt Works & Surface Marking',
      description: 'Complete asphalt construction and professional surface marking solutions for roads, parking lots, and industrial facilities.',
      icon: Building2
    },
    {
      title: 'Pipeline Color Coding Solutions',
      description: 'Specialized pipeline identification and color coding systems for safety compliance and operational efficiency.',
      icon: Wrench
    },
    {
      title: 'Custom Safety Signage',
      description: 'Design and installation of custom safety signage and wayfinding systems to ensure workplace safety and regulatory compliance.',
      icon: Hammer
    },
    {
      title: 'Turnkey Construction Projects',
      description: 'Complete project management from concept to completion for construction projects, delivering on time and within budget.',
      icon: Building2
    },
    {
      title: 'Operations & General Maintenance',
      description: 'Ongoing operational support and comprehensive maintenance services to ensure optimal facility performance.',
      icon: Settings
    },
    {
      title: 'General Building Construction',
      description: 'Full-service building construction for commercial and industrial facilities with focus on quality and sustainability.',
      icon: Building2
    },
    {
      title: 'Innovative Engineering Services',
      description: 'Cutting-edge engineering solutions and technical consulting services for complex industrial challenges.',
      icon: Wrench
    },
    {
      title: 'Mechanical, Electrical & Plumbing (MEP)',
      description: 'Complete MEP services for building infrastructure and systems, ensuring efficient and reliable operations.',
      icon: Settings
    },
    {
      title: 'Procurement & Facility Management',
      description: 'Strategic procurement and comprehensive facility management solutions to optimize operational efficiency.',
      icon: Truck
    },
    {
      title: 'Industrial Cleaning Solutions',
      description: 'Specialized industrial cleaning and maintenance services for manufacturing and processing facilities.',
      icon: ShieldCheck
    },
    {
      title: 'Comprehensive Electrical Services',
      description: 'Full electrical installation, maintenance, and consulting services for industrial and commercial applications.',
      icon: Wrench
    },
    {
      title: 'Industrial Automation Systems',
      description: 'Advanced automation solutions for industrial processes and operations to enhance productivity and efficiency.',
      icon: Settings
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Background */}
      <section 
        className="relative pt-32 pb-20 px-6 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/lovable-uploads/43a859b5-46b1-4356-83b5-4591fbef9858.png')`
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            General <span className="text-gradient">Contracting</span>
          </h1>
          <div className="max-w-5xl mx-auto space-y-6 text-lg md:text-xl text-slate-200 leading-relaxed">
            <p>
              Tekbay is a trusted leader in general contracting, delivering high-quality, cost-effective solutions 
              tailored to client needs. We prioritize safety, sustainability, and customer satisfaction, leveraging 
              technology and best practices to exceed expectations.
            </p>
            <p>
              From new builds to renovations and project management, we turn visions into reality with precision and integrity. 
              Our comprehensive approach encompasses every aspect of construction and contracting services, ensuring 
              seamless project delivery from conception to completion.
            </p>
            <p>
              With decades of combined experience and a commitment to excellence, we provide innovative solutions 
              that meet the evolving needs of modern construction and industrial projects.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Our <span className="text-gradient">Offerings</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive contracting solutions spanning industrial construction, specialized services, 
              and facility management to support your project success.
            </p>
          </div>
          
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
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors duration-300 mb-2">
                    {offering.title}
                  </h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-20 glass-card p-12 rounded-3xl text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Building Tomorrow's <span className="text-gradient">Infrastructure</span>
            </h3>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Our commitment extends beyond project completion. We build lasting relationships with our clients, 
              providing ongoing support and maintenance services to ensure your investment continues to deliver 
              value for years to come.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GeneralContracting;
