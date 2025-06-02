
import { Package, Truck, Globe, ShoppingCart, Warehouse, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const EcommerceSolutions = () => {
  const services = [
    {
      title: 'Storage & Fulfillment',
      description: 'Limitless scalable storage space and fully automated fulfillment services designed to handle high-volume e-commerce operations with precision and speed.',
      icon: Warehouse
    },
    {
      title: 'E-commerce Last Mile',
      description: 'Same day delivery and express final mile delivery solutions ensuring customer satisfaction with fast, reliable, and trackable delivery services.',
      icon: Truck
    },
    {
      title: 'International Shipping',
      description: 'Cross-border delivery services for easy expansion to international markets with customs clearance and global logistics support.',
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
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/lovable-uploads/ce55a9ed-68ee-4ebf-a33b-2954724e4146.png')`
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            E-Commerce <span className="text-gradient">Solutions</span>
          </h1>
          <div className="max-w-5xl mx-auto space-y-6 text-lg md:text-xl text-slate-200 leading-relaxed">
            <p>
              Our e-commerce warehousing and order fulfillment services bring the best of technology and innovation together 
              to create seamless, efficient, and scalable solutions for online businesses.
            </p>
            <p>
              From inventory management to last-mile delivery, we provide comprehensive e-commerce solutions that enable 
              businesses to focus on growth while we handle the complexities of logistics and fulfillment operations.
            </p>
            <p>
              With advanced automation, real-time tracking, and flexible storage options, we support e-commerce businesses 
              of all sizes in delivering exceptional customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              E-Commerce <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive e-commerce fulfillment solutions designed to scale with your business and exceed customer expectations.
            </p>
          </div>

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
            <div className="max-w-4xl mx-auto space-y-4 text-xl text-slate-300 leading-relaxed">
              <p>
                From inventory management to last-mile delivery, we provide comprehensive e-commerce solutions 
                that scale with your business. Our technology-driven approach ensures efficiency, accuracy, 
                and customer satisfaction at every step of the fulfillment process.
              </p>
              <p>
                Our state-of-the-art facilities feature automated sorting systems, climate-controlled storage, 
                and real-time inventory tracking to ensure your products are handled with care and delivered on time.
              </p>
              <p>
                With seamless integration capabilities and flexible service options, we adapt to your business model 
                and help you deliver exceptional customer experiences that drive loyalty and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EcommerceSolutions;
