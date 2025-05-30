
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
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to achieve shared success.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering high-quality solutions that exceed expectations.',
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'Consistent performance and dependable partnership.',
    },
  ];

  return (
    <section id="about" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            About TEK-BAY
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            We are a forward-thinking technology company dedicated to transforming businesses through innovative digital solutions. 
            Our team of experts combines deep technical expertise with strategic thinking to deliver exceptional results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-light text-slate-900 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-slate-900 flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-800 transition-colors duration-300">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4 tracking-wide">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-light">
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
