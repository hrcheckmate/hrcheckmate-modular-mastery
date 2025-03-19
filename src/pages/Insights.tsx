
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Insights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const articles = [
    {
      title: 'The Future of IAM: Trends and Predictions',
      excerpt: 'Explore the evolving landscape of Identity and Access Management and how it will impact security architecture in the coming years.',
      date: 'May 15, 2023',
      readTime: '8 min read',
      category: 'IAM',
      slug: '#'
    },
    {
      title: 'Building Effective AI Teams: Skills and Structure',
      excerpt: 'Learn how to structure and staff AI development teams for maximum effectiveness and innovation.',
      date: 'Apr 22, 2023',
      readTime: '12 min read',
      category: 'AI',
      slug: '#'
    },
    {
      title: 'Blockchain Talent: Finding the Right Skills in a Niche Market',
      excerpt: 'Strategies for identifying and attracting top blockchain development talent in a competitive landscape.',
      date: 'Mar 10, 2023',
      readTime: '10 min read',
      category: 'Blockchain',
      slug: '#'
    },
    {
      title: 'Technical Hiring Trends for 2023',
      excerpt: 'An analysis of the changing landscape of technical recruitment and what it means for companies seeking specialized talent.',
      date: 'Feb 28, 2023',
      readTime: '14 min read',
      category: 'Hiring',
      slug: '#'
    },
    {
      title: 'The Value of Technical Assessment in the Hiring Process',
      excerpt: 'How rigorous technical assessment leads to better hiring outcomes and reduced turnover in specialized roles.',
      date: 'Jan 15, 2023',
      readTime: '9 min read',
      category: 'Assessment',
      slug: '#'
    },
    {
      title: 'Remote Technical Teams: Best Practices for Success',
      excerpt: 'Strategies for building, managing, and optimizing remote technical teams in the post-pandemic world.',
      date: 'Dec 5, 2022',
      readTime: '11 min read',
      category: 'Management',
      slug: '#'
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
                Industry <span className="text-accent">Insights</span>
              </h1>
              <p className="text-xl text-primary/70 max-w-2xl mx-auto">
                Stay informed with the latest trends, best practices, and thought leadership in specialized technical staffing.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col module-card-transition"
                >
                  <div className="h-48 bg-secondary/50 flex items-center justify-center">
                    <span className="text-sm font-medium py-1 px-3 rounded-full bg-accent/10 text-accent">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-primary/60 mb-4">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3">{article.title}</h2>
                    <p className="text-primary/70 mb-6 flex-1">{article.excerpt}</p>
                    <Link 
                      to={article.slug} 
                      className="text-accent font-medium inline-flex items-center hover:text-accent/80 transition-colors mt-auto"
                    >
                      Read Article
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button className="bg-white hover:bg-gray-50 text-primary font-medium shadow-sm border border-gray-200 rounded-full px-8 py-3.5 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Insights;
