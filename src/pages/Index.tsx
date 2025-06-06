
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.body.classList.add('animate-page-in');
    return () => {
      document.body.classList.remove('animate-page-in');
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
