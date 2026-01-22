import { Phone, MapPin, ShoppingBag, Smartphone, Headphones, Watch, Battery } from 'lucide-react';

const Hero = () => {
  const floatingIcons = [
    { Icon: Smartphone, className: 'top-20 left-[10%] animate-float', size: 40 },
    { Icon: Headphones, className: 'top-32 right-[15%] animate-float-reverse delay-200', size: 35 },
    { Icon: Watch, className: 'bottom-32 left-[20%] animate-float-slow delay-300', size: 30 },
    { Icon: Battery, className: 'bottom-40 right-[10%] animate-float delay-400', size: 35 },
    { Icon: Smartphone, className: 'top-1/2 left-[5%] animate-float-reverse delay-100', size: 25 },
  ];

  return (
    <section id="home" className="relative min-h-screen gradient-bg-soft overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, className, size }, index) => (
        <div
          key={index}
          className={`absolute opacity-20 text-primary ${className}`}
        >
          <Icon size={size} />
        </div>
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Nagpur's Trusted Mobile Store</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
              <span className="gradient-text">Simran Mobile</span>
              <br />
              Your Trusted Mobile Store
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up delay-100">
              Latest smartphones, accessories, and repair services at best prices. 
              Connecting You to Technology since 2010.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up delay-200">
              <a href="tel:+919876543210" className="btn-primary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a href="#contact" className="btn-outline flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                Visit Shop
              </a>
              <a href="#products" className="btn-accent flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                View Products
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-slide-up delay-300">
              {[
                { number: '15+', label: 'Years Experience' },
                { number: '10K+', label: 'Happy Customers' },
                { number: '5K+', label: 'Products Sold' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative animate-scale-in delay-200">
            <div className="relative w-full max-w-md mx-auto">
              {/* Phone Mockup */}
              <div className="relative z-10 glass-card rounded-3xl p-6 hover-lift">
                <div className="aspect-[3/4] rounded-2xl gradient-bg flex items-center justify-center overflow-hidden">
                  <div className="text-center text-white p-8">
                    <Smartphone className="w-24 h-24 mx-auto mb-4 animate-bounce-subtle" />
                    <p className="text-xl font-semibold">Latest Smartphones</p>
                    <p className="text-white/80 mt-2">Starting ₹9,999</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 animate-float z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-lg">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">100% Genuine</p>
                    <p className="text-xs text-muted-foreground">Verified Products</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 animate-float-reverse z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-lg">⚡</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Fast Delivery</p>
                    <p className="text-xs text-muted-foreground">Same Day Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
