import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../context/NavigationContext';

const NavbarSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const { saveScrollPosition } = useNavigation();

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      
      // Update active section based on scroll position
      const sections = ['features', 'success-stories', 'program', 'faq'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ BRAND NEW LOGO DESIGN - MODERN FITNESS THEME
  const CoreXLogo = () => (
    <div className="flex items-center space-x-3 group cursor-pointer">
      {/* Modern Hexagon Logo */}
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-slate-900 via-gray-800 to-black rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 border border-gray-700">
          {/* CoreX Symbol */}
          <div className="relative">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
                d="M6 9l6 6 6-6M6 15l6-6 6 6"/>
            </svg>
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-slate-700 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10"></div>
      </div>
      
      {/* Brand Text */}
      <div className="flex flex-col">
        <span className="text-2xl font-black text-gray-900 group-hover:text-gray-800 transition-colors duration-300 tracking-tight">
          CORE<span className="text-gray-600">X</span>
        </span>
        <span className="text-xs font-medium text-gray-500 uppercase tracking-widest -mt-1">
          Fitness
        </span>
      </div>
    </div>
  );

  // Menu Icons with smooth transitions
  const Bars3Icon = () => (
    <svg className="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  );

  const XMarkIcon = () => (
    <svg className="w-6 h-6 transform transition-transform duration-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  );

  // Scroll to section function with smooth animation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  // ✅ BUTTON NAVIGATION FIX - Navigate to form page
  const handleStartTrial = () => {
    saveScrollPosition(window.scrollY, 'Navbar');
    navigate("/form");
  };

  // Navigation items
  const navItems = [
    { id: 'features', label: 'Features' },
    { id: 'success-stories', label: 'Success Stories' },
    { id: 'program', label: 'Program' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/98 backdrop-blur-xl border-b border-gray-200/70 shadow-2xl shadow-gray-900/10' 
        : 'bg-white/90 backdrop-blur-lg border-b border-gray-100/50'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-18">
          
          {/* ✅ BRAND NEW LOGO */}
          <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <CoreXLogo />
          </div>
          
          {/* ✅ MODERN DESKTOP MENU - DARK THEME */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`relative px-5 py-3 font-semibold transition-all duration-400 rounded-2xl group overflow-hidden ${
                  activeSection === item.id 
                    ? 'text-white bg-gray-900 shadow-lg' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Modern active indicator */}
                <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full transition-all duration-300 ${
                  activeSection === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}></div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"></div>
              </button>
            ))}
            
            {/* ✅ MODERN CTA BUTTON - PROFESSIONAL DESIGN */}
            <div className="ml-8">
              <button 
                className="relative group bg-gray-900 hover:bg-black text-white px-8 py-3.5 rounded-2xl font-bold transition-all duration-400 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-gray-800 overflow-hidden"
                onClick={handleStartTrial}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Start Free Trial</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
                
                {/* Subtle shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_ease-out] skew-x-12"></div>
              </button>
            </div>
          </div>
          
          {/* ✅ MODERN MOBILE MENU BUTTON */}
          <button 
            className={`md:hidden p-3 rounded-2xl transition-all duration-400 transform hover:scale-110 border ${
              mobileMenuOpen 
                ? 'bg-gray-900 text-white border-gray-800 rotate-180 shadow-lg' 
                : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
          </button>
        </div>
      </div>

      {/* ✅ MODERN MOBILE MENU */}
      <div className={`md:hidden overflow-hidden transition-all duration-600 ease-in-out ${
        mobileMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/98 backdrop-blur-xl border-t border-gray-200/70 shadow-2xl">
          <div className="px-6 py-8 space-y-3">
            {navItems.map((item, index) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`block w-full text-left px-6 py-4 font-semibold rounded-2xl transition-all duration-400 transform hover:scale-102 ${
                  activeSection === item.id 
                    ? 'text-white bg-gray-900 shadow-lg border-l-4 border-gray-700' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                style={{ 
                  animationDelay: mobileMenuOpen ? `${index * 80}ms` : '0ms',
                  animation: mobileMenuOpen ? 'slideInRight 0.4s ease-out forwards' : 'none'
                }}
              >
                {item.label}
              </button>
            ))}
            
            {/* ✅ MOBILE CTA */}
            <div className="pt-6 border-t border-gray-200">
              <button 
                className="w-full bg-gray-900 hover:bg-black text-white px-8 py-5 rounded-2xl font-bold transition-all duration-400 transform hover:scale-105 shadow-xl relative overflow-hidden group border border-gray-800"
                onClick={handleStartTrial}
                style={{ 
                  animationDelay: mobileMenuOpen ? `${navItems.length * 80}ms` : '0ms',
                  animation: mobileMenuOpen ? 'slideInRight 0.4s ease-out forwards' : 'none'
                }}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_ease-out] skew-x-12"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(400%) skewX(12deg); }
        }
        
        @keyframes slideInRight {
          from { 
            opacity: 0; 
            transform: translateX(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </nav>
  );
};

export default NavbarSection;
