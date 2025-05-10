import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            {/* <Logo />*/}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            &nbsp;
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">© 2025 SUNAFIL. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Términos y condiciones</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Políticas de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
