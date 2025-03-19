
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  Users, 
  BookOpen, 
  MessageSquare
} from 'lucide-react';
import ModuleCard from '../ui/ModuleCard';

const ModularPlatform = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  
  const modules = [
    {
      id: 'skills',
      icon: <Brain size={28} />,
      title: 'Skills Intelligence Center',
      description: 'Advanced database of technical domains and skills with visualizations of skill interconnections.',
      delay: 1
    },
    {
      id: 'success',
      icon: <BarChart3 size={28} />,
      title: 'Client Success Hub',
      description: 'Case studies organized by industry with quantifiable metrics and measurable outcomes.',
      delay: 2
    },
    {
      id: 'assessment',
      icon: <Users size={28} />,
      title: 'Talent Assessment Framework',
      description: 'Comprehensive vetting methodology for technical candidates with verification processes.',
      delay: 3
    },
    {
      id: 'resources',
      icon: <BookOpen size={28} />,
      title: 'Learning Resources',
      description: 'Industry insights, technical hiring guides, market trends and salary benchmarks.',
      delay: 4
    },
    {
      id: 'engagement',
      icon: <MessageSquare size={28} />,
      title: 'Engagement Platform',
      description: 'Modular contact system with specialized inquiry paths and consultation requests.',
      delay: 5
    }
  ];
  
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="py-1 px-3 rounded-full text-xs font-medium bg-primary/5 text-primary">
              Modular Platform
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 tracking-tight">
            A Comprehensive <span className="text-accent">Staffing Solution</span>
          </h2>
          <p className="text-primary/70 max-w-2xl mx-auto text-balance">
            Our modular platform architecture enables a seamless, tailored experience for both clients and candidates, ensuring the perfect match for specialized technical roles.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              icon={module.icon}
              title={module.title}
              description={module.description}
              onClick={() => setActiveModule(module.id)}
              delay={module.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModularPlatform;
