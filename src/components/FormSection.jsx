import React, { useState, useEffect } from 'react';

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    goal: '',
    experience: '',
    urgency: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ SIMPLE: Just scroll to top when form loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbx0r_aFFA1pghJZmEXTM1O8ojBQWhdLxn6dYNuSFuPpJZzPEozmltv9LzO6MswPrHIR/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        goal: '',
        experience: '',
        urgency: ''
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("❌ There was a problem sending your form. Try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  // SVG Icons
  const CheckCircleIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
    </svg>
  );

  const SparklesIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
    </svg>
  );

  // STYLED SUCCESS PAGE WITH SMOOTH TRANSITIONS - ORANGE THEME
  if (isSubmitted) {
    return (
      <section className="py-16 bg-black text-white relative overflow-hidden">
        {/* Background Effects - ORANGE THEME */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/15 to-red-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-red-400/15 to-orange-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-gradient-to-br from-white via-gray-50 to-orange-50 rounded-3xl p-10 shadow-2xl text-gray-900 transform transition-all duration-1000 ease-out scale-100 opacity-100">
            
            {/* Gradient Border - ORANGE THEME */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-orange-600 rounded-3xl p-0.5">
              <div className="bg-gradient-to-br from-white via-gray-50 to-orange-50 rounded-3xl h-full w-full"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Success Icon with Animation - ORANGE */}
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-all duration-500 hover:scale-110">
                <CheckCircleIcon className="text-white w-8 h-8" />
              </div>

              {/* Animated Success Message - ORANGE THEME */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6 transform transition-all duration-700 ease-out">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Submission Successful!
                </span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed transform transition-all duration-700 ease-out delay-200">
                Thank you for your interest in CoreX! We have received your consultation request and our fitness expert will contact you within 24 hours.
              </p>

              {/* WhatsApp Group Section - ORANGE THEME */}
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-6 mb-6 border border-orange-200 transform transition-all duration-700 ease-out delay-400">
                <p className="text-gray-700 mb-4">
                  <strong>What's Next:</strong> Join our exclusive CoreX WhatsApp group for daily fitness tips, workout videos, and connect with other fitness enthusiasts on their transformation journey.
                </p>
                <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-md">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.516"/>
                    </svg>
                    Join CoreX WhatsApp Group
                  </span>
                </button>
              </div>

              {/* Contact Info - ORANGE THEME */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200 transform transition-all duration-700 ease-out delay-600">
                <p className="text-sm text-gray-700">
                  Questions? Contact us at <span className="text-orange-600 font-semibold">support@corex.com</span> 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-black text-white relative overflow-hidden">
      {/* Background Effects - ORANGE THEME */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/15 to-red-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-red-400/15 to-orange-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header - ORANGE THEME */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-orange-500/20 text-orange-400 px-6 py-3 rounded-full text-sm font-medium mb-6 border-2 border-orange-400/30 backdrop-blur-sm shadow-lg">
            <SparklesIcon />
            <span className="ml-2">Get Personalized Solution</span>
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ textShadow: '0 0 30px rgba(255, 102, 0, 0.5)' }}
          >
            Ready To{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Break The Cycle?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Get a FREE consultation call with our fitness expert to discover how CoreX can transform your body and life.
          </p>
        </div>

        {/* FORM - ORANGE THEME */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-300 relative overflow-hidden">
            
            {/* Colorful accent strips - ORANGE THEME */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-t-3xl"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-red-500 to-orange-500 rounded-b-3xl"></div>
            
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Get Your <span className="text-orange-600">FREE</span> Consultation
              </h3>
              <p className="text-gray-600 text-lg">Fill out the form below and we'll contact you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name Field - ORANGE THEME */}
              <div>
                <label className="block text-sm font-semibold text-orange-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-orange-200 rounded-xl text-gray-800 text-base placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-orange-300 shadow-sm"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field - ORANGE THEME */}
              <div>
                <label className="block text-sm font-semibold text-orange-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-orange-200 rounded-xl text-gray-800 text-base placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-orange-300 shadow-sm"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone Field - ORANGE THEME */}
              <div>
                <label className="block text-sm font-semibold text-orange-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-orange-200 rounded-xl text-gray-800 text-base placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-orange-300 shadow-sm"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Age Field - ORANGE THEME */}
              <div>
                <label className="block text-sm font-semibold text-orange-700 mb-2">
                  Age Range *
                </label>
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-orange-200 rounded-xl text-gray-800 text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-orange-300 shadow-sm"
                >
                  <option value="">Select your age range</option>
                  <option value="below-18">Below 18</option>
                  <option value="18-25">18 - 25</option>
                  <option value="26-35">26 - 35</option>
                  <option value="36-45">36 - 45</option>
                  <option value="above-45">Above 45</option>
                </select>
              </div>

              {/* Goal Field - ORANGE THEME */}
              <div>
                <label className="block text-sm font-semibold text-orange-700 mb-2">
                  Primary Fitness Goal *
                </label>
                <select
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-orange-200 rounded-xl text-gray-800 text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-orange-300 shadow-sm"
                >
                  <option value="">Select your main goal</option>
                  <option value="weight-loss">Lose Weight & Get Lean</option>
                  <option value="muscle-gain">Build Muscle & Strength</option>
                  <option value="general-fitness">Improve Overall Fitness</option>
                  <option value="energy">Increase Energy & Stamina</option>
                  <option value="confidence">Boost Confidence & Self-Esteem</option>
                </select>
              </div>

              {/* Experience Level - ORANGE THEME */}
              <div>
                <label className="block text-sm font-semibold text-orange-700 mb-2">
                  Current Fitness Experience *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-orange-200 rounded-xl text-gray-800 text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-orange-300 shadow-sm"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Complete Beginner</option>
                  <option value="some-experience">Some Experience</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              {/* Urgency - ORANGE THEME */}
              <div>
                <label className="block text-sm font-semibold text-orange-700 mb-2">
                  How urgent is your transformation? *
                </label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-orange-200 rounded-xl text-gray-800 text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-orange-300 shadow-sm"
                >
                  <option value="">Select urgency level</option>
                  <option value="very-urgent">Very Urgent - Need results ASAP</option>
                  <option value="urgent">Urgent - Want to start within 2 weeks</option>
                  <option value="moderate">Moderate - Ready within a month</option>
                  <option value="exploring">Just exploring options</option>
                </select>
              </div>

              {/* Submit Button - ORANGE THEME */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed text-white' 
                      : 'bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 hover:from-orange-600 hover:via-red-600 hover:to-orange-700 text-white hover:shadow-orange-500/25'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit the details'
                  )}
                </button>
              </div>

              <p className="text-sm text-gray-600 text-center mt-3">
                By submitting this form, you agree to receive communication from us. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
