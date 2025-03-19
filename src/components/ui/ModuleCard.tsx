
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ModuleCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
  onClick?: () => void;
  delay?: number;
};

const ModuleCard = ({ icon, title, description, link, onClick, delay = 0 }: ModuleCardProps) => {
  const handleClick = () => {
    if (onClick) onClick();
    if (link) window.location.href = link;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div 
        onClick={handleClick}
        className={`h-full bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] ${link || onClick ? 'cursor-pointer' : ''}`}
      >
        <div className="mb-4 text-accent">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-primary/70 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default ModuleCard;
