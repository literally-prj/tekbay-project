
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated background images */}
      <div className="absolute inset-0">
        {/* Circuit board image - moving diagonally */}
        <div 
          className="absolute w-96 h-96 opacity-20 animate-pulse"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&crop=center')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'float-diagonal 20s linear infinite',
            top: '-10%',
            left: '-10%'
          }}
        ></div>
        
        {/* AI/Robot image - moving horizontally */}
        <div 
          className="absolute w-80 h-80 opacity-15"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop&crop=center')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'float-horizontal 25s linear infinite reverse',
            top: '60%',
            right: '-15%'
          }}
        ></div>
        
        {/* Code/Programming image - moving vertically */}
        <div 
          className="absolute w-72 h-72 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=center')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'float-vertical 30s linear infinite',
            bottom: '70%',
            left: '70%'
          }}
        ></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              TEK-BAY
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 font-light">
            Where Innovation Meets Excellence
          </p>
          <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of technology with cutting-edge solutions that transform businesses 
            and empower digital transformation across industries.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-300">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-blue-400 text-blue-300 hover:bg-blue-900/50 px-8 py-4 text-lg rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
