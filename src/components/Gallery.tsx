import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80',
      title: 'Latest Smartphones',
      category: 'Products',
    },
    {
      url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
      title: 'Mobile Display',
      category: 'Products',
    },
    {
      url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      title: 'Premium Headphones',
      category: 'Accessories',
    },
    {
      url: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80',
      title: 'Smart Watches',
      category: 'Gadgets',
    },
    {
      url: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80',
      title: 'Power Banks',
      category: 'Accessories',
    },
    {
      url: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80',
      title: 'Mobile Accessories',
      category: 'Accessories',
    },
  ];

  return (
    <section id="gallery" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-fade-in">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-up">
            Our <span className="gradient-text">Store & Products</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-100">
            Take a look at our store, products, and happy customers
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer animate-scale-in hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs text-white/80 bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                    {image.category}
                  </span>
                  <h4 className="text-white font-semibold mt-2">{image.title}</h4>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
              <h4 className="text-xl font-semibold">{galleryImages[selectedImage].title}</h4>
              <p className="text-white/70">{galleryImages[selectedImage].category}</p>
            </div>
          </div>
        )}

        {/* Visit Store CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more? Visit our store!</p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            📍 Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
