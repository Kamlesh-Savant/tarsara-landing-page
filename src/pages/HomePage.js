import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

// Import Carousel and its CSS
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Import your slider images
// import slider1 from "../assets/ganesha.jpg";
// import slider2 from "../assets/shiva.jpg";
// import slider3 from "../assets/vishnu.jpg";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

function HomePage() {
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
            <img src={slider1} alt="લોર્ડ ગણેશા" />
          </div>
          <div>
            <img src={slider2} alt="લોર્ડ શિવ" />
          </div>
          <div>
            <img src={slider3} alt="લોર્ડ વિષ્ણુ" />
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
