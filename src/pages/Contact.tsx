
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'contact@hrcheckmate.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '+1 (817) 600-xxxx',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Office',
      details: '4020 N MacArthur Blvd Suite 122 Irving, TX 75038'
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
                Get <span className="text-accent">in Touch</span>
              </h1>
              <p className="text-xl text-primary/70 max-w-2xl mx-auto">
                Ready to find exceptional technical talent? Contact our team to discuss your specialized staffing needs.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-display font-semibold mb-6">Contact Us</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Thank you for reaching out!</h3>
                    <p className="text-primary/70 mb-6">
                      Your message has been received. Our team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-accent font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary/70 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary/70 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-primary/70 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary/70 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-8 py-3.5 transition-colors inline-flex items-center justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Send Message
                          <ArrowRight size={18} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-display font-semibold">Connect With Us</h2>
                <p className="text-primary/70">
                  Have questions about our specialized staffing solutions? Our team is here to help you find the perfect technical talent for your needs.
                </p>
                
                <div className="space-y-6 mt-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-accent mr-4 mt-1">{item.icon}</div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-primary/70">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 bg-secondary/50 p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-4">Our Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-primary/70">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary/70">Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary/70">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
