import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

const VideoHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [showMoreCerts, setShowMoreCerts] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Branding variables
  const gold = "#C5A100";
  const goldLight = "#FFE085";
  const white = "#fff";
  const headingFont = "Montserrat, Bebas Neue, Anton, Oswald, sans-serif";
  const bodyFont = "Roboto, Open Sans, Arial, sans-serif";

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
      { threshold: 0.2, rootMargin: '0px 0px 20px 0px' }
    );
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, [hasTriggered]);

  // Icons
  const DumbbellIcon = () => (
    <svg className="w-6 h-6" fill={gold} viewBox="0 0 24 24">
      <path d="M20.57 14.86L22 13.43 20.57 12 17 8.43 15.57 9.86 8.43 2.72 7 4.15 11.57 8.72 4.43 15.86 2 13.43 4.43 15.86 7 18.43 8.43 17 15.57 9.86 17 11.29 20.57 14.86z"/>
    </svg>
  );
  const FireIcon = () => (
    <svg className="w-6 h-6" fill={gold} viewBox="0 0 24 24">
      <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z"/>
    </svg>
  );
  const HeartIcon = () => (
    <svg className="w-6 h-6" fill={gold} viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );
  const PlayButtonIcon = () => (
    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
    </svg>
  );
  const ArrowIcon = ({color = gold}) => (
    <svg
      viewBox="0 0 20 20"
      fill={color}
      className="w-5 h-5 ml-2 transition-all duration-250 group-hover:translate-x-1"
    >
      <path
        clipRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        fillRule="evenodd"
      />
    </svg>
  );

  // Handlers
  const handleVideoClick = () => setIsPlaying(true);
  const handleTransformationClick = () => window.open('/form', '_blank');
  const goToBMI = () => window.open('/bmi', '_blank');

  // Certificates data
  const certificates = [
    { name: "Advanced Supplementation", year: "2024", image: "/certificates/supplementation-expert.jpg" },
    { name: "Special Population Trainer", year: "2024", image: "/certificates/special-population.jpg" },
    { name: "Peak Week Specialist", year: "2024", image: "/certificates/peak-week-specialist.jpg" },
    { name: "Exercise & Nutrition Diploma", year: "2024", image: "/certificates/diploma.jpg" },
    { name: "Advanced Physique Transformation Master Trainer Level 1", year: "2023", image: "/certificates/Advanced Physique Transformation Master Trainer Level 1.jpg" },
    { name: "Advanced Physique Transformation Master Trainer Level 2", year: "2023", image: "/certificates/Advanced Physique Transformation Master Trainer Level 2.jpg" },
    { name: "Advanced Physique Transformation Master Trainer Level 3", year: "2023", image: "/certificates/Advanced Physique Transformation Master Trainer Level 3.jpg" },
    { name: "Advanced Bodybuilding Hypertrophy Practical Certificate Level 1 & 2", year: "2023", image: "/certificates/Advanced Bodybuilding Hypertrophy Practical Certificate Level 1 & 2.jpg" }
    
  ];
  const firstFourCerts = certificates.slice(0, 4);
  const remainingCerts = certificates.slice(4);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "#000",
        fontFamily: bodyFont,
        color: white,
      }}
    >
      {/* Minimal Gold Floating Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-0.5 h-0.5 bg-yellow-400 rounded-full animate-ping" />
        <div className="absolute bottom-40 left-40 w-1 h-1 bg-yellow-300 rounded-full animate-pulse" />
        <div className="absolute bottom-60 right-20 w-0.5 h-0.5 bg-yellow-300 rounded-full animate-ping" />
        <div className="absolute top-1/3 left-1/4 w-0.5 h-0.5 bg-yellow-400 rounded-full animate-pulse" />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping" />
      </div>
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 text-yellow-400"><DumbbellIcon /></div>
        <div className="absolute top-32 right-24 text-yellow-400"><FireIcon /></div>
        <div className="absolute bottom-32 left-32 text-yellow-400"><DumbbellIcon /></div>
        <div className="absolute bottom-40 right-40 text-yellow-400"><HeartIcon /></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-16">
        {/* Main Heading */}
        <h1
          className={`font-black leading-tight mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontFamily: headingFont,
            textShadow: '0 0 40px rgba(197,161,0,0.7)',
          }}
        >
          <div className="mb-4 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            MEET YOUR
          </div>
          <div
            className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent font-black text-4xl md:text-6xl lg:text-7xl tracking-tight"
            style={{ WebkitBackgroundClip: 'text' }}
          >
            TRANSFORMATION COACH
          </div>
        </h1>
        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 transition-all duration-1000 delay-300 font-medium ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontFamily: bodyFont }}
        >
          From struggle to success: Prasad's transformation story motivates hundreds of people to achieve their fitness goals.
        </p>

        {/* Trainer Profile */}
        <div className={`max-w-xl mx-auto mb-8 transform transition-all duration-1000 delay-600 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`} style={{ fontFamily: bodyFont }}>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-yellow-400/20 transition-all duration-500 text-center hover:border-yellow-400/40">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                alt="Prasad" 
                className="w-16 h-16 rounded-full border-3 border-yellow-400 shadow-lg"
              />
              <div className="text-left">
                <h3 className="font-bold text-xl text-white">Prasad</h3>
                <p className="text-yellow-400 text-sm font-medium">Head Transformation Coach</p>
                <p className="text-gray-400 text-sm">South India Power Lifter 2023🥉</p>
                <p className="text-gray-400 text-sm">I Compete Natural TXN 2024🏅</p>
                <p className="text-gray-400 text-sm">5+ Years Experience</p>
              </div>
            </div>
            <div className="bg-gray-700/30 rounded-xl p-4 border border-yellow-400/10">
              <p className="text-gray-300 italic text-sm leading-relaxed">
                "With consistency and flexible dieting, I lost 49 kg in 12 months, averaging 1 kg per week."
              </p>
            </div>
          </div>
        </div>
        {/* Video Section */}
        <div className={`relative max-w-xl mx-auto mb-8 transform transition-all duration-1000 delay-800 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-500/10 to-yellow-300/10 p-1.5 transition-all duration-700 border border-yellow-400/20 backdrop-blur-sm hover:scale-105">
            <div className="bg-gray-800/90 rounded-xl overflow-hidden backdrop-blur-sm">
              {!isPlaying ? (
                <div 
                  className="relative h-48 md:h-56 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center cursor-pointer group overflow-hidden"
                  onClick={handleVideoClick}
                >
                  <div className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                      alt="Renu Prasad Video" 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  <div className="relative z-10 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full p-4 transition-all duration-500 shadow-2xl group-hover:scale-110 hover:rotate-12">
                    <PlayButtonIcon />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-sm border border-yellow-400/20">
                    2:45
                  </div>
                </div>
              ) : (
                <div className="h-48 md:h-56">
                  <video 
                    className="w-full h-full object-cover rounded-xl" 
                    controls 
                    autoPlay
                    poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
                  >
                    <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                    <p className="text-white">Your browser doesn't support HTML video.</p>
                  </video>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className={`max-w-2xl mx-auto mb-8 transform transition-all duration-1000 delay-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="grid grid-cols-4 gap-3">
            {[
              { number: "16", label: "Slots", color: "text-yellow-400", icon: "🎯" },
              { number: "77+", label: "Students", color: "text-yellow-400", icon: "👥" },
              { number: "87%", label: "Success", color: "text-green-400", icon: "✅" },
              { number: "4.3/5", label: "Rating", color: "text-yellow-400", icon: "⭐" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-4 backdrop-blur-sm border border-yellow-400/20 transition-all duration-700 transform translate-y-0 opacity-100 hover:border-yellow-400/40 hover:scale-105"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Certificates */}
        <div className={`max-w-5xl mx-auto mb-8 transform transition-all duration-1000 delay-1200 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: headingFont }}>Professional Certifications</h3>
            <p className="text-gray-400 text-sm" style={{ fontFamily: bodyFont }}>Team Boss Fitness Academy Certified</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {firstFourCerts.map((cert, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-4 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300"
              >
                <div className="relative mb-4">
                  <div className="w-full h-32 bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
                    <img 
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=300&q=80";
                      }}
                    />
                  </div>
                  
                </div>
                <div className="text-center">
                  <h4 className="text-white text-sm font-bold mb-1 leading-tight" style={{ fontFamily: bodyFont }}>{cert.name}</h4>
                </div>
              </div>
            ))}
          </div>
          {/* More certs */}
          {showMoreCerts && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {remainingCerts.map((cert, index) => (
                <div 
                  key={index + 4}
                  className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-4 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300"
                >
                  <div className="relative mb-4">
                    <div className="w-full h-32 bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
                      <img 
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-contain p-1"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80";
                        }}
                      />
                    </div>
                    
                  </div>
                  <div className="text-center">
                    <h4 className="text-white text-sm font-bold mb-1 leading-tight" style={{ fontFamily: bodyFont }}>{cert.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="text-center">
            <button 
              onClick={() => setShowMoreCerts(!showMoreCerts)}
              className="bg-gradient-to-r from-yellow-500/20 to-yellow-300/20 border-2 border-yellow-400/40 text-yellow-400 px-8 py-3 rounded-2xl font-bold hover:border-yellow-400 hover:bg-yellow-500/10 transition-all duration-300 text-sm"
              style={{ fontFamily: bodyFont }}
            >
              {showMoreCerts ? (
                <>
                  <span>Show Less Certifications</span>
                  <svg className="w-5 h-5 ml-2 inline rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </>
              ) : (
                <>
                  <span>Show More Certifications</span>
                  <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>

        {/* PERFECTLY ALIGNED CTA BUTTONS */}
       {/* CTA Buttons - Stacked Vertically */}
<div
  className={`mb-6 flex flex-col items-center justify-center gap-6 transition-all duration-1000 delay-1400 ease-out ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
  }`}
>
  {/* Glowing CTA */}
  <button
    className="font-bold px-10 py-5 rounded-2xl flex items-center justify-center text-lg shadow-lg transition uppercase tracking-wider relative overflow-hidden mb-2"
    style={{
      background: `linear-gradient(90deg, #C5A100 0%, #FFE085 100%)`,
      color: "#191800",
      fontFamily: headingFont,
      boxShadow: "0 0 25px rgba(197,161,0,0.7)",
      animation: "pulseGlow 2.5s infinite ease-in-out",
      minWidth: "300px"
    }}
    onClick={handleTransformationClick}
  >
    ACHIEVE YOUR TRANSFORMATION NOW
    <ArrowIcon color="#191800" />
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
  {/* BMI Button */}
  <button 
    type="button"
    onClick={goToBMI}
    className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-10 py-5 rounded-2xl font-semibold text-base border-2 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/20 flex items-center justify-center min-w-[300px]"
    style={{ fontFamily: bodyFont }}
  >
    📊 Check Your BMI for FREE
  </button>
</div>

        
       
      </div>
    </section>
  );
};

export default VideoHeroSection;
