import React, { useEffect, useState } from 'react';
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
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for preference
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleToggle = () => setDarkMode((prev) => !prev);

  return (
    <header className="bg-glbWhite dark:bg-dark shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={glbLogo} alt="GL Bajaj Logo" className="h-12 w-auto" />
          <span className="text-glbBrown dark:text-glbGold font-glbSerif text-2xl font-bold tracking-wide">GL BAJAJ</span>
        </Link>
        <div className="flex items-center gap-6">
          {/* Dark mode toggle */}
          <button
            onClick={handleToggle}
            className="p-2 rounded-full border border-glbGold bg-glbWhite dark:bg-dark dark:border-glbGold hover:bg-glbGold/20 dark:hover:bg-glbGold/20 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              // Moon icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-glbGold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
            ) : (
              // Sun icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-glbGold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71" /></svg>
            )}
          </button>
          <nav>
            <ul className="flex gap-6">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-glbBlack dark:text-glbWhite font-glbSans text-lg hover:text-glbGold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 