import React, { useState, useEffect, useRef } from 'react';

const FooterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [socialHovered, setSocialHovered] = useState(null);
  const sectionRef = useRef(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  // Scroll-triggered animations - Fixed to prevent shaking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            setIsVisible(true);
            setHasTriggered(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasTriggered]);

  // Enhanced StarIcon with 3D effect
  const StarIcon = () => (
    <div className="relative">
      <svg className="w-10 h-10 text-blue-500 transform transition-all duration-300 hover:scale-110 hover:rotate-12" viewBox="0 0 40 40" fill="currentColor">
        <path d="M20 4L24 12H32L26 18L28 26L20 22L12 26L14 18L8 12H16L20 4Z"/>
        <circle cx="20" cy="20" r="3" fill="white"/>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
    </div>
  );

  // Social Media Icons with enhanced styling
  const WhatsAppIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M16.8 3.2C15.1 1.5 12.9.6 10.5.6 4.8.6.2 5.2.2 10.9c0 1.8.5 3.6 1.3 5.1L.1 19.4l3.5-1.3c1.5.8 3.1 1.2 4.8 1.2 5.7 0 10.3-4.6 10.3-10.3.1-2.8-1-5.4-2.9-7.3zM10.5 17.6c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1 1.2 1.2-2.9-.2-.3c-.8-1.3-1.3-2.8-1.3-4.4 0-4.6 3.7-8.3 8.3-8.3 2.2 0 4.3.9 5.8 2.4 1.5 1.5 2.4 3.6 2.4 5.8-.1 4.6-3.8 8.3-8.3 8.3zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.7.8-.8 1-.1.2-.2.2-.4.1-.2-.1-.9-.3-1.7-1.1-.6-.6-1.1-1.3-1.2-1.5-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.4.1-.1.1-.2.2-.4 0-.2 0-.3-.1-.4-.1-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.4.5.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z"/>
    </svg>
  );

  const TwitterIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
    </svg>
  );

  const FacebookIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.246.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.167 3.631 2.186 5.65 5.817 5.817C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c3.631-.167 5.65-2.186 5.817-5.817C19.988 13.056 20 12.716 20 10s-.012-3.056-.06-4.123C19.833 2.246 17.814.227 14.183.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd"/>
    </svg>
  );

  // Enhanced footer data with CoreX branding
  const footerSections = [
    {
      title: "CoreX Program",
      links: ["Personal Coaching", "Transformation Plans", "Success Stories", "Community Access"]
    },
    {
      title: "Support", 
      links: ["Help Center", "Contact Renu", "WhatsApp Support", "Video Tutorials"]
    },
    {
      title: "Company",
      links: ["About Renu Prasad", "Terms & Conditions", "Privacy Policy", "Refund Policy"]
    }
  ];

  const socialLinks = [
    { icon: WhatsAppIcon, color: "hover:bg-green-500", name: "WhatsApp" },
    { icon: TwitterIcon, color: "hover:bg-blue-400", name: "Twitter" },
    { icon: FacebookIcon, color: "hover:bg-blue-600", name: "Facebook" },
    { icon: InstagramIcon, color: "hover:bg-pink-500", name: "Instagram" }
  ];

  return (
    <footer 
      ref={sectionRef}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden"
    >
      {/* 3D Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl transition-all duration-2000 ${
          isVisible ? 'animate-pulse opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
        <div className={`absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-600/10 to-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl transition-all duration-2000 delay-500 ${
          isVisible ? 'animate-pulse opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
        
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(90deg,theme(colors.white)_1px,transparent_1px),linear-gradient(theme(colors.white)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Footer Content */}
        <div className={`grid md:grid-cols-4 gap-8 mb-12 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          
          {/* Brand Section */}
          <div className="transform transition-all duration-1200 delay-200 ease-out">
            <div className="flex items-center mb-6 group cursor-pointer">
              <StarIcon />
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                CoreX by Renu
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Transform your body with Renu Prasad's proven CoreX system. Personal coaching that delivers real results for busy professionals.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center hover:text-white transition-colors cursor-pointer">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                support@corex.fitness
              </div>
              <div className="flex items-center hover:text-white transition-colors cursor-pointer">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +91 98765 43210
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-1200 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200 + 400}ms` }}
            >
              <h4 className="font-bold text-lg mb-6 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button className="text-sm text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-left group">
                      <span className="border-b border-transparent group-hover:border-blue-400 transition-all duration-300">
                        {link}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className={`border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center transform transition-all duration-1200 delay-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
            <p className="text-gray-400 text-sm">© 2025 CoreX by Renu Prasad. All Rights Reserved.</p>
            
            {/* Additional Links */}
            <div className="flex space-x-6 text-xs text-gray-500">
              <button className="hover:text-white transition-colors">Terms</button>
              <button className="hover:text-white transition-colors">Privacy</button>
              <button className="hover:text-white transition-colors">Cookies</button>
            </div>
          </div>

          {/* Enhanced Social Media Icons */}
          <div className="flex space-x-3">
            {socialLinks.map((social, index) => (
              <div 
                key={index}
                className={`relative w-10 h-10 bg-gray-800 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl group`}
                onMouseEnter={() => setSocialHovered(index)}
                onMouseLeave={() => setSocialHovered(null)}
              >
                <social.icon />
                
                {/* Tooltip */}
                <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded transition-all duration-300 ${
                  socialHovered === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  {social.name}
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Badge */}
     
      </div>
    </footer>
  );
};

export default FooterSection;
