import React, { useState, useEffect } from "react";
import "./LogoAnimation.css";
import HomePage from "./HomePage";
import logo1 from "../assets/logo.png";
import logo2 from "../assets/logo2.png";

const LogoAnimation = () => {
  const [showHomePage, setShowHomePage] = useState(false);
  const [countdown, setCountdown] = useState(6); // ⬅️ 6 sec so logos finish

  useEffect(() => {
    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Redirect to home page after 6 seconds
    const redirectTimer = setTimeout(() => {
      setShowHomePage(true);
    }, 8000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownInterval);
    };
  }, []);

  if (showHomePage) {
    return <HomePage />;
  }

  return (
    <div className="logo-animation-container">
      <div className="logo-center-origin">
  <div className="logo logo-left">
    <img src={logo1} alt="Logo 1" className="logo-img" />
  </div>
  <div className="logo logo-right">
    <img src={logo2} alt="Logo 2" className="logo-img" />
  </div>
</div>

      
    </div>
  );
};

export default LogoAnimation;
