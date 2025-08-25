import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

// Import Carousel and its CSS
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Import your slider images for web
import slider1Web from "../assets/slider1.jpg";
import slider2Web from "../assets/slider2.jpg";
import slider3Web from "../assets/slider3.jpg";
import slider4Web from "../assets/slider4.jpg";

// Import your slider images for mobile (you'll need to create these)
import slider1Mobile from "../assets/slider1-mobile.jpg";
import slider2Mobile from "../assets/slider2-mobile.jpg";
import slider3Mobile from "../assets/slider3-mobile.jpg";
import slider4Mobile from "../assets/slider4-mobile.jpg";

function HomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define slider images based on device type
  const sliderImages = isMobile ? [
    slider1Mobile,
    slider2Mobile,
    slider3Mobile,
    slider4Mobile
  ] : [
    slider1Web,
    slider2Web,
    slider3Web,
    slider4Web
  ];

  return (
    <div className="home-page">
      {/* હીરો સ્લાઇડર */}
      <section className="hero-slider">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
        >
          <div>
            <img src={sliderImages[3]} alt="image4" />
          </div>
          <div>
            <img src={sliderImages[1]} alt="image2" />
          </div>
          <div>
            <img src={sliderImages[2]} alt="image3" />
          </div>
          <div>
            <img src={sliderImages[0]} alt="image1" />
          </div>
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