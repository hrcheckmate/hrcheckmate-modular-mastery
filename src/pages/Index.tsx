
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ModularPlatform from '@/components/home/ModularPlatform';
import SpecializationCards from '@/components/home/SpecializationCards';
import ClientSuccess from '@/components/home/ClientSuccess';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <SpecializationCards />
        <ModularPlatform />
        <ClientSuccess />
        
        {/* CTA Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 tracking-tight">
                Ready to find your perfect technical match?
              </h2>
              <p className="text-white/80 mb-10 text-balance">
                Connect with our team to discuss your specialized staffing needs and discover how our modular approach can deliver exceptional talent.
              </p>
              <Link 
                to="/contact" 
                className="bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-8 py-3.5 transition-colors inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
