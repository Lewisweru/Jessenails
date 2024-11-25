import React from 'react';

const images = [
  "https://github.com/Lewisweru/Jessenails/raw/main/src/components/Images/IMG-20241125-WA0002.jpg",
  "https://github.com/Lewisweru/Jessenails/raw/main/src/components/Images/IMG-20241125-WA0003.jpg",
  "https://github.com/Lewisweru/Jessenails/raw/main/src/components/Images/IMG-20241125-WA0004.jpg",
  "https://github.com/Lewisweru/Jessenails/raw/main/src/components/Images/IMG-20241125-WA0005.jpg",
  "https://github.com/Lewisweru/Jessenails/raw/main/src/components/Images/IMG-20241125-WA0006.jpg",
  "https://github.com/Lewisweru/Jessenails/raw/main/src/components/Images/IMG-20241125-WA0007.jpg"
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
