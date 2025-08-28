import React, { useState, useEffect } from "react";
import "./HomePage.css";

// Import Carousel and its CSS
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Web images
import slider1Web from "../assets/slider1.jpg";
import slider2Web from "../assets/slider2.jpg";

// Mobile images (only one available)
import slider1Mobile from "../assets/slider1-mobile.jpg";

function HomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Use only available images
  const sliderImages = isMobile
    ? [slider1Mobile] // only one for mobile
    : [slider1Web, slider2Web]; // multiple for web

  return (
    <div className="home-page">
      {/* હીરો સ્લાઇડર */}
      <section className="hero-slider">
        <Carousel
          autoPlay
          infiniteLoop={sliderImages.length > 1} // disable infinite loop if only one image
          showThumbs={false}
          showStatus={false}
          interval={5000}
          showIndicators={sliderImages.length > 1} // hide dots if single image
          showArrows={sliderImages.length > 1} // hide arrows if single image
        >
          {sliderImages.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`slider-${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </section>

      {/* સ્વાગત વિભાગ */}
      <section className="container welcome-section">
        <h2>નમસ્તે - સ્વાગત</h2>
        <p className="main-description">
          અમારી આધ્યાત્મિક પરિવારમાં આપનું સ્વાગત છે. અમે અમારી પારંપરિકતાને
          જાળવી રાખવા, સમુદાયના બંધનો મજબૂત કરવા અને ભક્તિપૂર્વક સેવા કરવા માટે
          પ્રતિબદ્ધ છીએ. અમારી શ્રદ્ધા, સંસ્કૃતિ અને એકતાના સફરમાં અમારો સામેલ
          થાઓ.
        </p>

        <div className="features">
          <div className="feature">
            <span className="icon">🙏</span>
            <h3>ભક્તિ</h3>
            <p>પવિત્ર પ્રાથના અને વિધી</p>
          </div>
          <div className="feature">
            <span className="icon">📚</span>
            <h3>વારસો</h3>
            <p>સમૃદ્ધ સંસ્કૃતિક પરંપરા</p>
          </div>
          <div className="feature">
            <span className="icon">🤝</span>
            <h3>સમુદાય</h3>
            <p>એકતા અને એકતાનું અભ્યાસ</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
