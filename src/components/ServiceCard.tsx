import React from 'react';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  imageUrl: string;
}

export default function ServiceCard({ title, price, description, imageUrl }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-lg font-bold text-pink-400">{price}</p>
          <p className="mt-2 text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
}