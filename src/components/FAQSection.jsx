import React, { useState, useEffect, useRef } from 'react';

 const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [faqsVisible, setFaqsVisible] = useState([]);
  const sectionRef = useRef(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            setIsVisible(true);
            setHasTriggered(true);

            setTimeout(() => setFaqsVisible([true]), 300);
            setTimeout(() => setFaqsVisible([true, true]), 500);
            setTimeout(() => setFaqsVisible([true, true, true]), 700);
            setTimeout(() => setFaqsVisible([true, true, true, true]), 900);
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

  const handleChatWithTeam = () => {
    window.open('/form', '_blank');
  };

  const handleScheduleCall = () => {
    window.open('/form', '_blank');
  };

  const ChevronDownIcon = ({ isOpen }) => (
    <svg 
      className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
    </svg>
  );

  const QuestionMarkIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  );

  const ExternalLinkIcon = () => (
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
    </svg>
  );

  const ArrowIcon = () => (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 ml-2 transition-all duration-250 group-hover:translate-x-1"
    >
      <path
        clipRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        fillRule="evenodd"
      />
    </svg>
  );

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "Do I need any equipment or gym membership?",
      answer: "No! CoreX workouts are designed for busy professionals. You can do them at home with just your body weight, or use basic equipment like dumbbells if you have them. Renu provides equipment-free alternatives for every exercise."
    },
    {
      question: "How much time do I need to commit daily?",
      answer: "Just 20-30 minutes per day, 4-5 times per week. Renu's CoreX system is designed to fit into your busy schedule. You can even break it into 10-minute sessions if needed."
    },
    {
      question: "What if I've failed with other fitness programs?",
      answer: "That's exactly why Renu created CoreX! Traditional programs fail because they're boring and lack personal guidance. Our system provides personal coaching, community support, and accountability. Plus, we offer a 90-day money-back guarantee."
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Absolutely! CoreX adapts to your fitness level. Beginners start with foundational exercises and gradually progress. We have modifications for every exercise and Renu is available for personal guidance and support."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className="py-16 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className={`absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-[#C5A100]/15 to-[#FFE085]/15 rounded-full mix-blend-multiply filter blur-3xl transition-all duration-2000 ${
          isVisible ? 'animate-pulse opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
        <div className={`absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-[#FFE085]/15 to-[#C5A100]/15 rounded-full mix-blend-multiply filter blur-3xl transition-all duration-2000 delay-500 ${
          isVisible ? 'animate-pulse opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(90deg,rgba(197,161,0,0.6)_1px,transparent_1px),linear-gradient(rgba(197,161,0,0.6)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          <div className={`inline-flex items-center bg-[#C5A100]/20 text-[#C5A100] px-6 py-3 rounded-full text-sm font-medium mb-6 border-2 border-[#C5A100]/30 backdrop-blur-sm shadow-lg transition-all duration-300 ${
            isVisible ? 'hover:scale-105' : ''
          }`}>
            <QuestionMarkIcon />
            <span className="ml-2">Got Questions? We've Got Answers</span>
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
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#C5A100] to-[#FFE085] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto transform transition-all duration-1200 delay-400 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Everything you need to know about CoreX, answered by Renu Prasad and real transformation success stories.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`transform transition-all duration-700 ease-out ${
                faqsVisible[index] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150 + 600}ms` }}
            >
              <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden border-2 transition-all duration-500 hover:shadow-[#C5A100]/25 backdrop-blur-sm relative group ${
                openFAQ === index 
                  ? 'border-[#C5A100] shadow-[#C5A100]/25' 
                  : 'border-gray-200 hover:border-[#C5A100]/70'
              }`}>
                
                <div className={`absolute inset-0 bg-gradient-to-br from-[#C5A100]/5 to-[#FFE085]/5 transition-opacity duration-300 ${
                  openFAQ === index ? 'opacity-100' : 'opacity-0'
                }`}></div>

                <button
                  className="relative w-full p-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-[#C5A100]/50 hover:to-[#FFE085]/50 transition-all duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className={`text-lg font-bold transition-colors duration-300 pr-4 ${
                    openFAQ === index ? 'text-[#C5A100]' : 'text-gray-900 group-hover:text-[#C5A100]'
                  }`}>
                    {faq.question}
                  </h3>
                  
                  <div className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${
                    openFAQ === index 
                      ? 'bg-[#C5A100] text-white' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-[#C5A100]/30 group-hover:text-[#C5A100]'
                  }`}>
                    <ChevronDownIcon isOpen={openFAQ === index} />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 pt-2">
                    <div className="h-px bg-gradient-to-r from-[#C5A100]/40 to-[#FFE085]/40 mb-4"></div>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#C5A100] to-[#FFE085] opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 ${
                  openFAQ === index ? 'opacity-10' : ''
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1200 delay-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-[#C5A100]/20 to-[#FFE085]/20 rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-[#C5A100]/30 backdrop-blur-sm">
            <h3 
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ textShadow: '0 0 30px rgba(197,161,0,0.5)' }}
            >
              Still Have Questions About{' '}
              <span className="bg-gradient-to-r from-[#C5A100] to-[#FFE085] bg-clip-text text-transparent">CoreX?</span>
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Get personalized answers from Renu Prasad and our support team. 
              We're here to help you succeed in your transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                type="button"
                onClick={handleChatWithTeam}
                className="relative font-bold px-10 py-5 rounded-2xl flex items-center justify-center text-lg shadow-lg transition uppercase tracking-wider overflow-hidden"
                style={{
                  background: `linear-gradient(90deg, #C5A100 0%, #FFE085 100%)`,
                  color: "#191800",
                  fontFamily: "Montserrat, Bebas Neue, Anton, Oswald, sans-serif",
                  boxShadow: "0 0 25px rgba(197,161,0,0.7)",
                  animation: "pulseGlow 2.5s infinite ease-in-out",
                }}
              >
                CHAT WITH CoreX TEAM
                <ArrowIcon />
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

              
            </div>
          </div>
        </div>

      </div>

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
    </section>
  );

};
export default FAQSection;