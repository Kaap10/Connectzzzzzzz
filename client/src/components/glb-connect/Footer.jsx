import React from "react";
import { Link } from "react-router-dom";
import glbLogo from '../../assets/glb-logo.png';

const Footer = () => {
  return (
    <footer className="bg-glbBrown text-glbWhite pt-12 pb-6 border-t-4 border-glbGold font-glbSans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Institute Info */}
          <div className="col-span-1 flex flex-col items-start gap-3">
            <img src={glbLogo} alt="GL Bajaj Logo" className="h-14 w-auto mb-2" />
            <h3 className="text-2xl font-glbSerif font-bold text-glbGold mb-1">GL BAJAJ</h3>
            <p className="text-glbWhite text-sm opacity-80 max-w-xs">
              Premier Institute for Engineering & Management. Excellence, Innovation, and Leadership.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-glbGold mb-4 text-lg font-glbSerif">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-glbGold transition-colors">About Us</Link></li>
              <li><Link to="/jobs" className="hover:text-glbGold transition-colors">Jobs</Link></li>
              <li><Link to="/resources" className="hover:text-glbGold transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-glbGold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Student Resources */}
          <div>
            <h3 className="font-bold text-glbGold mb-4 text-lg font-glbSerif">Student Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-glbGold transition-colors">FAQ</Link></li>
              <li><Link to="/help" className="hover:text-glbGold transition-colors">Help Center</Link></li>
              <li><Link to="/guides" className="hover:text-glbGold transition-colors">Guides</Link></li>
              <li><Link to="/feedback" className="hover:text-glbGold transition-colors">Feedback</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-bold text-glbGold mb-4 text-lg font-glbSerif">Contact</h3>
            <p className="text-glbWhite text-sm mb-2">Plot No.2, APJ Abdul Kalam Road, Knowledge Park 3, Greater Noida, UP, India, 201306</p>
            <p className="text-glbGold font-bold mb-2">Helpline: 8010-000-234</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-glbGold" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-glbGold" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-glbGold" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="hover:text-glbGold" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-glbGold text-center text-sm text-glbWhite opacity-80">
          © 2024 GL Bajaj. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
