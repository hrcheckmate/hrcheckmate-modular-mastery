
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  BrainCircuit, 
  Lock, 
  Code
} from 'lucide-react';

const SpecializationCard = ({ 
  icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  index: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]"
  >
    <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-primary/70">{description}</p>
  </motion.div>
);

const SpecializationCards = () => {
  const specializations = [
    {
      icon: <ShieldCheck size={24} />,
      title: 'IAM Specialists',
      description: 'Experts in identity and access management, focusing on security architecture and implementation.',
    },
    {
      icon: <BrainCircuit size={24} />,
      title: 'AI Experts',
      description: 'Specialized talent in machine learning, natural language processing, and AI implementation.',
    },
    {
      icon: <Lock size={24} />,
      title: 'Blockchain Talent',
      description: 'Technical professionals skilled in blockchain architecture, smart contracts, and decentralized applications.',
    },
    {
      icon: <Code size={24} />,
      title: 'Software Engineers',
      description: 'Exceptional developers with expertise in building robust, scalable software solutions.',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/50">
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
              Technical Excellence
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 tracking-tight">
            Specialized <span className="text-accent">Technical Focus</span>
          </h2>
          <p className="text-primary/70 max-w-2xl mx-auto text-balance">
            We connect companies with top-tier talent across these critical technical domains, ensuring perfect alignment with your specific needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((spec, index) => (
            <SpecializationCard
              key={index}
              icon={spec.icon}
              title={spec.title}
              description={spec.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationCards;
