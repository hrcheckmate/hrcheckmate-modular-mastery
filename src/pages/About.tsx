
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-28">
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-8 tracking-tight text-center">
              About <span className="text-accent">HRCheckMate</span>
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p>
                HRCheckMate is a specialized technical staffing firm focused on connecting exceptional talent with innovative companies. Our expertise lies in the most demanding technical domains, including IAM, AI, blockchain, and software development.
              </p>
              
              <p>
                Our modular platform approach allows us to deliver a tailored experience for both clients and candidates, ensuring the perfect match for specialized technical roles. We've built our reputation on deep technical knowledge, rigorous vetting processes, and measurable results.
              </p>
              
              <h2>Our Mission</h2>
              <p>
                To bridge the gap between exceptional technical talent and innovative companies through specialized expertise and a modular, data-driven approach to staffing.
              </p>
              
              <h2>Our Vision</h2>
              <p>
                To be the definitive authority in specialized tech staffing, known for our technical expertise, rigorous vetting, and ability to match the perfect talent to the most demanding technical roles.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
