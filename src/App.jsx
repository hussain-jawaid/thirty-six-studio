import React from "react";
import { useTheme } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";

function App() {
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <>
      <div className="min-h-screen">
        <Header />
      </div>
    </>
  );
}

export default App;
