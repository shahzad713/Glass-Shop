import React from 'react';
import { Reveal } from './Reveal';
import { products } from '../data';

export const Products: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-apple-dark mb-4">Our Products</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
              Top-quality materials and hardware we use and supply for your construction needs.
            </p>
          </Reveal>
        </div>

        {/* Mobile: 1 col (full width), Desktop: 4 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={index * 100}>
              <div className="bg-white rounded-xl md:rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                <div className="h-56 md:h-64 overflow-hidden bg-gray-50 p-6 flex items-center justify-center relative">
                   <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                   />
                </div>
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <div className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                    {product.category}
                  </div>
                  <h3 className="text-xl md:text-lg font-bold text-apple-dark mb-2 leading-tight">{product.name}</h3>
                  <p className="text-sm md:text-sm text-gray-500 mb-4 flex-1">{product.description}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-xs font-mono text-gray-400 block">Spec: {product.specs}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};