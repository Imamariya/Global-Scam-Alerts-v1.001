import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-surface/80 backdrop-blur-sm sticky top-0 z-50 border-b border-brand-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-extrabold text-brand-primary">
              Global Scam Alerts
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-brand-text-secondary hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#reports" className="text-brand-text-secondary hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Reports</a>
              <a href="#about" className="text-brand-text-secondary hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#contact" className="text-brand-text-secondary hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;