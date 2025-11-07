
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [memberCount, setMemberCount] = useState(10000);
  const [progressPercent, setProgressPercent] = useState(0);
  const [countdown, setCountdown] = useState({ hours: 71, minutes: 42, seconds: 18 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);


  // Animated counter for member count
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setMemberCount(prev => {
          if (prev >= 10247) return 10247;
          return prev + 8;
        });
      }, 50);
      
      setTimeout(() => clearInterval(interval), 2000);
    }, 500);


    return () => clearTimeout(timer);
  }, []);


  // Progress bar animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressPercent(85);
    }, 1000);


    return () => clearTimeout(timer);
  }, []);


  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);


    return () => clearInterval(interval);
  }, []);


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };


  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };


  // All your SVG Icons
  const CheckIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );


  const StarIcon = () => (
    <svg className="w-10 h-10 text-blue-500" viewBox="0 0 40 40" fill="currentColor">
      <path d="M20 4L24 12H32L26 18L28 26L20 22L12 26L14 18L8 12H16L20 4Z"/>
      <circle cx="20" cy="20" r="3" fill="white"/>
    </svg>
  );


  const PlayIcon = () => (
    <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
    </svg>
  );


  const ClockIcon = () => (
    <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
    </svg>
  );


  const ChevronDownIcon = () => (
    <svg className="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
    </svg>
  );


  const Bars3Icon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  );


  const XMarkIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  );


  const TrophyIcon = () => (
    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  );


  const ChartIcon = () => (
    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
    </svg>
  );


  const UsersIcon = () => (
    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
      <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
    </svg>
  );


  // Data for sections
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Software Engineer, Google",
      lostWeight: "28 lbs",
      gainedMuscle: "12 lbs muscle",
      days: "87 days",
      quote: "The gamification made all the difference. I actually look forward to workouts now!",
      avatar: "https://images.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director, Microsoft",
      lostWeight: "19 lbs",
      gainedMuscle: "Toned & Strong",
      days: "76 days",
      quote: "Finally found something that fits my crazy schedule. The community keeps me accountable!",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"
    },
    {
      name: "David Rodriguez",
      role: "Finance Manager, Goldman Sachs",
      lostWeight: "31 lbs",
      gainedMuscle: "Built Muscle",
      days: "90 days",
      quote: "Best investment I've made. The achievements system is genius - I'm addicted to progress!",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    }
  ];


  const faqData = [
    {
      question: "Do I need any equipment or gym membership?",
      answer: "No! Our workouts are designed for busy professionals. You can do them at home with just your body weight, or use basic equipment like dumbbells if you have them. We provide equipment-free alternatives for every exercise."
    },
    {
      question: "How much time do I need to commit daily?",
      answer: "Just 20-30 minutes per day, 4-5 times per week. Our gamified system is designed to fit into your busy schedule. You can even break it into 10-minute sessions if needed."
    },
    {
      question: "What if I've failed with other fitness programs?",
      answer: "That's exactly why we created GamieFitX Pro! Traditional programs fail because they're boring and lack accountability. Our gamification system makes fitness addictive, and our community keeps you motivated. Plus, we offer a 90-day money-back guarantee."
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Absolutely! Our system adapts to your fitness level. Beginners start with Level 1 achievements and gradually progress. We have modifications for every exercise and certified trainers available 24/7 for guidance."
    }
  ];


  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <StarIcon />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GamieFitX Pro
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('success-stories')} className="text-gray-600 hover:text-blue-600 transition-colors">
                Success Stories
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-blue-600 transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-blue-600 transition-colors">
                FAQ
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Free Trial
              </button>
            </div>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
            </button>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckIcon />
              <span className="ml-2">{memberCount.toLocaleString()} professionals transformed</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Transform Your Body Into a{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Gaming Achievement
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The world's first gamified fitness system that makes working out addictive. 
              Join busy professionals who've unlocked their dream physique in 90 days or less.
            </p>
          </div>


          {/* Progress Bar Animation */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Your Transformation Progress</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>


          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-blue-600 text-white text-lg px-8 py-4 w-full sm:w-auto rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              <PlayIcon />
              Start Free Trial
            </button>
            <button 
              onClick={() => scrollToSection('success-stories')}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-250 w-full sm:w-auto"
            >
              <PlayIcon />
              View Success Stories
            </button>
          </div>


          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" alt="Certified Trainer" className="w-8 h-8 rounded-full mr-2" />
              <span>Certified Trainers</span>
            </div>
            <div className="flex items-center">
              <CheckIcon />
              <span className="ml-2">90-Day Guarantee</span>
            </div>
            <div className="flex items-center">
              <CheckIcon />
              <span className="ml-2">Secure & Private</span>
            </div>
          </div>
        </div>
      </section>


      {/* Problem Agitation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              How Many Fitness Programs Have You Tried?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If you're like most busy professionals, you've been through this cycle before...
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Gym Membership", cost: "$600/year collecting dust", stat: "87%", detail: "quit within 3 months" },
              { title: "Workout Apps", cost: "Downloaded but abandoned", stat: "92%", detail: "stop using after 2 weeks" },
              { title: "Personal Trainers", cost: "Too expensive & inflexible", stat: "73%", detail: "can't maintain schedule" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-md hover:border-red-500 hover:border-2 transition-all cursor-pointer transform hover:scale-105">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <XMarkIcon />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.cost}</p>
                <div className="mt-4 text-2xl font-bold text-red-500">{item.stat}</div>
                <p className="text-sm text-gray-500">{item.detail}</p>
              </div>
            ))}
          </div>


          {/* Pain Points */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Sound Familiar?</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                "No time for the gym",
                "Workouts are boring", 
                "No accountability",
                "Lost motivation",
                "Same old routine"
              ].map((pain, index) => (
                <span key={index} className="bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm">
                  "{pain}"
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Solution Demo Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              What If Fitness Was As{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Addictive As Gaming?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the world's first gamified fitness system that turns your transformation into an achievement-unlocking adventure.
            </p>
          </div>


          {/* Interactive Demo */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Try Our Demo</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border-2 border-green-200">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <CheckIcon />
                    </div>
                    <div>
                      <h4 className="font-semibold">First Workout Complete!</h4>
                      <p className="text-sm text-gray-600">+50 XP • Level 1 Unlocked</p>
                    </div>
                  </div>


                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm opacity-75">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <ChartIcon />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-500">Week Warrior</h4>
                      <p className="text-sm text-gray-600">Complete 7 consecutive workouts</p>
                    </div>
                  </div>


                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm opacity-50">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <TrophyIcon />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-500">Transformation Master</h4>
                      <p className="text-sm text-gray-600">Reach your 90-day goal</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Progress to Level 2</span>
                    <span className="text-sm font-bold text-blue-600">150/200 XP</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">23</div>
                    <div className="text-sm text-gray-600">Workouts</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">8.5</div>
                    <div className="text-sm text-gray-600">lbs Lost</div>
                  </div>
                </div>


                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Today's Challenge
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why GamieFitX Pro Works When Others Fail
            </h2>
          </div>


          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Achievement System",
                description: "Unlock badges, level up, and earn rewards for every workout. Your progress becomes a game you can't stop playing.",
                icon: TrophyIcon,
                color: "from-yellow-400 to-orange-500"
              },
              {
                title: "Real-Time Tracking",
                description: "See your progress instantly with detailed analytics, body measurements, and performance metrics that keep you motivated.",
                icon: ChartIcon,
                color: "from-blue-400 to-purple-500"
              },
              {
                title: "Community Challenges",
                description: "Join thousands of professionals in weekly challenges, team competitions, and accountability groups that keep you engaged.",
                icon: UsersIcon,
                color: "from-green-400 to-teal-500"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-md group hover:scale-105 transition-transform hover:shadow-2xl">
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Social Proof Section */}
      <section id="success-stories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Transformations From Busy Professionals
            </h2>
            <p className="text-xl text-gray-600">Join thousands who've unlocked their dream physique</p>
          </div>


          {/* Testimonial Carousel */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <img src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg" alt="Before" className="w-full h-32 object-cover rounded-lg" />
                  <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61" alt="After" className="w-full h-32 object-cover rounded-lg" />
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-green-600 font-semibold">Lost {testimonial.lostWeight}</span>
                  <span className="text-blue-600 font-semibold">{testimonial.gainedMuscle}</span>
                  <span className="text-purple-600 font-semibold">{testimonial.days}</span>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>


          {/* Success Statistics */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "10,247", label: "Members Transformed" },
                { number: "23 lbs", label: "Average Weight Lost" },
                { number: "87%", label: "Complete 90-Day Program" },
                { number: "4.9★", label: "App Store Rating" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Program Blueprint Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Your 90-Day Transformation Journey
            </h2>
            <p className="text-xl text-gray-600">Click each milestone to see what you'll unlock</p>
          </div>


          {/* Interactive Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="space-y-16">
              {[
                {
                  weeks: "1-2",
                  title: "Foundation Phase",
                  description: "Build habits, learn the system, unlock your first achievements",
                  tags: ["Habit Builder", "Level 1-3"],
                  side: "left"
                },
                {
                  weeks: "3-6", 
                  title: "Momentum Phase",
                  description: "See real changes, join community challenges, unlock advanced workouts",
                  tags: ["Community", "Level 4-7"],
                  side: "right"
                },
                {
                  weeks: "7-12",
                  title: "Transformation Phase", 
                  description: "Major body changes, leadership roles, master-level achievements",
                  tags: ["Master", "Level 8-10"],
                  side: "left"
                }
              ].map((phase, index) => (
                <div key={index} className="relative flex items-center">
                  {phase.side === "left" ? (
                    <>
                      <div className="flex-1 pr-8 text-right">
                        <div className="bg-white rounded-lg p-6 shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                          <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                          <p className="text-gray-600 mb-4">{phase.description}</p>
                          <div className="flex justify-end space-x-2">
                            {phase.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                        {phase.weeks}
                      </div>
                      <div className="flex-1 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 pr-8"></div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                        {phase.weeks}
                      </div>
                      <div className="flex-1 pl-8">
                        <div className="bg-white rounded-lg p-6 shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                          <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                          <p className="text-gray-600 mb-4">{phase.description}</p>
                          <div className="flex space-x-2">
                            {phase.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Limited Beta Access
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md mx-auto mb-8">
              <div className="flex items-center justify-center">
                <ClockIcon />
                <span className="text-red-700 font-semibold">
                  Only {countdown.hours.toString().padStart(2, '0')}:
                  {countdown.minutes.toString().padStart(2, '0')}:
                  {countdown.seconds.toString().padStart(2, '0')} remaining
                </span>
              </div>
            </div>
          </div>


          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center relative overflow-hidden border">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 text-sm font-semibold transform rotate-12 translate-x-4 -translate-y-2">
                BETA SPECIAL
              </div>
              
              <h3 className="text-2xl font-bold mb-4">GamieFitX Pro Beta</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  <span className="line-through text-gray-400 text-2xl">$197</span>
                  {' '}$47<span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">First 3 months, then $97/month</p>
              </div>


              <ul className="text-left space-y-3 mb-8">
                {[
                  "Unlimited gamified workouts",
                  "Personal achievement tracking",
                  "Community challenges & leaderboards",
                  "24/7 certified trainer support",
                  "90-day money-back guarantee"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>


              <button className="w-full bg-blue-600 text-white text-lg py-4 mb-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Your Transformation
              </button>
              
              <p className="text-sm text-gray-500">Cancel anytime • No hidden fees • Secure payment</p>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>


          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <ChevronDownIcon />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Body Into Your Greatest Achievement?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 10,000+ professionals who've unlocked their dream physique through gamified fitness
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg text-lg transition-all w-full sm:w-auto">
              Start Free Trial Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all w-full sm:w-auto">
              Schedule Demo Call
            </button>
          </div>


          <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-75">
            <span>✓ No credit card required</span>
            <span>✓ 90-day guarantee</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <StarIcon />
                <span className="ml-2 text-lg font-bold">GamieFitX Pro</span>
              </div>
              <p className="text-gray-400 text-sm">Transform your body into a gaming achievement with the world's first gamified fitness system.</p>
            </div>
            
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Success Stories", "Mobile App"]
              },
              {
                title: "Support", 
                links: ["Help Center", "Contact Us", "Community", "Trainer Support"]
              },
              {
                title: "Legal",
                links: ["Privacy Policy", "Terms of Service", "Refund Policy", "Cookie Policy"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{column.title}</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button className="hover:text-white transition-colors">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 GamieFitX Pro. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <div className="w-5 h-5 bg-gray-600 rounded hover:bg-gray-500 transition-colors cursor-pointer"></div>
              <div className="w-5 h-5 bg-gray-600 rounded hover:bg-gray-500 transition-colors cursor-pointer"></div>
              <div className="w-5 h-5 bg-gray-600 rounded hover:bg-gray-500 transition-colors cursor-pointer"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;  