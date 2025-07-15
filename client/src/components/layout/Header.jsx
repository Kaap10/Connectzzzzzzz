import React from 'react';
import { Link } from 'react-router-dom';
import glbLogo from '../../assets/glb-logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Jobs', path: '/jobs' },
  { name: 'Resources', path: '/resources' },
  { name: 'Messages', path: '/messages' },
  { name: 'Profile', path: '/profile' },
  { name: 'AI', path: '/ai' }, // New AI tab
];

const Header = () => {
  return (
    <header className="bg-glbWhite shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={glbLogo} alt="GL Bajaj Logo" className="h-12 w-auto" />
          <span className="text-glbBrown font-glbSerif text-2xl font-bold tracking-wide">GL BAJAJ</span>
        </Link>
        <nav>
          <ul className="flex gap-6">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-glbBlack font-glbSans text-lg hover:text-glbGold transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 