
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const navLinks = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'About', path: '/about' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-display font-semibold text-primary tracking-tight"
          aria-label="HRCheckMate Home"
        >
          <span className="flex items-center">
            <span className="text-accent mr-1">HR</span>CheckMate
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`link-underline text-sm font-medium ${
                location.pathname === link.path
                  ? 'text-accent'
                  : 'text-primary/80 hover:text-primary'
              } transition-colors`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-6 py-2.5 text-sm transition-all"
          >
            Get Started
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          className="md:hidden p-2 text-primary rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full glass transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
        <nav className="flex flex-col space-y-4 px-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-medium ${
                location.pathname === link.path
                  ? 'text-accent'
                  : 'text-primary/80'
              } transition-colors`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-accent hover:bg-accent/90 text-white text-center font-medium rounded-full px-6 py-3 transition-all mt-4"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
