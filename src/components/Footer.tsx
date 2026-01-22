import { Smartphone, MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const products = [
    'Smartphones',
    'Earbuds & Headphones',
    'Smartwatches',
    'Power Banks',
    'Cables & Chargers',
    'Phone Cases',
  ];

  const services = [
    'Screen Replacement',
    'Mobile Repair',
    'Software Installation',
    'Data Transfer',
    'Mobile Exchange',
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="section-padding pb-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Simran Mobile</span>
              </div>
              <p className="text-white/70 text-sm mb-4">
                Connecting You to Technology since 2010. Your trusted mobile store in Nagpur for smartphones, accessories, and repair services.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Products</h4>
              <ul className="space-y-2">
                {products.map((product) => (
                  <li key={product}>
                    <a
                      href="#products"
                      className="text-white/70 hover:text-primary transition-colors text-sm"
                    >
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">
                    Anjuman Complex, Chhindwara Rd, Residency Rd, Sadar, Nagpur 440001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:+919876543210" className="text-white/70 hover:text-primary text-sm">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="mailto:info@simranmobile.com" className="text-white/70 hover:text-primary text-sm">
                    info@simranmobile.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Simran Mobile. All rights reserved.
            </p>
            <p className="text-white/60 text-sm">
              Made with ❤️ in Nagpur
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
