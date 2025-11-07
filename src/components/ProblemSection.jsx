import React, { useState, useEffect, useRef } from 'react';

const ProblemSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([false, false, false]);
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef(null);

  // Colors and fonts
  const gold = "#C5A100";
  const goldLight = "#FFE085";
  const headingFont = "Montserrat, Bebas Neue, Anton, Oswald, sans-serif";
  const bodyFont = "Roboto, Open Sans, Arial, sans-serif";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            setIsVisible(true);
            setHasTriggered(true);
            setTimeout(() => setCardsVisible([true, false, false]), 300);
            setTimeout(() => setCardsVisible([true, true, false]), 600);
            setTimeout(() => setCardsVisible([true, true, true]), 900);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px 50px 0px'
      }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, [hasTriggered]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const WarningIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z"/>
    </svg>
  );

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-black text-white relative overflow-hidden"
      style={{ fontFamily: bodyFont }}
    >
      {/* Gold/Yellow Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full mix-blend-multiply filter blur-3xl transition-all duration-2000 ${
          isVisible ? 'animate-pulse opacity-100 scale-100' : 'opacity-0 scale-50'
        }`} />
        <div className={`absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-yellow-300/20 to-yellow-500/20 rounded-full mix-blend-multiply filter blur-3xl transition-all duration-2000 delay-500 ${
          isVisible ? 'animate-pulse opacity-100 scale-100' : 'opacity-0 scale-50'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          <div className={`inline-flex items-center bg-yellow-500/20 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-yellow-400/30 backdrop-blur-sm shadow-lg transition-all duration-300 ${
            isVisible ? 'hover:scale-105' : ''
          }`}>
            <div className="mr-2">
              <WarningIcon />
            </div>
            The Fitness Frustration
            <div className={`ml-3 w-2 h-2 bg-yellow-400 rounded-full transition-all duration-300 ${
              isVisible ? 'animate-ping' : ''
            }`} />
          </div>

          {/* Main Heading - Larger, Two Lines */}
          <h2 
            className={`font-bold text-white mb-6 leading-tight flex flex-col items-center justify-center transform transition-all duration-1200 delay-200 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{
              fontFamily: headingFont,
              textAlign: 'center',
              textShadow: '0 0 30px rgba(197,161,0,0.5)',
            }}
          >
            <span className="text-5xl md:text-6xl lg:text-[3.8rem] font-extrabold mb-2">
              How Often Have You Tried To Reach
            </span>
            <span className="text-5xl md:text-6xl lg:text-[3.8rem] font-extrabold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-2">
              Your Fitness Goals
            </span>
          </h2>
        </div>

        {/* Split Layout Section */}
        <div className={`mb-16 transition-all duration-1000 delay-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-6">
              {/* Subheading - Smaller, Two Lines */}
              <h3 
                className="font-bold text-white leading-tight flex flex-col items-center justify-center"
                style={{
                  fontFamily: headingFont,
                  textAlign: 'center',
                  textShadow: '0 0 30px rgba(197,161,0,0.5)',
                }}
              >
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1" style={{
      marginRight: '5.5rem', // <-- Move left
    }}>
                  LET'S BE HONEST — DOES
                </span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-1" style={{
      marginRight: '6.5rem', // <-- Move left
    }}>
                  THIS SOUND FAMILIAR?
                </span>
              </h3>
              <div className="text-white text-xl md:text-2xl font-bold mb-6 leading-relaxed">
                The reason most people fail. They follow generic plans that don’t fit their life.
              </div>
              <div className="space-y-4 text-gray-300 text-base md:text-lg">
                <p className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1 text-xl font-bold">→</span>
                  <span>Are your workouts feeling boring or repetitive?</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1 text-xl font-bold">→</span>
                  <span>Finding it hard to keep your fitness goals on track?</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1 text-xl font-bold">→</span>
                  <span>Struggling to keep your motivation alive?</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1 text-xl font-bold">→</span>
                  <span>Are high prices stopping you from reaching your fitness goals?</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1 text-xl font-bold">→</span>
                  <span>Is it difficult to select a program that matches your lifestyle and goals?</span>
                </p>
              </div>

              {/* Glowing Gold CTA Button */}
              <div className="pt-6 flex flex-col items-center">
                <button
                  className="font-bold px-10 py-5 rounded-2xl flex items-center justify-center text-lg shadow-lg transition uppercase tracking-wider relative overflow-hidden"
                  style={{
                    background: `linear-gradient(90deg, #C5A100 0%, #FFE085 100%)`,
                    color: "#191800",
                    fontFamily: headingFont,
                    boxShadow: "0 0 25px rgba(197,161,0,0.7)",
                    animation: "pulseGlow 2.5s infinite ease-in-out",
                    minWidth: "300px",
                  }}
                >
                  START TRANSFORMATION TODAY
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "-75%",
                      width: "50%",
                      height: "100%",
                      background: "linear-gradient(120deg, rgba(255,255,255,0.2), rgba(255,255,255,0.6), rgba(255,255,255,0.2))",
                      transform: "skewX(-20deg)",
                      animation: "shineMove 4s infinite ease-in-out",
                    }}
                  />
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
                </button>
              </div>
            </div>
            {/* Right Side - Image */}
            <div className="relative lg:order-last order-first">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-yellow-500/30 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Fitness Trainer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
        {/* Transition Section */}
        <div className={`text-center transition-all duration-1000 delay-1600 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600 shadow-xl">
            <h4 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{
                fontFamily: headingFont,
                textShadow: '0 0 30px rgba(197,161,0,0.5)'
              }}
            >
              What if your transformation could be{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">easier?</span>
            </h4>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              What if fitness didn't have to be boring, expensive, or time-consuming? 
              What if you could actually enjoy working out and see real results?
            </p>
            <div className="inline-flex items-center text-yellow-400 font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer">
              <svg className="w-5 h-5 mr-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
              Discover the solution below
            </div>
          </div>
        </div>
      </div>
      {/* Custom CSS */}
      <style>{`
        @keyframes animate-in {
          from { opacity: 0; transform: translateY(20px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-in {
          animation: animate-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;
