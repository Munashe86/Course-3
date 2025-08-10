import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { GradientButton } from './ui/GradientButton';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleSignIn = () => {
    window.open('https://app.aisolutions.ky', '_blank');
  };

  const handleWebProducts = () => {
    window.open('https://webproducts.aisolutions.ky', '_blank');
  };

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Website Products', path: '#', action: handleWebProducts },
    { title: 'Services', path: '/services' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-surface/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center h-28">
          <div 
            onClick={() => handleNavigation('/')}
            className="mr-auto cursor-pointer"
          >
            <motion.img 
              src="https://imgur.com/9o9t0A3.png" 
              alt="AI Solutions Logo" 
              className="h-20 w-auto transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.title}
                onClick={() => item.action ? item.action() : handleNavigation(item.path)}
                className={`text-white hover:text-accent-500 transition-colors duration-300
                         ${location.pathname === item.path ? 'text-accent-500' : ''}`}
              >
                {item.title}
              </button>
            ))}
            <GradientButton size="sm" onClick={handleSignIn}>
              Sign In
            </GradientButton>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 ml-4"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-surface"
          >
            <div className="px-4 py-2 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => item.action ? item.action() : handleNavigation(item.path)}
                  className="block w-full text-left py-2 text-white hover:text-accent-500"
                >
                  {item.title}
                </button>
              ))}
              <button
                onClick={handleSignIn}
                className="block w-full text-left py-2 text-blue-400 hover:text-blue-300"
              >
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};