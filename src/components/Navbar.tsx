import { useState, useEffect } from 'react';
import { Menu, X, Phone, Smartphone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Simran Mobile</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-bg group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Call Button */}
          <a
            href="tel:+919876543210"
            className="hidden md:flex items-center gap-2 btn-primary"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 bg-white/90 backdrop-blur-lg rounded-2xl p-4 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl hover:bg-secondary text-foreground/80 hover:text-primary font-medium transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919876543210"
              className="btn-primary text-center mt-2"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
