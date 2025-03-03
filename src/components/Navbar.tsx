import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, UtensilsCrossed, Phone, UserCircle } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { to: '/', icon: Home, text: 'Home' },
    { to: '/menu', icon: UtensilsCrossed, text: 'Menu' },
    { to: '/contact', icon: Phone, text: 'Contact' },
    { to: '/auth', icon: UserCircle, text: 'Sign In' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-emerald-800"
          >
            Gourmet Haven
          </motion.div>
          
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.text}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-4 py-2 rounded-full transition-all duration-300 
                  ${isActive 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white' 
                    : 'text-emerald-800 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 hover:text-white'}`
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.text}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;