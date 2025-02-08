import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  // State to manage the mobile menu open/close status
  const [isOpen, setIsOpen] = React.useState(false);
  // Hook to programmatically navigate
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo and brand name */}
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">EduFinance</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/courses" className="nav-link">Courses</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="instructor" className="nav-link">Instructor</Link>
            {/* Login button */}
            <button 
              className="btn-primary"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            {/* Register button */}
            <button 
              className="btn-primary"
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 hover:text-primary"
            >
              {/* Toggle between menu and close icons */}
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 nav-link">Home</Link>
            <Link to="/courses" className="block px-3 py-2 nav-link">Courses</Link>
            <Link to="/about" className="block px-3 py-2 nav-link">About</Link>
            {/* Mobile Login button */}
            <button 
              className="w-full text-center btn-primary mt-4"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            {/* Mobile Register button */}
            <button 
              className="w-full text-center btn-primary mt-4"
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;