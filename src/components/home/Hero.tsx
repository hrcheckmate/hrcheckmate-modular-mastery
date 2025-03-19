
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add a small delay for the animation to be noticeable
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transition-all duration-700 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="inline-block mb-6">
              <span className="py-1 px-3 rounded-full text-xs font-medium bg-accent/10 text-accent animate-fade-in">
                Expert Technical Talent
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold leading-tight text-primary tracking-tight mb-6">
              Connecting Companies with <span className="text-accent">Exceptional</span> Tech Talent
            </h1>
            
            <p className="text-lg md:text-xl text-primary/70 mb-8 max-w-2xl mx-auto text-balance">
              Specialized technical staffing for the most demanding roles in IAM, AI, blockchain, and software development.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link 
                to="/solutions" 
                className="bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-8 py-3.5 transition-colors inline-flex items-center justify-center"
              >
                Explore Solutions
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white hover:bg-gray-50 text-primary font-medium shadow-sm border border-gray-200 rounded-full px-8 py-3.5 transition-colors inline-flex items-center justify-center"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
        
        <div 
          className={`mt-20 transition-all duration-1000 ease-out delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          <div className="text-center mb-8">
            <p className="text-sm text-primary/60 font-medium">TRUSTED BY INDUSTRY LEADERS</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {['Microsoft', 'Amazon', 'Google', 'IBM', 'Oracle'].map((company) => (
              <div key={company} className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <p className="font-display text-xl font-medium text-primary/80">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
