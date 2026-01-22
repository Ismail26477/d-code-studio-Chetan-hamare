import { Shield, Award, Headphones, ThumbsUp, Users, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Genuine Products',
      description: '100% authentic products with manufacturer warranty',
    },
    {
      icon: Award,
      title: 'Best Prices',
      description: 'Competitive pricing with exclusive offers and discounts',
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: '24/7 customer support for all your queries',
    },
    {
      icon: ThumbsUp,
      title: 'Quality Service',
      description: 'Professional repair and maintenance services',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Welcome to <span className="gradient-text">Simran Mobile</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Established by <strong>Suresh Grover</strong>, Simran Mobile has been serving Nagpur 
              for over 15 years. Located in the heart of Sadar at Anjuman Complex, we've built 
              our reputation on trust, quality, and exceptional customer service.
            </p>
            <p className="text-muted-foreground mb-8">
              From the latest smartphones to premium accessories, we offer everything you need 
              to stay connected. Our expert technicians provide professional repair services, 
              ensuring your devices are always in perfect working condition.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-2xl gradient-text">10,000+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-accent">4.9/5</p>
                  <p className="text-sm text-muted-foreground">Customer Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-right">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover-lift hover-glow group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
