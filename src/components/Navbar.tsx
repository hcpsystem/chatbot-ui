import React from 'react';
import Logo from './Logo';

export const Navbar: React.FC = () => {

  return (
    <header className="bg-white shadow-sm">
      {/* Top navigation - quick links */}
      <div className="hidden md:flex justify-end bg-gray-100 text-sm px-4 py-1">
        <a href="#" className="px-3 py-1 text-gray-600 hover:text-gray-900 transition-colors">
          &nbsp;
        </a>
        <a href="#" className="px-3 py-1 text-gray-600 hover:text-gray-900 transition-colors">
          &nbsp;
        </a>
        <a href="#" className="px-3 py-1 text-gray-600 hover:text-gray-900 transition-colors">
          &nbsp;
        </a>
      </div>
      {/* Main navigation */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-3">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="relative">
            &nbsp;
          </div>
          <div className="relative">
            &nbsp;
          </div>
          <div className="relative">
            &nbsp;
          </div>
        </div>

        <div className="flex items-center space-x-4">
          &nbsp;
        </div>
      </nav>

      {/* Mobile menu button would go here */}
    </header>
  );
};
