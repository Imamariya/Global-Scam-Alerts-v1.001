import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 border-t border-gray-300">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-brand-text-secondary">&copy; {new Date().getFullYear()} Global Scam Alerts. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-brand-text-secondary hover:text-brand-primary">Privacy Policy</a>
            <a href="#" className="text-sm text-brand-text-secondary hover:text-brand-primary">Terms of Service</a>
            <a href="#" className="text-sm text-brand-text-secondary hover:text-brand-primary">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;