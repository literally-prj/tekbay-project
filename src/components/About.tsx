
import { CheckCircle, Award, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'To be regionally recognized digital, cloud and cybersecurity solutions provider, preparing businesses for tomorrow.',
    },
    {
      icon: Users,
      title: 'Mission',
      description: 'We drive digital transformation through innovative solutions and communication services that support business performance and global growth.',
    },
    {
      icon: Award,
      title: 'Commitment',
      description: 'We address diverse and complex business needs with tailored digital and cybersecurity solutions, empowering customers to stay secure and competitive.',
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'Advanced tracking, skilled team, and strong delivery network ensure timely, dependable service from freight forwarding to last-mile delivery.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">TEKBAY</span>
          </h2>
          <p className="text-xl text-cyan-100 max-w-4xl mx-auto leading-relaxed">
            As the industry's premier technology integrator, we are also the leading provider of On-Demand 
            Business infrastructures, affording our customers customized technology integration packages to 
            optimize their efficiency.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-cyan-200 text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Vision, Mission, Commitment */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {value.title}
              </h3>
              <p className="text-cyan-200 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
