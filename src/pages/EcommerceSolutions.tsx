
import { Package, Truck, Globe, ShoppingCart, Warehouse, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const EcommerceSolutions = () => {
  const services = [
    {
      title: 'Storage & Fulfillment',
      description: 'Limitless storage space and fully automated fulfillment.',
      icon: Warehouse
    },
    {
      title: 'E-commerce Last Mile',
      description: 'Same day delivery and express final mile delivery.',
      icon: Truck
    },
    {
      title: 'International Shipping',
      description: 'Cross-border delivery for easy expansion to international markets.',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
            E-Commerce <span className="text-gradient">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Our ecommerce warehousing and orders fulfillment services bring the best of technology and innovation together.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl hover:border-purple-400/50 transition-all duration-700 hover-lift group text-center"
              >
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Feature Highlight */}
          <div className="glass-card p-12 rounded-3xl text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center">
                <ShoppingCart className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Complete E-Commerce <span className="text-gradient">Ecosystem</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From inventory management to last-mile delivery, we provide comprehensive e-commerce solutions 
              that scale with your business. Our technology-driven approach ensures efficiency, accuracy, 
              and customer satisfaction at every step of the fulfillment process.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EcommerceSolutions;
