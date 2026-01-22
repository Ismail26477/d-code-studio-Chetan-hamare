import { Wrench, Monitor, HardDrive, RefreshCw, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Screen Replacement',
      description: 'Professional display repair for all smartphone brands with genuine parts.',
      features: ['Original Displays', 'Same Day Service', '90 Days Warranty'],
    },
    {
      icon: Wrench,
      title: 'Mobile Repair',
      description: 'Expert repair for all hardware issues - battery, charging port, speaker, mic.',
      features: ['All Brands', 'Expert Technicians', 'Affordable Prices'],
    },
    {
      icon: HardDrive,
      title: 'Software Installation',
      description: 'OS updates, app installation, virus removal and optimization.',
      features: ['Data Backup', 'Speed Optimization', 'Security Setup'],
    },
    {
      icon: RefreshCw,
      title: 'Mobile Exchange',
      description: 'Trade your old phone for the best value and upgrade to latest models.',
      features: ['Instant Valuation', 'Best Prices', 'Easy Process'],
    },
    {
      icon: Shield,
      title: 'Accessories Installation',
      description: 'Professional screen guard, back cover, and accessories installation.',
      features: ['Bubble-Free', 'Perfect Fit', 'Warranty Included'],
    },
    {
      icon: Zap,
      title: 'Data Transfer',
      description: 'Secure transfer of all your data, contacts, photos from old to new phone.',
      features: ['All Data Types', 'Secure Process', 'Quick Service'],
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-fade-in">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-up">
            Expert <span className="gradient-text">Repair & Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-100">
            Professional mobile repair and maintenance services by experienced technicians. 
            We handle all brands with genuine parts and warranty.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-border rounded-2xl p-6 hover-lift overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm">
                      <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 text-xs">✓</span>
                      </span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Button */}
                <div className="mt-5 overflow-hidden">
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                  >
                    Book Now
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 gradient-bg rounded-2xl p-8 md:p-12 text-center text-white animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Urgent Repair? We're Here to Help!
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Get your device fixed quickly with our express repair service. 
            Same day repair available for most issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover-scale transition-all"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi, I need mobile repair service"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-semibold px-8 py-3 rounded-full hover-scale transition-all"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
