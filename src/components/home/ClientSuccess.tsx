
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ClientSuccess = () => {
  const successMetrics = [
    { 
      number: '97%', 
      description: 'placement success rate across technical roles' 
    },
    { 
      number: '73%', 
      description: 'faster time-to-hire compared to industry average' 
    },
    { 
      number: '94%', 
      description: 'client satisfaction score from ongoing partnerships' 
    },
    { 
      number: '89%', 
      description: 'retention rate for our placed technical talent' 
    },
  ];
  
  const testimonials = [
    {
      quote: "HRCheckMate found us specialized IAM talent that transformed our security infrastructure. Their technical vetting process identified candidates with exactly the skills we needed.",
      author: "Sarah Chen",
      position: "CTO, Security Solutions Inc.",
    },
    {
      quote: "The AI specialists we hired through HRCheckMate accelerated our machine learning initiatives by months. Their specialized knowledge was exactly what we were looking for.",
      author: "Michael Rodriguez",
      position: "VP of Engineering, DataAI",
    },
  ];
  
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="py-1 px-3 rounded-full text-xs font-medium bg-accent/10 text-accent">
              Proven Results
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 tracking-tight">
            Delivering <span className="text-accent">Measurable Results</span>
          </h2>
          <p className="text-primary/70 max-w-2xl mx-auto text-balance">
            Our specialized approach to technical staffing delivers quantifiable outcomes and exceptional talent that meets your specific needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 glass rounded-2xl"
            >
              <div className="text-4xl md:text-5xl font-display font-semibold text-accent mb-3">
                {metric.number}
              </div>
              <p className="text-primary/70 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
            >
              <div className="mb-6 text-accent">
                <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.6249 31.5C8.41659 31.5 5.72909 30.4375 3.56242 28.3125C1.39575 26.1458 0.312417 23.4583 0.312417 20.25C0.312417 17.4583 1.1249 14.8125 2.74992 12.3125C4.37492 9.77083 6.89575 7.22917 10.3124 4.6875L14.1249 8.5C12.9583 9.66667 12.0208 10.75 11.3124 11.75C10.6458 12.75 10.3124 13.8125 10.3124 14.9375C10.3124 15.4375 10.3958 15.9167 10.5624 16.375C10.7708 16.8333 11.1249 17.3333 11.6249 17.875C12.3333 17.0417 13.2291 16.625 14.3124 16.625C15.6458 16.625 16.7291 17.0833 17.5624 18C18.3958 18.9167 18.8124 20.0417 18.8124 21.375C18.8124 22.9583 18.1666 24.2917 16.8749 25.375C15.6249 26.4583 14.0833 27 12.2499 27C10.5833 28.6667 8.91659 29.9375 7.24992 30.8125C5.58325 31.6458 3.81242 32.0625 1.93742 32.0625L11.6249 31.5ZM32.8124 31.5C29.6041 31.5 26.9166 30.4375 24.7499 28.3125C22.5833 26.1458 21.4999 23.4583 21.4999 20.25C21.4999 17.4583 22.3124 14.8125 23.9374 12.3125C25.5624 9.77083 28.0833 7.22917 31.4999 4.6875L35.3124 8.5C34.1458 9.66667 33.2083 10.75 32.4999 11.75C31.8333 12.75 31.4999 13.8125 31.4999 14.9375C31.4999 15.4375 31.5833 15.9167 31.7499 16.375C31.9583 16.8333 32.3124 17.3333 32.8124 17.875C33.5208 17.0417 34.4166 16.625 35.4999 16.625C36.8333 16.625 37.9166 17.0833 38.7499 18C39.5833 18.9167 39.9999 20.0417 39.9999 21.375C39.9999 22.9583 39.3541 24.2917 38.0624 25.375C36.8124 26.4583 35.2708 27 33.4374 27C31.7708 28.6667 30.1041 29.9375 28.4374 30.8125C26.7708 31.6458 24.9999 32.0625 23.1249 32.0625L32.8124 31.5Z" fill="currentColor" fillOpacity="0.2"/>
                </svg>
              </div>
              <p className="text-primary/80 mb-6 leading-relaxed">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-primary/60 text-sm">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {['Microsoft', 'Amazon', 'Google', 'IBM', 'Oracle', 'Salesforce', 'Adobe'].map((company, index) => (
              <div 
                key={company} 
                className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="font-display text-xl font-medium text-primary/80">{company}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSuccess;
