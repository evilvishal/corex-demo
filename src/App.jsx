// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import NavbarSection from "./components/NavbarSection";
import HomeSections from "./pages/HomeSections";
import BMISection from "./components/BMISection";
import FormSection from "./components/FormSection";

function App() {
  const location = useLocation();
  
  // ✅ ONLY show navbar on home page ("/")
  const showNavbar = location.pathname === "/";

  return (
    <>
      {showNavbar && <NavbarSection />} {/* ✅ Conditional navbar */}
      <Routes>
        <Route path="/" element={<HomeSections />} />
        <Route path="/bmi" element={<BMISection />} />
        <Route path="/form" element={<FormSection />} />
      </Routes>
    </>
  );
}

export default App;
