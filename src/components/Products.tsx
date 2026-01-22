import { Smartphone, Headphones, Watch, Battery, Cable, Shield, MessageCircle } from 'lucide-react';
import smartphoneImg from '@/assets/products/smartphone.png';
import headphonesImg from '@/assets/products/headphones.png';
import smartwatchImg from '@/assets/products/smartwatch.png';
import powerbankImg from '@/assets/products/powerbank.png';
import cableImg from '@/assets/products/cable.png';
import caseImg from '@/assets/products/case.png';

const Products = () => {
  const products = [
    {
      icon: Smartphone,
      title: 'Smartphones',
      description: 'Latest Android & iPhone models from all brands',
      priceRange: '₹9,999 - ₹1,50,000',
      image: smartphoneImg,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Headphones,
      title: 'Earbuds & Headphones',
      description: 'TWS earbuds, neckbands & premium headphones',
      priceRange: '₹299 - ₹25,000',
      image: headphonesImg,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Watch,
      title: 'Smartwatches',
      description: 'Fitness trackers & smartwatches for all',
      priceRange: '₹999 - ₹50,000',
      image: smartwatchImg,
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Battery,
      title: 'Power Banks',
      description: 'High-capacity portable chargers',
      priceRange: '₹499 - ₹5,000',
      image: powerbankImg,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Cable,
      title: 'Cables & Chargers',
      description: 'Fast chargers, cables & adapters',
      priceRange: '₹99 - ₹3,000',
      image: cableImg,
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Cases & Covers',
      description: 'Protective cases, tempered glass & more',
      priceRange: '₹99 - ₹2,000',
      image: caseImg,
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="products" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-fade-in">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-up">
            Explore Our <span className="gradient-text">Collection</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-100">
            From flagship smartphones to essential accessories, we have everything 
            you need at the best prices in Nagpur.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift hover-glow animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image Area */}
              <div className={`relative h-48 bg-gradient-to-br ${product.gradient} p-6 flex items-center justify-center overflow-hidden`}>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                />
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                  Popular
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${product.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <product.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Price Range</p>
                    <p className="text-lg font-bold gradient-text">{product.priceRange}</p>
                  </div>
                  <a
                    href={`https://wa.me/919876543210?text=Hi, I'm interested in ${product.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 btn-accent text-sm py-2 px-4"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-slide-up">
          <p className="text-muted-foreground mb-4">Looking for something specific?</p>
          <a
            href="https://wa.me/919876543210?text=Hi, I'm looking for a mobile product"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
