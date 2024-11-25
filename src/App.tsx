import React from 'react';
import { Heart, Clock, MapPin, Phone, Mail, MessageSquareMore, Instagram, Facebook } from 'lucide-react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1610992015734-11c37ff1ff80?auto=format&fit=crop&w=1920&q=80"
            alt="Nail salon hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Jesse Nails</h1>
            <p className="text-xl mb-8">Experience luxury nail care in a serene environment</p>
            <a
              href="#booking"
              className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Classic Manicure"
              price="ksh3500"
              description="Acrylics with design"
              imageUrl="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard
              title="Gel Extensions"
              price="$65"
              description="Long-lasting gel extensions with premium finish"
              imageUrl="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard
              title="Luxury Pedicure"
              price="ksh1500"
              description="Relaxing foot treatment with massage and gel polish"
              imageUrl="https://github.com/Lewisweru/Jessenails/raw/main/src/components/Images/WhatsApp%20Image%202024-11-25%20at%2017.48.41_c61005d8.jpg"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Gallery</h2>
          <Gallery />
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-4 bg-pink-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Book Your Appointment</h2>
          <p className="text-lg mb-8">Choose your preferred time and service for a perfect nail care experience</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left bg-white p-8 rounded-lg shadow-lg">
            <div>
              <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-pink-600 mr-2" />
                  <span>Monday - Saturday: 8:00 AM - 8:00 PM</span>
                </div>
    
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-pink-600 mr-2" />
                  <span>Sun: On appointment</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MessageSquareMore className="h-5 w-5 text-pink-600 mr-2" />
                  <span>0745782666</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-pink-600 mr-2" />
                  <span>book@jessenails.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-pink-600 mr-2" />
                  <span>Jessy Nails, 855 Kimathi Rd, Nanyuki</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Jesse Nails</h3>
              <p className="text-gray-400">Luxury nail care services in the heart of the city</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-pink-400">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-pink-400">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md w-full text-gray-900"
                />
                <button className="bg-pink-600 px-4 py-2 rounded-r-md hover:bg-pink-700">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Lewis Weru. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
