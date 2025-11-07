import React, { useState, useEffect, useRef } from 'react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleOpenForm = () => {
    window.open('/form', '_blank');
  };

  const RocketIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
    </svg>
  );

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden"
    >
      {/* 🌟 Background gold glow */}
      <div className="absolute inset-0">
        <div className={`absolute top-5 left-5 w-64 h-64 bg-gradient-to-br from-[#C5A100]/20 to-[#FFE085]/30 rounded-full mix-blend-multiply filter blur-3xl transition-all duration-2000 ${
          isVisible ? 'animate-pulse opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
        <div className={`absolute bottom-5 right-5 w-64 h-64 bg-gradient-to-br from-[#FFE085]/20 to-[#C5A100]/30 rounded-full mix-blend-multiply filter blur-3xl transition-all duration-2000 delay-500 ${
          isVisible ? 'animate-pulse opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Header */}
        <div className={`mb-10 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          <div className={`inline-flex items-center bg-[rgba(197,161,0,0.1)] backdrop-blur-sm text-[#C5A100] px-6 py-3 rounded-full text-sm font-medium mb-6 border border-[#C5A100]/30 shadow-lg ${
            isVisible ? 'hover:scale-105' : ''
          }`}>
            <RocketIcon />
            <span className="ml-2">Your Transformation Awaits</span>
            <div className={`ml-3 w-2 h-2 bg-[#C5A100] rounded-full ${
              isVisible ? 'animate-ping' : ''
            }`}></div>
          </div>
          
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight transform transition-all duration-1200 delay-200 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ textShadow: '0 0 30px rgba(197,161,0,0.5)' }}
          >
            Ready to Transform Your Body Into{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#C5A100] to-[#FFE085] bg-clip-text text-transparent">
                Your Most Valuable Achievement?
              </span>
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C5A100] to-[#FFE085] transform origin-left transition-transform duration-1000 delay-1500 ${
                isVisible ? 'scale-x-100' : 'scale-x-0'
              }`}></div>
            </span>
          </h2>
          
          <p className={`text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1200 delay-400 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Join <span className="font-bold text-[#C5A100]">10,000+</span> professionals who've unlocked their dream physique with{' '}
            <span className="font-semibold">Prasad's CoreX system</span>.
          </p>
        </div>

        {/* ✨ Glowing Golden Button (matches FeaturesSection) */}
        <div
          className={`mb-8 transform transition-all duration-1200 delay-800 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={handleOpenForm}
            className="relative px-10 py-5 rounded-2xl font-bold uppercase tracking-wider shadow-lg flex items-center justify-center mx-auto overflow-hidden"
            style={{
              background: `linear-gradient(90deg, #C5A100 0%, #FFE085 100%)`,
              color: "#191800",
              fontFamily: "Montserrat, Bebas Neue, Anton, Oswald, sans-serif",
              animation: "pulseGlow 2.5s infinite ease-in-out",
            }}
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="none"
              stroke="#191800"
              strokeWidth={2.2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            SCHEDULE FREE CALL
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="#191800"
              strokeWidth={2.4}
              className="w-5 h-5 ml-3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 5l5 5-5 5" />
            </svg>

            {/* ✨ Shine Effect */}
            <span
              style={{
                position: "absolute",
                top: 0,
                left: "-75%",
                width: "50%",
                height: "100%",
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.25), rgba(255,255,255,0.7), rgba(255,255,255,0.25))",
                transform: "skewX(-20deg)",
                animation: "shineMove 4s infinite ease-in-out",
              }}
            />
          </button>

          {/* ✨ Button Glow Animations */}
          <style>
            {`
              @keyframes pulseGlow {
                0% { box-shadow: 0 0 15px rgba(197,161,0,0.4); }
                50% { box-shadow: 0 0 35px rgba(197,161,0,0.9); }
                100% { box-shadow: 0 0 15px rgba(197,161,0,0.4); }
              }
              @keyframes shineMove {
                0% { left: -75%; }
                60% { left: 125%; }
                100% { left: 125%; }
              }
            `}
          </style>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
