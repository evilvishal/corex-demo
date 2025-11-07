// src/context/NavigationContext.jsx
import React, { createContext, useContext } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const saveScrollPosition = (position) => {
    sessionStorage.setItem('corex-scroll', position.toString());
    console.log(`💾 Saved: ${position}`);
  };

  const getScrollPosition = () => {
    const saved = sessionStorage.getItem('corex-scroll');
    return saved ? parseInt(saved) : 0;
  };

  const clearScrollPosition = () => {
    sessionStorage.removeItem('corex-scroll');
    console.log(`🧹 Cleared scroll`);
  };

  return (
    <NavigationContext.Provider
      value={{
        saveScrollPosition,
        getScrollPosition,
        clearScrollPosition,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
};
