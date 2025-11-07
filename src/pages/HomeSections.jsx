// src/pages/HomeSections.jsx
import React, { useEffect } from "react";
import HeroSection from "./../components/HeroSection";
import VideoHeroSection from "./../components/VideoHeroSection";
import ProblemSection from "./../components/ProblemSection";
import ContactSection from "./../components/ContactSection";
import FeaturesSection from "./../components/FeaturesSection";
import ProgramSection from "./../components/ProgramSection";
import FAQSection from "./../components/FAQSection";
import FooterSection from "./../components/FooterSection";
import { useNavigation } from "../context/NavigationContext";

const HomeSections = () => {
  const { getScrollPosition, clearScrollPosition } = useNavigation();

  useEffect(() => {
    const savedScroll = getScrollPosition();
    if (savedScroll > 0) {
      setTimeout(() => {
        window.scrollTo({ top: savedScroll, behavior: 'auto' });
        clearScrollPosition();
        console.log(`🎯 Restored to: ${savedScroll}`);
      }, 200);
    }
  }, [getScrollPosition, clearScrollPosition]);

  return (
    <>
      <HeroSection />
      <VideoHeroSection />
      <ProblemSection />
      <FeaturesSection />
      <ProgramSection />
      <FAQSection />
      <ContactSection />

      <FooterSection />
    </>
  );
};

export default React.memo(HomeSections);
