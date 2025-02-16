import React from 'react';
import { Scissors, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-pink-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Jessy Nails</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#services" className="hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#gallery" className="hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
              <a href="#booking" className="hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Book Now</a>
              <a href="#contact" className="hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-pink-600 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#services" className="hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#gallery" className="hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">Gallery</a>
            <a href="#booking" className="hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">Book Now</a>
            <a href="#contact" className="hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
