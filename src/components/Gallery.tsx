import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600020972925-c614926a5465?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1604902396830-1982d88f463c?auto=format&fit=crop&w=800&q=80"
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg">
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
}