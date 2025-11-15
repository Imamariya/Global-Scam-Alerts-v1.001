import React from 'react';

interface IconProps {
  className?: string;
}

const FacebookIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.04c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm2.25 10.28h-2v6.97h-3.02v-6.97h-1.4v-2.79h1.4v-1.89c0-1.21.58-3.11 3.11-3.11h2.38v2.79h-1.4c-.25 0-.75.12-.75.75v1.46h2.15l-.26 2.79z" />
  </svg>
);

export default FacebookIcon;
