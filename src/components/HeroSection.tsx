import React from 'react';
import sunafilOrienta from '../assets/orienta.jpg';
export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-indigo-950 min-h-[600px] overflow-hidden">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        {/* Left side - Promotional Text */}
        <div className="md:w-1/2 z-10 text-white mb-10 md:mb-0">
          {/*<div
            className="bg-pink-300 bg-opacity-90 inline-block text-indigo-950 font-bold text-5xl md:text-7xl px-8 py-4 rounded-lg mb-4">
            <h1 className="leading-tight">CHATBOT VICTORIA</h1>
          </div>*/}
          <div className="mt-2">
            <h2 className="text-4xl md:text-4xl font-bold mb-6 leading-tight">
              !Soy ClaroBot Victoria Orienta,
              <br/>
              tu asistente virtual!
            </h2>
            {/*<div className="mt-8">
              <a
                href="#"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-full inline-block transform transition hover:scale-105"
              >
                Victoria
              </a>
            </div>*/}
          </div>
        </div>
        <div className="md:w-1/2 relative flex justify-center">
          {/* Speech bubble */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 md:left-16 md:translate-x-0 z-20">
            <div className="bg-yellow-50 rounded-xl p-4 relative">
              <div className="text-center text-gray-800">
                <p>¡Orienta</p>
              </div>
              {/* Speech bubble arrow */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-yellow-50"></div>
            </div>
          </div>

          <div className="h-96">
            <img
              src={sunafilOrienta}
              style={{height: '120%'}}
              alt="Orienta"
              className="max-w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
