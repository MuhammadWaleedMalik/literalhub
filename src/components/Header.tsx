import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Briefcase } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Browse Jobs', path: '/jobs', hasDropdown: true },
    { name: 'Law Firms', path: '/law-firms' },
    { name: 'Clerkship Jobs', path: '/clerkships' },
    { name: 'Patent Jobs', path: '/patent-jobs' },
    { name: 'Job Alerts', path: '/alerts' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about', hasDropdown: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 backdrop-blur-md shadow-md py-3'
        : 'bg-white py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Text */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-teal-600 p-1.5 rounded-lg group-hover:bg-teal-700 transition-colors">
              <Briefcase className="text-white h-5 w-5" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-gray-900">
              LATERAL<span className="text-teal-600">HUB</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center ${location.pathname === link.path
                  ? 'text-teal-600 bg-teal-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="ml-1 h-4 w-4 opacity-50" />}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
            >
              Log in
            </Link>
            <button className="px-5 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-sm hover:shadow-md text-sm font-semibold">
              Join for $0
            </button>
            <button className="px-5 py-2.5 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all shadow-sm hover:shadow-md text-sm font-semibold">
              Post a Job
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl py-4 flex flex-col space-y-1 px-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-3 rounded-xl text-base font-semibold ${location.pathname === link.path
                ? 'bg-teal-50 text-teal-600'
                : 'text-gray-700 hover:bg-gray-50'
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col space-y-3 mt-2 border-t border-gray-100">
            <button className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold">
              Join for $0
            </button>
            <button className="w-full py-3 bg-teal-600 text-white rounded-xl font-bold">
              Post a Job
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
