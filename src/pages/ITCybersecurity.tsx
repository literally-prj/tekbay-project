
import { Shield, Server, Network, Lock, Eye, Cpu } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ITCybersecurity = () => {
  const offerings = [
    {
      title: 'Data Center & Hybrid IT Solutions',
      description: 'Robust infrastructure services including servers, storage, virtualization, cloud, HCI, VDI, backup, patch management, and business continuity—designed for high availability and performance.',
      icon: Server,
    },
    {
      title: 'Enterprise Networking Solutions',
      description: 'Enterprise Networking (Routers, Switches, Wireless, Structured Cabling), Mobility & Next Gen Wireless, SD-WAN, Industrial Infrastructure & Connectivity, Internet of Things [IoT]',
      icon: Network,
    },
    {
      title: 'PCS, Consumables & Office Solutions',
      description: 'PCs, Laptops, Tablets, Thin client, Printers & Scanners, Barcode Scanners, POS Machines',
      icon: Cpu,
    },
    {
      title: 'Security Solutions',
      description: 'Network Security (Next Generation Firewalls), Endpoint Security, Cloud Security, Email Security, Cybersecurity, Data Protection, Compliance, Proxy & WebFilter, Industrial Cybersecurity',
      icon: Shield,
    },
    {
      title: 'Professional & Managed Services',
      description: 'AMC & Advanced Professional Services, Cloud-based Security Operations Center (SOC), Cyber Incident Response & Penetration Testing, Structured Cabling & DIAS (Dedicated Internet Access), Outsourced IT Manpower Solutions',
      icon: Eye,
    },
    {
      title: 'Digitalization',
      description: 'Software License Management, Automated IT Onboarding & Offboarding tool, SaaS, Spend Tracking & Optimization, Business Application, Data & Automation, Application Development',
      icon: Lock,
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Background */}
      <section 
        className="relative pt-32 pb-20 px-6 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/lovable-uploads/9302018b-1ca1-4458-92b9-91dc33875a1f.png')`
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            IT & <span className="text-gradient">Cybersecurity</span>
          </h1>
          <div className="max-w-5xl mx-auto space-y-6 text-lg md:text-xl text-slate-200 leading-relaxed">
            <p>
              As the industry's premier technology integrator, we are also the leading provider of On-Demand 
              Business infrastructures, affording our customers customized technology integration packages to 
              optimize their efficiency.
            </p>
            <p>
              Our comprehensive IT solutions encompass everything from robust data center infrastructure and 
              enterprise networking to cutting-edge cybersecurity measures. We provide end-to-end technology 
              services that enable businesses to operate securely, efficiently, and at scale.
            </p>
            <p>
              With a focus on digital transformation and emerging technologies, we help organizations navigate 
              the complex IT landscape while maintaining the highest standards of security and performance.
            </p>
          </div>
        </div>
      </section>

      {/* IT Offerings Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              IT <span className="text-gradient">Offerings</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to modernize your infrastructure, 
              enhance security posture, and drive operational excellence across your organization.
            </p>
          </div>
          
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

          {/* Additional Info Section */}
          <div className="mt-20 glass-card p-12 rounded-3xl text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Comprehensive Technology <span className="text-gradient">Partnership</span>
            </h3>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              We don't just provide technology solutions; we become your strategic IT partner. Our team of 
              certified professionals works closely with your organization to understand your unique challenges 
              and deliver customized solutions that align with your business objectives and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITCybersecurity;
