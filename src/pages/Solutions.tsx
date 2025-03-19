
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  BrainCircuit, 
  Lock, 
  Code,
  CheckCircle2
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      icon: <ShieldCheck size={28} />,
      title: 'IAM Specialists',
      description: 'Our identity and access management experts bring deep knowledge of security architecture, implementation, and compliance. They enable organizations to build robust security foundations while maintaining usability.',
      features: [
        'Identity lifecycle management',
        'Access governance & compliance',
        'Authentication & authorization systems',
        'Zero trust architecture',
      ]
    },
    {
      icon: <BrainCircuit size={28} />,
      title: 'AI Experts',
      description: 'Our AI specialists help organizations implement cutting-edge machine learning and artificial intelligence solutions. From data science to model deployment, they bring the expertise needed to transform your business.',
      features: [
        'Machine learning implementation',
        'Natural language processing',
        'Computer vision systems',
        'AI integration & deployment',
      ]
    },
    {
      icon: <Lock size={28} />,
      title: 'Blockchain Talent',
      description: 'Our blockchain experts specialize in building secure, decentralized systems using leading blockchain technologies. They bring practical experience in creating production-ready blockchain solutions across industries.',
      features: [
        'Smart contract development',
        'Decentralized application (dApp) creation',
        'Blockchain architecture design',
        'Consensus mechanism implementation',
      ]
    },
    {
      icon: <Code size={28} />,
      title: 'Software Engineers',
      description: 'Our software engineering talent delivers exceptional code quality and architecture across the full development stack. They bring a combination of technical excellence and practical problem-solving to every project.',
      features: [
        'Full-stack development',
        'Cloud architecture',
        'Microservices implementation',
        'API development & integration',
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-28">
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6 tracking-tight">
                Our <span className="text-accent">Solutions</span>
              </h1>
              <p className="text-xl text-primary/70 max-w-2xl mx-auto">
                We specialize in connecting companies with exceptional talent across these critical technical domains.
              </p>
            </motion.div>
            
            <div className="space-y-16">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
                      {solution.icon}
                    </div>
                    <h2 className="text-3xl font-display font-semibold">{solution.title}</h2>
                    <p className="text-primary/70 text-lg">{solution.description}</p>
                    <ul className="space-y-3 mt-6">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 size={20} className="text-accent mt-1 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-secondary/50 h-64 lg:h-auto rounded-2xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Placeholder for future image or illustration */}
                    <div className="h-full flex items-center justify-center">
                      <div className="text-6xl text-accent/20">{solution.icon}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Solutions;
