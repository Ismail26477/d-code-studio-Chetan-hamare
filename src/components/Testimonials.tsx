import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Business Owner',
      rating: 5,
      review: 'Best mobile shop in Nagpur! Suresh ji helped me choose the perfect phone for my needs. Great prices and genuine products.',
      avatar: '👨‍💼',
    },
    {
      name: 'Priya Deshmukh',
      role: 'Student',
      rating: 5,
      review: 'Got my iPhone repaired here. Excellent service and very reasonable charges. Highly recommend for screen replacement!',
      avatar: '👩‍🎓',
    },
    {
      name: 'Amit Kulkarni',
      role: 'IT Professional',
      rating: 5,
      review: 'Been buying from Simran Mobile for 5 years. Always get the best deals and after-sales support is amazing.',
      avatar: '👨‍💻',
    },
    {
      name: 'Sneha Patil',
      role: 'Teacher',
      rating: 5,
      review: 'Wonderful experience! They have a wide range of accessories and the staff is very helpful and knowledgeable.',
      avatar: '👩‍🏫',
    },
    {
      name: 'Vikram Joshi',
      role: 'Doctor',
      rating: 5,
      review: 'Fast service and trustworthy. Got my data transferred to new phone perfectly. Very professional team!',
      avatar: '👨‍⚕️',
    },
    {
      name: 'Neha Agrawal',
      role: 'Homemaker',
      rating: 5,
      review: 'Best prices in Sadar area! Bought smartphones for entire family. Great exchange offer too.',
      avatar: '👩',
    },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-fade-in">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-up">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-100">
            Don't just take our word for it. Here's what our happy customers have to say about us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-secondary/30 rounded-2xl p-6 hover-lift animate-scale-in relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/10">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-foreground/80 mb-6 relative z-10">"{testimonial.review}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="text-center mt-12 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-6 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
