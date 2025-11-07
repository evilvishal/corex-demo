import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const gold = "#C5A100";
  const goldLight = "#FFE085";
  const background = "#000";
  const graphite = "#111";
  const white = "#fff";
  const headingFont = "Montserrat, Bebas Neue, Anton, Oswald, sans-serif";
  const bodyFont = "Roboto, Open Sans, Arial, sans-serif";

  const ArrowRightIcon = ({ color = gold }) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke={color}
      strokeWidth={2.4}
      className="w-5 h-5 ml-3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 5l5 5-5 5" />
    </svg>
  );

  const heroBg = "https://png.pngtree.com/background/20240919/original/pngtree-3d-rendered-gym-equipment-against-dark-background-picture-image_10566187.jpg";
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.85) 70%, rgba(17,17,17,0.95) 100%), url('${heroBg}') center/cover no-repeat`,
        fontFamily: bodyFont,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 200px rgba(197,161,0,0.25)",
        }}
      />

      {/* Headline */}
      <h1
        style={{
          fontFamily: headingFont,
          color: white,
          fontWeight: 900,
          fontSize: "clamp(2.8rem, 6vw, 4rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          textShadow: `
            0 0 20px rgba(255,215,0,0.4),
            0 0 35px rgba(255,200,0,0.25),
            0 2px 10px rgba(0,0,0,0.8)
          `,
          marginBottom: "0.4em",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-30px)",
          transition: "all 1s ease",
        }}
      >
        YOUR BODY ENGINEERED FOR SUCCESS
      </h1>

      {/* Subheadline */}
      <h2
        style={{
          fontFamily: headingFont,
          background: `linear-gradient(90deg, ${gold} 0%, ${goldLight} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
          fontWeight: 800,
          marginBottom: "1.2em",
          letterSpacing: "0.02em",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 1.2s ease",
          filter: "drop-shadow(0 0 12px rgba(255,200,0,0.35))",
        }}
      >
        CRAFTED FOR BUSY PROFESSIONALS
      </h2>

      {/* Supporting text */}
      <p
        style={{
          color: white,
          fontSize: "1.2rem",
          maxWidth: "680px",
          marginBottom: "2.5em",
          lineHeight: 1.5,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 1.3s ease",
          textShadow: "0 0 12px rgba(0,0,0,0.7)",
        }}
      >
        Achieve your goals in 120 days with a personalized program.
        <br />
        Customized workouts and tailored diet plans to transform your body.
      </p>

      {/* ✨ Glowing CTA Button ✨ */}
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "all 1.5s ease",
          position: "relative",
        }}
      >
        <button
          className="font-bold px-10 py-5 rounded-2xl flex items-center justify-center text-lg shadow-lg transition uppercase tracking-wider relative overflow-hidden"
          style={{
            background: `linear-gradient(90deg, ${gold} 0%, ${goldLight} 100%)`,
            color: "#191800",
            fontFamily: headingFont,
            boxShadow: "0 0 25px rgba(197,161,0,0.7)",
            animation: "pulseGlow 2.5s infinite ease-in-out",
          }}
          onClick={() => window.open("/form", "_blank")}
        >
          BOOK YOUR FREE CALL
          <ArrowRightIcon color="#191800" />
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

        {/* Keyframes for glow & shine */}
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

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 flex flex-col items-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(60px)",
          transition: "all 1.8s ease",
        }}
      >
        <span
          className="font-bold text-sm tracking-widest mb-2"
          style={{
            color: gold,
            fontFamily: headingFont,
            textShadow: "0 0 8px rgba(197,161,0,0.4)",
          }}
        >
          DISCOVER YOUR JOURNEY
        </span>
        <div className="animate-bounce">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke={gold}
            strokeWidth={2.4}
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6v8m0 0l-4-4m4 4l4-4"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
