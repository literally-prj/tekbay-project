
import { Shield, Server, Network, Lock, Eye, Cpu } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ITCybersecurity = () => {
  const offerings = [
    {
      title: 'Data Center & Hybrid IT Solutions',
      description: 'Robust infrastructure services including servers, storage, virtualization, cloud, HCI, VDI, backup, patch management, and business continuity—designed for high availability and performance.',
      icon: Server,
      image: '/lovable-uploads/29902099-b9cf-4b8f-8abc-8f0cafdb14f6.png'
    },
    {
      title: 'Enterprise Networking Solutions',
      description: 'Enterprise Networking (Routers, Switches, Wireless, Structured Cabling), Mobility & Next Gen Wireless, SD-WAN, Industrial Infrastructure & Connectivity, Internet of Things [IoT]',
      icon: Network,
      image: '/lovable-uploads/29902099-b9cf-4b8f-8abc-8f0cafdb14f6.png'
    },
    {
      title: 'PCS, Consumables & Office Solutions',
      description: 'PCs, Laptops, Tablets, Thin client, Printers & Scanners, Barcode Scanners, POS Machines',
      icon: Cpu,
      image: '/lovable-uploads/29902099-b9cf-4b8f-8abc-8f0cafdb14f6.png'
    },
    {
      title: 'Security Solutions',
      description: 'Network Security (Next Generation Firewalls), Endpoint Security, Cloud Security, Email Security, Cybersecurity, Data Protection, Compliance, Proxy & WebFilter, Industrial Cybersecurity',
      icon: Shield,
      image: '/lovable-uploads/29902099-b9cf-4b8f-8abc-8f0cafdb14f6.png'
    },
    {
      title: 'Professional & Managed Services',
      description: 'AMC & Advanced Professional Services, Cloud-based Security Operations Center (SOC), Cyber Incident Response & Penetration Testing, Structured Cabling & DIAS (Dedicated Internet Access), Outsourced IT Manpower Solutions',
      icon: Eye,
      image: '/lovable-uploads/29902099-b9cf-4b8f-8abc-8f0cafdb14f6.png'
    },
    {
      title: 'Digitalization',
      description: 'Software License Management, Automated IT Onboarding & Offboarding tool, SaaS, Spend Tracking & Optimization, Business Application, Data & Automation, Application Development',
      icon: Lock,
      image: '/lovable-uploads/29902099-b9cf-4b8f-8abc-8f0cafdb14f6.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
            IT & <span className="text-gradient">Cybersecurity</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            As the industry's premier technology integrator, we are also the leading provider of On-Demand 
            Business infrastructures, affording our customers customized technology integration packages to 
            optimize their efficiency.
          </p>
        </div>
      </section>

      {/* IT Offerings Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-16 text-center">
            IT <span className="text-gradient">Offerings</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl hover:border-cyan-400/50 transition-all duration-700 hover-lift group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <offering.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {offering.title}
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
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

export default ITCybersecurity;
