
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6 text-2xl font-display font-semibold tracking-tight">
              <span className="flex items-center">
                <span className="text-accent mr-1">HR</span>CheckMate
              </span>
            </Link>
            <p className="text-white/70 mb-6 text-sm">
              Connecting exceptional talent with innovative companies through our specialized technical staffing approach.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="text-white/70 hover:text-white text-sm transition-colors">IAM Specialists</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-white text-sm transition-colors">AI Experts</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-white text-sm transition-colors">Blockchain Talent</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-white text-sm transition-colors">Software Engineers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/70 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/insights" className="text-white/70 hover:text-white text-sm transition-colors">Insights</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-white text-sm transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Stay Updated</h3>
            <p className="text-white/70 text-sm mb-4">Subscribe to our newsletter for the latest industry insights.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 text-sm rounded-l-md px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button type="submit" className="bg-accent hover:bg-accent/90 rounded-r-md px-4 flex items-center justify-center transition-colors">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} HRCheckMate. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
