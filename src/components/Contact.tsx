import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Anjuman Complex, Chhindwara Rd,', 'Residency Rd, Sadar,', 'Nagpur, Maharashtra 440001'],
      action: {
        label: 'Get Directions',
        href: 'https://maps.google.com/?q=Anjuman+Complex+Chhindwara+Rd+Residency+Rd+Sadar+Nagpur+Maharashtra+440001',
      },
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 87654 32109'],
      action: {
        label: 'Call Now',
        href: 'tel:+919876543210',
      },
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@simranmobile.com', 'support@simranmobile.com'],
      action: {
        label: 'Send Email',
        href: 'mailto:info@simranmobile.com',
      },
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 10 AM - 9 PM', 'Sunday: 11 AM - 6 PM'],
      action: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-fade-in">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-up">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-100">
            Visit our store or reach out to us through any of these channels. 
            We're always happy to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
                {info.action && (
                  <a
                    href={info.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                  >
                    {info.action.label}
                    <Navigation className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Map & Quick Contact */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg animate-slide-in-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0398!2d79.0884!3d21.1499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA4JzU5LjYiTiA3OcKwMDUnMTguMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Simran Mobile Location"
              />
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4 animate-slide-up">
              <a
                href="tel:+919876543210"
                className="btn-primary flex items-center justify-center gap-2 py-4"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi, I want to enquire about products"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white font-semibold px-6 py-4 rounded-full hover-scale flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            {/* Special Offer Banner */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white text-center animate-pulse-glow">
              <p className="text-sm font-medium mb-2">🎉 Festival Special Offer</p>
              <h4 className="text-xl font-bold mb-2">Up to 20% Off on Smartphones!</h4>
              <p className="text-white/80 text-sm">Limited time offer. Visit store for details.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
