import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { use } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isLogin,setIsLogin]=useState(true);

  useEffect(() => {
    const userDetails = localStorage.getItem("Details");
    setIsLogin(!userDetails);
  }, [localStorage.getItem("Details")]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Generate', path: '/generate' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 z-50 left-0 right-0 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/[0.08]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-white font-semibold text-lg tracking-tight">StyleMe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8 relative">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors group ${
                    isActive(link.path) ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <motion.div 
                className="absolute -bottom-1 h-[2px] bg-white"
                animate={{
                  x: isActive('/') ? 0 : isActive('/generate') ? 72 : isActive('/pricing') ? 170 : 250,
                  width: isActive('/') ? 45 : isActive('/generate') ? 70 : isActive('/pricing') ? 55 : 85
                }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            </div>
            
            {/* Auth Buttons */}
            {isLogin && (
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/[0.08]">
              <Link
                to="/login"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signin"
                className="group relative px-4 py-1.5 text-sm font-medium transition-all"
              >
                <span className="relative z-10 flex items-center gap-1 text-black transition-colors duration-300 group-hover:text-white">
                  Get Started
                  <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
                <div className="absolute inset-0 bg-white rounded-full transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 border border-transparent" />
              </Link>
            </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-white/[0.08] bg-black/95 backdrop-blur-xl"
          >
            <div className="px-4 py-3 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-white/[0.06] text-white'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="grid gap-2 px-3 pt-3 border-t border-white/[0.08]">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-zinc-400 hover:text-white transition-colors py-2"
                >
                  Sign In
                </Link>
                <Link
                  to="/signin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-white text-black hover:bg-white/90 transition-colors px-4 py-2 rounded-lg text-center font-medium"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 