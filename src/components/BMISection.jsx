import React, { useState, useEffect } from 'react';

const BMISection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    height: '',
    weight: '',
    heightUnit: 'cm',
    weightUnit: 'kg',
    fitnessGoal: ''
  });
  const [bmiResult, setBmiResult] = useState(null);
  const [ageError, setAgeError] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (formData.height && formData.weight && formData.height > 0 && formData.weight > 0) {
      calculateBMI();
    } else {
      setBmiResult(null);
    }
  }, [formData.height, formData.weight, formData.heightUnit, formData.weightUnit, formData.gender]);

  const calculateBMI = () => {
    let heightInM = formData.heightUnit === 'cm' 
      ? formData.height / 100 
      : formData.height * 0.3048;
    
    let weightInKg = formData.weightUnit === 'kg' 
      ? formData.weight 
      : formData.weight * 0.453592;

    const bmi = weightInKg / (heightInM * heightInM);
    
    let category = '';
    let color = '';
    let bodyImage = '';
    let borderColor = '';
    let motivation = '';
    let motivationIcon = '';
    let motivationColor = '';
    let headingText = '';
    
    if (bmi < 18.5) {
      category = 'Underweight';
      color = 'text-blue-400'; // keep blue as info color
      borderColor = 'border-blue-400';
      bodyImage = '/images/body-types/underweight.jpeg';
      motivation = "Your body is underweight. We need to help you build healthy muscle mass. Let's schedule a call to create your solution.";
      motivationIcon = "💪";
      motivationColor = "from-blue-600/20 to-cyan-600/20 border-blue-400/50";
      headingText = "We See Your Body Type";
    } else if (bmi < 25) {
      category = 'Normal Weight';
      // Use gold gradient color instead of green to match theme
      color = 'text-[#C5A100]';
      borderColor = 'border-[#C5A100]';
      bodyImage = '/images/body-types/normal-weight.jpeg';
      motivation = "Your body is in normal range, but you want more! We need to optimize your physique. Let's schedule a call for your solution.";
      motivationIcon = "🎯";
      motivationColor = "from-[#C5A100]/20 to-[#FFE085]/20 border-[#C5A100]/50";
      headingText = "Ready for Next Level?";
    } else if (bmi < 30) {
      category = 'Overweight';
      color = 'text-[#C5A100]';
      borderColor = 'border-[#C5A100]';
      bodyImage = '/images/body-types/overweight.jpeg';
      motivation = "Your body is carrying extra weight. We need to help you lose it sustainably. Let's schedule a call to find your solution.";
      motivationIcon = "🔥";
      motivationColor = "from-[#C5A100]/20 to-[#FFE085]/20 border-[#C5A100]/50";
      headingText = "We See Your Challenge";
    } else {
      category = 'Obese';
      color = 'text-red-400'; // keep red for urgency
      borderColor = 'border-red-400';
      bodyImage = '/images/body-types/obese.jpeg';
      motivation = "Your body needs urgent attention. We need to create a personal plan for you. Let's schedule a call to solve this together.";
      motivationIcon = "🌟";
      motivationColor = "from-red-600/20 to-pink-600/20 border-red-400/50";
      headingText = "Time to Take Action!";
    }

    setBmiResult({
      bmi: bmi.toFixed(1),
      category,
      color,
      bodyImage,
      borderColor,
      motivation,
      motivationIcon,
      motivationColor,
      headingText
    });
  };

  const nextStep = () => {
    if (currentStep === 2) {
      const age = parseInt(formData.age);
      if (!formData.age || age < 13 || age > 100) {
        setAgeError('Age must be between 13 and 100');
        return;
      } else {
        setAgeError('');
      }
    }
    if (currentStep < 4) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 300);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    setAgeError('');
    if (currentStep > 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 300);
    }
  };

  const updateFormData = (field, value) => {
    if (field === 'age') {
      setAgeError('');
    }
    setFormData({ ...formData, [field]: value });
  };

  const isStepComplete = () => {
    switch (currentStep) {
      case 1: return formData.gender !== '';
      case 2: return formData.age !== '';
      case 3: return formData.height !== '' && formData.weight !== '' && formData.height > 0 && formData.weight > 0;
      case 4: return formData.fitnessGoal !== '';
      default: return false;
    }
  };

  // RESULTS PAGE - Gold Orange Theme
  if (showResults) {
    return (
      <section 
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
        <div className="absolute top-6 left-6 z-20">
          <div className="text-2xl font-black text-white">
            <span className="text-[#C5A100]">Core</span>X
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-center text-white px-4 relative z-10 py-8">
          <div className="mb-8">
            <div className="inline-flex items-center bg-[#C5A100]/20 text-[#C5A100] px-4 py-2 rounded-full text-sm font-black mb-4 border border-[#C5A100]/50 backdrop-blur-md">
              🎉 Assessment Complete
            </div>
            <h1 
              className="text-3xl md:text-4xl font-black mb-3 text-white drop-shadow-2xl"
              style={{ textShadow: '0 0 30px rgba(197,161,0,0.7)' }}
            >
              Your Personal <span className="bg-gradient-to-r from-[#C5A100] to-[#FFE085] bg-clip-text text-transparent font-black">
                Fitness Blueprint
              </span>
            </h1>
            <p className="text-base text-[#FFE085] font-bold drop-shadow-xl">
              Based on your BMI and goals, here's your personalized CoreX plan
            </p>
          </div>
          <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-[#C5A100]/50 mb-6 shadow-2xl">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-center">
                <div className="text-3xl font-black text-[#C5A100] mb-1 drop-shadow-2xl">{bmiResult?.bmi}</div>
                <div className="text-gray-100 font-bold text-sm">BMI Score</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-20 mx-auto mb-2 bg-white/90 rounded-lg overflow-hidden shadow-xl border border-white">
                  <img 
                    src={bmiResult?.bodyImage} 
                    alt={bmiResult?.category}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className={`text-sm font-black ${bmiResult?.color} drop-shadow-xl`}>
                  {bmiResult?.category}
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="bg-[#C5A100]/20 backdrop-blur-md rounded-lg p-2 border border-[#C5A100]/30">
                  <div className="text-[#FFE085] font-black text-sm">{formData.gender}</div>
                  <div className="text-gray-200 text-xs font-bold">Gender</div>
                </div>
                <div className="bg-red-500/20 backdrop-blur-md rounded-lg p-2 border border-red-400/30">
                  <div className="text-red-300 font-black text-sm">{formData.age} years</div>
                  <div className="text-gray-200 text-xs font-bold">Age</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`bg-gradient-to-r ${bmiResult?.motivationColor} backdrop-blur-xl rounded-2xl p-4 border shadow-2xl mb-8`}>
            <div className="text-center">
              <h3 className="text-lg font-black text-white mb-3 flex items-center justify-center space-x-3">
                <span className="text-2xl">{bmiResult?.motivationIcon}</span>
                <span>{bmiResult?.headingText}</span>
                <span className="text-2xl transform scale-x-[-1]">{bmiResult?.motivationIcon}</span>
              </h3>
              <p className="text-gray-100 font-semibold text-sm leading-relaxed">
                {bmiResult?.motivation}
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#C5A100]/30 to-[#FFE085]/30 backdrop-blur-xl rounded-2xl p-6 border-2 border-[#C5A100]/50 shadow-2xl">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">💎</div>
              <h3 className="text-xl font-black text-white mb-2">Transform Your Body with Coach Renu</h3>
              <p className="text-[#FFE085] font-bold text-sm mb-4">
                15-minute FREE call that changes everything
              </p>
            </div>
            <div className="mb-4">
              <button className="bg-gradient-to-r from-[#C5A100] to-[#FFE085] text-black px-8 py-4 rounded-xl font-black text-lg transition-none shadow-xl border-2 border-white/30 w-full mb-3">
                📞 Schedule CALL
              </button>
              <p className="text-[#FFE085] text-xs text-center font-bold">
                🔥 Limited slots • Usually $97 • FREE today only
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm text-center">
                <div className="font-black text-[#C5A100]">✓ Find Your Block</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm text-center">
                <div className="font-black text-[#C5A100]">✓ Personal Plan</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm text-center">
                <div className="font-black text-[#C5A100]">✓ Clear Actions</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/85"></div>
      <div className="absolute top-6 left-6 z-20">
        <div className="text-2xl font-black text-white">
          <span className="text-[#C5A100]">Core</span>X
        </div>
      </div>
      <div className="max-w-xl mx-auto px-4 relative z-10 py-12">
        <div className="text-center mb-8">
          <h1 className={`text-3xl md:text-4xl font-black text-white mb-4 drop-shadow-2xl transform transition-all duration-800 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ textShadow: '0 0 30px rgba(197,161,0,0.7)' }}
          >
            CREATE YOUR CUSTOM <br />
            <span className="bg-gradient-to-r from-[#C5A100] to-[#FFE085] bg-clip-text text-transparent font-black">
              FITNESS BLUEPRINT
            </span>
          </h1>
          <p className={`text-lg text-[#FFE085] font-bold drop-shadow-xl transform transition-all duration-800 delay-300 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Quick CoreX assessment - Get your personalized workout and nutrition plan
          </p>
        </div>

        <div className={`flex justify-center mb-6 transform transition-all duration-800 delay-600 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex items-center space-x-3">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all duration-500 shadow-xl border ${
                  step <= currentStep
                    ? 'bg-[#C5A100] text-white border-[#FFE085]'
                    : 'bg-gray-800/80 text-gray-400 border-gray-600'
                }`}
              >
                {step < currentStep ? '✓' : step}
              </div>
            ))}
          </div>
        </div>

        <div className={`bg-black/70 backdrop-blur-xl rounded-2xl p-6 border border-[#C5A100]/50 shadow-2xl min-h-[400px] flex flex-col justify-between transform transition-all duration-800 delay-900 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className={`flex-grow transition-all duration-500 ease-in-out ${
            isTransitioning ? 'opacity-0 transform translate-x-4 scale-95' : 'opacity-100 transform translate-x-0 scale-100'
          }`}>
            {currentStep === 1 && (
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-black text-white mb-6 drop-shadow-xl">
                  STEP 1: WHAT IS YOUR GENDER?
                </h3>
                <div className="flex-grow flex flex-col justify-center space-y-3">
                  {['Male', 'Female'].map((gender) => (
                    <button
                      key={gender}
                      className={`w-full text-left p-4 rounded-lg border transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-md ${
                        formData.gender === gender
                          ? 'bg-[#C5A100]/30 border-[#FFE085] text-[#FFE085] shadow-[#FFE085]/50'
                          : 'bg-gray-800/60 border-gray-600 text-gray-100 hover:border-[#FFE085]'
                      }`}
                      onClick={() => updateFormData('gender', gender)}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border mr-3 transition-all duration-300 ${
                          formData.gender === gender ? 'border-[#FFE085] bg-[#FFE085]' : 'border-gray-500'
                        }`}>
                          {formData.gender === gender && <div className="w-full h-full rounded-full bg-white/30"></div>}
                        </div>
                        <span className="text-lg font-bold">{gender}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-black text-white mb-6 drop-shadow-xl">
                  STEP 2: WHAT IS YOUR AGE?
                </h3>
                <div className="flex-grow flex flex-col justify-center">
                  <div className="mb-4">
                    <label className="block text-[#FFE085] text-base mb-2 font-bold">Age</label>
                    <input
                      type="number"
                      className="w-full bg-gray-800/80 backdrop-blur-md text-white p-3 rounded-lg border border-[#FFE085] focus:border-[#C5A100] focus:outline-none text-xl font-black transition-all duration-300"
                      value={formData.age}
                      onChange={(e) => updateFormData('age', e.target.value)}
                    />
                    {ageError && (
                      <div className="mt-3 p-3 bg-red-500/20 backdrop-blur-md border border-red-400 rounded-lg shadow-xl">
                        <p className="text-red-300 font-black text-sm">⚠️ {ageError}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-black text-white mb-6 drop-shadow-xl">
                  STEP 3: WHAT ARE YOUR CURRENT STATS?
                </h3>
                <div className="flex-grow flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Height */}
                    <div>
                      <label className="block text-[#FFE085] text-base mb-2 font-bold">Height</label>
                      <div className="space-y-2">
                        <input
                          type="number"
                          step="0.1"
                          className="w-full bg-gray-800/80 backdrop-blur-md text-white p-3 rounded-lg border border-[#FFE085] focus:border-[#C5A100] focus:outline-none text-lg font-black text-center"
                          value={formData.height}
                          onChange={(e) => updateFormData('height', e.target.value)}
                          placeholder="Enter height"
                        />
                        <div className="flex bg-gray-700/80 rounded-lg overflow-hidden">
                          <button
                            type="button"
                            className={`flex-1 py-2 text-sm font-black transition-all duration-300 ${
                              formData.heightUnit === 'cm' 
                                ? 'bg-[#C5A100] text-white' 
                                : 'text-gray-300 hover:text-white hover:bg-gray-600'
                            }`}
                            onClick={() => updateFormData('heightUnit', 'cm')}
                          >
                            CM
                          </button>
                          <button
                            type="button"
                            className={`flex-1 py-2 text-sm font-black transition-all duration-300 ${
                              formData.heightUnit === 'ft' 
                                ? 'bg-[#C5A100] text-white' 
                                : 'text-gray-300 hover:text-white hover:bg-gray-600'
                            }`}
                            onClick={() => updateFormData('heightUnit', 'ft')}
                          >
                            FT
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Weight */}
                    <div>
                      <label className="block text-[#FFE085] text-base mb-2 font-bold">Weight</label>
                      <div className="space-y-2">
                        <input
                          type="number"
                          step="0.1"
                          className="w-full bg-gray-800/80 backdrop-blur-md text-white p-3 rounded-lg border border-[#FFE085] focus:border-[#C5A100] focus:outline-none text-lg font-black text-center"
                          value={formData.weight}
                          onChange={(e) => updateFormData('weight', e.target.value)}
                          placeholder="Enter weight"
                        />
                        <div className="flex bg-gray-700/80 rounded-lg overflow-hidden">
                          <button
                            type="button"
                            className={`flex-1 py-2 text-sm font-black transition-all duration-300 ${
                              formData.weightUnit === 'kg' 
                                ? 'bg-[#C5A100] text-white' 
                                : 'text-gray-300 hover:text-white hover:bg-gray-600'
                            }`}
                            onClick={() => updateFormData('weightUnit', 'kg')}
                          >
                            KG
                          </button>
                          <button
                            type="button"
                            className={`flex-1 py-2 text-sm font-black transition-all duration-300 ${
                              formData.weightUnit === 'lbs' 
                                ? 'bg-[#C5A100] text-white' 
                                : 'text-gray-300 hover:text-white hover:bg-gray-600'
                            }`}
                            onClick={() => updateFormData('weightUnit', 'lbs')}
                          >
                            LBS
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {bmiResult && (
                    <div className="text-center mb-6">
                      <div className={`bg-black/60 backdrop-blur-xl rounded-xl p-4 border ${bmiResult.borderColor} shadow-2xl`}>
                        <div className="flex items-center justify-center space-x-6">
                          <div className="text-center">
                            <div className={`text-3xl font-black ${bmiResult.color} mb-1 drop-shadow-2xl`}>
                              {bmiResult.bmi}
                            </div>
                            <div className={`text-base font-black ${bmiResult.color}`}>
                              {bmiResult.category}
                            </div>
                          </div>
                          
                          <div className="w-20 h-28 bg-white rounded-lg overflow-hidden shadow-xl border border-white">
                            <img 
                              src={bmiResult.bodyImage} 
                              alt={bmiResult.category}
                              className="w-full h-full object-contain p-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-black text-white mb-6 drop-shadow-xl">
                  STEP 4: WHAT IS YOUR PRIMARY GOAL?
                </h3>
                <div className="flex-grow flex flex-col justify-center space-y-3">
                  {[
                    { value: 'lose-weight', label: 'Lose Weight & Burn Fat' },
                    { value: 'build-muscle', label: 'Build Muscle & Strength' },
                    { value: 'tone-body', label: 'Tone & Shape My Body' },
                    { value: 'general-fitness', label: 'Improve General Fitness' }
                  ].map((goal) => (
                    <button
                      key={goal.value}
                      className={`w-full text-left p-4 rounded-lg border transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-md ${
                        formData.fitnessGoal === goal.value
                          ? 'bg-[#C5A100]/30 border-[#FFE085] text-[#FFE085] shadow-[#FFE085]/50'
                          : 'bg-gray-800/60 border-gray-600 text-gray-100 hover:border-[#FFE085]'
                      }`}
                      onClick={() => updateFormData('fitnessGoal', goal.value)}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border mr-3 transition-all duration-300 ${
                          formData.fitnessGoal === goal.value ? 'border-[#FFE085] bg-[#FFE085]' : 'border-gray-500'
                        }`}>
                          {formData.fitnessGoal === goal.value && <div className="w-full h-full rounded-full bg-white/30"></div>}
                        </div>
                        <span className="text-lg font-bold">{goal.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between mt-8 pt-4 border-t border-gray-600/30">
            <button
              className={`px-6 py-2 rounded-lg font-black transition-all duration-300 backdrop-blur-md border ${
                currentStep === 1
                  ? 'bg-gray-800/60 text-gray-500 cursor-not-allowed border-gray-600'
                  : 'bg-gray-800/80 text-gray-100 hover:bg-gray-700 hover:scale-105 border-gray-600 hover:border-[#FFE085]'
              }`}
              onClick={prevStep}
              disabled={currentStep === 1 || isTransitioning}
            >
              PREVIOUS
            </button>

            <button
              className={`px-6 py-2 rounded-lg font-black transition-all duration-300 backdrop-blur-md border ${
                !isStepComplete() || isTransitioning
                  ? 'bg-gray-800/60 text-gray-500 cursor-not-allowed border-gray-600'
                  : 'bg-gradient-to-r from-[#C5A100] to-[#FFE085] text-black hover:scale-110 shadow-xl border-[#C5A100]'
              }`}
              onClick={nextStep}
              disabled={!isStepComplete() || isTransitioning}
            >
              {currentStep === 4 ? 'GET MY RESULTS' : 'NEXT STEP'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMISection;
