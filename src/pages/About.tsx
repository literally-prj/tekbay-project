
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Target, Users, Award, Globe, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards and transparency in all our operations.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build lasting relationships with our clients, becoming their trusted long-term partners.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Quality is at the core of everything we do, from planning to execution and delivery.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            About <span className="text-gradient">TEKBAY</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Leading the way in logistics, supply chain solutions, IT infrastructure, and general contracting 
            across the Kingdom of Saudi Arabia.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  TEKBAY was founded with a vision to transform the logistics and technology landscape in Saudi Arabia. 
                  As a trusted partner in the Kingdom's Vision 2030 initiative, we have consistently delivered 
                  innovative solutions that drive economic growth and operational excellence.
                </p>
                <p>
                  Our journey began with a simple mission: to provide comprehensive, reliable, and efficient services 
                  that enable businesses to thrive in an increasingly complex global marketplace. Today, we stand as 
                  a leading provider of logistics, supply chain, IT, and contracting solutions.
                </p>
                <p>
                  With deep expertise across multiple industries and a commitment to innovation, we continue to set 
                  new standards for quality, efficiency, and customer satisfaction in everything we do.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                  <div className="text-3xl font-black text-cyan-600 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white p-12 rounded-3xl shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To provide comprehensive logistics, supply chain, IT infrastructure, and contracting solutions 
                that enable businesses to operate more efficiently, cost-effectively, and sustainably while 
                contributing to Saudi Arabia's Vision 2030 goals.
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-3xl shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the leading provider of integrated business solutions in the Middle East, recognized for 
                our innovation, reliability, and commitment to helping organizations achieve their strategic 
                objectives while supporting national economic transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide our decisions and define our commitment to excellence in every interaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
            Discover how TEKBAY can help transform your business operations and support your growth objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us Today
            </a>
            <a 
              href="/solutions" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Explore Our Solutions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
