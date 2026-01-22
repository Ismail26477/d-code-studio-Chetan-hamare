import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in mb-4">
          {/* Header */}
          <div className="bg-green-500 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Simran Mobile</p>
                  <p className="text-xs text-white/80">Online | Replies in minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 bg-gray-50">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <p className="text-sm text-gray-700">
                👋 Hi there! Welcome to Simran Mobile.
              </p>
              <p className="text-sm text-gray-700 mt-2">
                How can we help you today? Ask us about:
              </p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>📱 Latest smartphones</li>
                <li>🔧 Repair services</li>
                <li>💰 Best prices & offers</li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4">
            <a
              href="https://wa.me/919876543210?text=Hi, I want to enquire about products and services"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Start Chat
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110 ${
          !isOpen ? 'animate-bounce-subtle' : ''
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Pulse Ring */}
      {!isOpen && (
        <div className="absolute inset-0 w-14 h-14 bg-green-500 rounded-full animate-ping opacity-30" />
      )}
    </div>
  );
};

export default FloatingWhatsApp;
