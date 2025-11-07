import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ProgramSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState([false, false, false, false]);
  const [activePhase, setActivePhase] = useState(0);
  const sectionRef = useRef(null);
  const [hasTriggered, setHasTriggered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            setIsVisible(true);
            setHasTriggered(true);

            setTimeout(() => setTimelineVisible([true, false, false, false]), 400);
            setTimeout(() => setTimelineVisible([true, true, false, false]), 800);
            setTimeout(() => setTimelineVisible([true, true, true, false]), 1200);
            setTimeout(() => setTimelineVisible([true, true, true, true]), 1600);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px 50px 0px'
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActivePhase(prev => (prev + 1) % 4);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const handleBeginTransformation = () => {
    window.open('/form', '_blank');
  };

  const RocketIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="#C5A100" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-4 h-4" fill="#C5A100" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  );

  const ArrowIcon = () => (
    <svg
      viewBox="0 0 20 20"
      fill="#C5A100"
      className="w-5 h-5 ml-2 transition-all duration-250 group-hover:translate-x-1"
    >
      <path
        clipRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        fillRule="evenodd"
      />
    </svg>
  );

  const phases = [
    {
      weeks: "1-4",
      title: "Body Assessment & Analysis",
      subtitle: "Focus on Creating Healthy Habits",
      description: "Strategic Nutrition Planning and tracking your baseline.",
      results: [
        "Focus on creating healthy habits",
        "Strategic Nutrition Planning",
        "You can expect results in weight and body measurements"
      ],
      tags: ["Assessment", "Weeks 1-4"],
      side: "left",
      color: "from-[#C5A100] to-[#FFE085]",
      image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      weeks: "5-8",
      title: "Progress & Adaptation",
      subtitle: "Building Momentum and Strength",
      description: "Enhancing performance and consistency day by day.",
      results: [
        "Building Momentum and Strength",
        "Enhancing Performance and Consistency",
        "You can see the visible changes in mirror"
      ],
      tags: ["Progress", "Weeks 5-8"],
      side: "right",
      color: "from-[#C5A100] to-[#FFE085]",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      weeks: "9-12",
      title: "Peak Performance & Results",
      subtitle: "Maximizing Results and Performance",
      description: "Leveraging progressive overload for bigger changes.",
      results: [
        "Maximizing Results and Performance",
        "Can notice bigger changes on the progressive overloading"
      ],
      tags: ["Peak", "Weeks 9-12"],
      side: "left",
      color: "from-[#C5A100] to-[#FFE085]",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      weeks: "13-16",
      title: "Sustaining the Success",
      subtitle: "Healthy Routines and Lifestyle Integration",
      description: "Your nutrition and workouts are fully integrated. Comparing tracked data for progress.",
      results: [
        "Healthy routines, workouts, and nutrition plans you’ve followed are now fully integrated into your lifestyle.",
        "Comparing the data tracked from week 1 to week 16",
        "Learned practically about how your body works and responds"
      ],
      tags: ["Sustain", "Weeks 13-16"],
      side: "right",
      color: "from-[#C5A100] to-[#FFE085]",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-black text-white relative overflow-hidden"
    >
      {/* Minimal gold floating elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-1 h-1 bg-[#C5A100] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-0.5 h-0.5 bg-[#FFE085] rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-40 w-1 h-1 bg-[#C5A100] rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 right-20 w-0.5 h-0.5 bg-[#FFE085] rounded-full animate-ping"></div>
        <div className="absolute top-1/3 left-1/4 w-0.5 h-0.5 bg-[#C5A100] rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-[#FFE085] rounded-full animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          <div className={`inline-flex items-center bg-[#C5A100]/20 text-[#C5A100] px-6 py-3 rounded-full text-sm font-medium mb-6 border-2 border-[#C5A100]/30 backdrop-blur-sm shadow-lg transition-all duration-300 ${
            isVisible ? 'hover:scale-105' : ''
          }`}>
            <RocketIcon />
            <span className="ml-2">Your CoreX Transformation Journey</span>
            <div className={`ml-3 w-2 h-2 bg-[#C5A100] rounded-full transition-all duration-300 ${
              isVisible ? 'animate-ping' : ''
            }`}></div>
          </div>

          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight transform transition-all duration-1200 delay-200 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ textShadow: '0 0 30px rgba(197,161,0,0.5)' }}
          >
            Your{' '}
            <span className="bg-gradient-to-r from-[#C5A100] to-[#FFE085] bg-clip-text text-transparent">
              120-Day CoreX Adventure
            </span>
          </h2>

          <p className={`text-lg md:text-xl text-gray-300 max-w-4xl mx-auto transform transition-all duration-1200 delay-400 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Follow  Prasad's proven 4-phase system that has transformed thousands of professionals. 
            See exactly what you'll achieve in each phase.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#C5A100] to-[#FFE085] transition-all duration-2000 ${
            isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'
          }`}></div>
          
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <div key={index} className="relative flex items-center">
                {phase.side === "left" ? (
                  <>
                    <div className={`flex-1 pr-8 text-right transform transition-all duration-1000 ease-out ${
                      timelineVisible[index] ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200 + 600}ms` }}>
                      <div className={`bg-white rounded-2xl p-6 shadow-2xl cursor-pointer transition-all duration-300 border-2 backdrop-blur-sm relative overflow-hidden ${
                        activePhase === index ? 'border-[#C5A100]' : 'border-gray-200/50'
                      }`}
                      onClick={() => setActivePhase(index)}>

                        <div className={`absolute inset-0 bg-gradient-to-br from-[#C5A100]/5 to-[#FFE085]/5 transition-opacity duration-300 ${
                          activePhase === index ? 'opacity-100' : 'opacity-0'
                        }`}></div>

                        <div className="relative">
                          <h3 className="text-2xl font-bold mb-2 text-gray-900">{phase.title}</h3>
                          <h4 className="text-lg font-semibold text-[#C5A100] mb-3">{phase.subtitle}</h4>
                          <p className="text-gray-600 mb-4">{phase.description}</p>
                          
                          <div className="space-y-2 mb-4">
                            {phase.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="flex items-center justify-end space-x-2">
                                <span className="text-sm text-gray-700">{result}</span>
                                <div className="w-4 h-4 bg-[#C5A100] rounded-full flex items-center justify-center">
                                  <CheckIcon />
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="flex justify-end space-x-2">
                            {phase.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="bg-[#C5A100]/20 text-[#C5A100] px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center text-white font-bold text-sm z-10 shadow-2xl border-4 border-white transition-all duration-500 ${
                      activePhase === index ? 'scale-125 animate-pulse' : ''
                    }`}>
                      {phase.weeks}
                    </div>

                    <div className={`flex-1 pl-8 transform transition-all duration-1000 ease-out ${
                      timelineVisible[index] ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200 + 800}ms` }}>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                          src={phase.image} 
                          alt={phase.title}
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-lg font-bold">{phase.title}</div>
                          <div className="text-sm opacity-90">Weeks {phase.weeks}</div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`flex-1 pr-8 transform transition-all duration-1000 ease-out ${
                      timelineVisible[index] ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200 + 800}ms` }}>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                          src={phase.image} 
                          alt={phase.title}
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 right-4 text-white text-right">
                          <div className="text-lg font-bold">{phase.title}</div>
                          <div className="text-sm opacity-90">Weeks {phase.weeks}</div>
                        </div>
                      </div>
                    </div>

                    <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center text-white font-bold text-sm z-10 shadow-2xl border-4 border-white transition-all duration-500 ${
                      activePhase === index ? 'scale-125 animate-pulse' : ''
                    }`}>
                      {phase.weeks}
                    </div>

                    <div className={`flex-1 pl-8 transform transition-all duration-1000 ease-out ${
                      timelineVisible[index] ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200 + 600}ms` }}>
                      <div className={`bg-white rounded-2xl p-6 shadow-2xl cursor-pointer transition-all duration-300 border-2 backdrop-blur-sm relative overflow-hidden ${
                        activePhase === index ? 'border-[#C5A100]' : 'border-gray-200/50'
                      }`}
                      onClick={() => setActivePhase(index)}>
                        
                        <div className={`absolute inset-0 bg-gradient-to-br from-[#C5A100]/5 to-[#FFE085]/5 transition-opacity duration-300 ${
                          activePhase === index ? 'opacity-100' : 'opacity-0'
                        }`}></div>

                        <div className="relative">
                          <h3 className="text-2xl font-bold mb-2 text-gray-900">{phase.title}</h3>
                          <h4 className="text-lg font-semibold text-[#C5A100] mb-3">{phase.subtitle}</h4>
                          <p className="text-gray-600 mb-4">{phase.description}</p>
                          
                          <div className="space-y-2 mb-4">
                            {phase.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="flex items-center space-x-2">
                                <div className="w-4 h-4 bg-[#C5A100] rounded-full flex items-center justify-center">
                                  <CheckIcon />
                                </div>
                                <span className="text-sm text-gray-700">{result}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex space-x-2">
                            {phase.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="bg-[#C5A100]/20 text-[#C5A100] px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section with glowing button like HeroSection */}
        <div className={`text-center transform transition-all duration-1200 delay-1600 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-[#C5A100]/20 to-[#FFE085]/20 rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-[#C5A100]/30 backdrop-blur-sm relative overflow-hidden">
            
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="CoreX Community"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#5A4A00]/80 to-[#7F6611]/80"></div>
            </div>

            <div className="relative z-10">
              <h4 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ textShadow: '0 0 30px rgba(197,161,0,0.5)' }}
              >
                Ready to Start Your{' '}
                <span className="bg-gradient-to-r from-[#C5A100] to-[#FFE085] bg-clip-text text-transparent">CoreX Adventure?</span>
              </h4>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Join thousands who've completed their transformation journey with  Prasad. 
                Your dream physique is just 120 days away!
              </p>
              
              <button 
                type="button"
                onClick={handleBeginTransformation}
                className="relative font-bold px-10 py-5 rounded-2xl flex items-center justify-center text-lg shadow-lg transition uppercase tracking-wider overflow-hidden"
                style={{
                  background: `linear-gradient(90deg, #C5A100 0%, #FFE085 100%)`,
                  color: "#191800",
                  fontFamily: "Montserrat, Bebas Neue, Anton, Oswald, sans-serif",
                  boxShadow: "0 0 25px rgba(197,161,0,0.7)",
                  animation: "pulseGlow 2.5s infinite ease-in-out",
                    marginLeft: "300px"   // ✅ add this

                }}
              >
                BEGIN YOUR COREX TRANSFORMATION
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="#191800"
                  strokeWidth={2.4}
                  className="w-5 h-5 ml-3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 5l5 5-5 5" />
                </svg>

                {/* Shine effect */}
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-75%",
                    width: "50%",
                    height: "100%",
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0.2), rgba(255,255,255,0.6), rgba(255,255,255,0.2))",
                    transform: "skewX(-20deg)",
                    animation: "shineMove 4s infinite ease-in-out",
                  }}
                />
              </button>

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
        </div>

      </div>
    </section>
  );
};

export default ProgramSection;
