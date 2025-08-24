import React, { useState } from "react";
import "./ContactPage.css";

// ફૉન્ટ ઓસમ અને આઇકન આયાત કરો
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faClock,
  faCalendarAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import YoutubeThumbnail from "../components/YoutubeThumbnail";

// --- નકલી માહિતી ---
const youtubeVideos = [
  {
    videoId: "0IwuLs2HboM",
    title:
      "ગ્સંકલ્પ આદર્શ પરીવારનો ll નાટક ll Sankalp Adarsh Parivarno ll તરસરીયા પરીવાર",
  },
  { videoId: "YcZcH2i2hJI", title: "તમે અંજની ના જાયા હનુમાન" },
  { videoId: "OgyyCrlHokk", title: "આરતી હનુમાન જન્મોત્સવ 2025" },
  { videoId: "iR3LTZGTKcE", title: "મારો હાથ જાલનારો હનુમંત છે" },
  {
    videoId: "6qKgp5nocHI",
    title:
      "વરઘોડો જીવરાજા તારો || જાશે રે સમશાણ પાલખી લઈ || સગાવાલા સૌ નિકળશે ઘરબાર ...",
  },
  { videoId: "vwJPEUVTuno", title: "પીરમારા હાજરા હજુર || બેઠા છે ગોરસ ગામમા" },
];

const socialLinks = [
  {
    icon: faFacebook,
    url: "https://www.facebook.com/groups/451376238406510",
    name: "Facebook",
    color: "#1877F2",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/tarsarahanumanchalisaofficial",
    name: "Instagram",
    color: "#E4405F",
  },
  {
    icon: faYoutube,
    url: "https://www.youtube.com/@tarsariyaparivar",
    name: "YouTube",
    color: "#FF0000",
  },

  {
    icon: faWhatsapp,
    url: "https://wa.me/919537591010",
    name: "WhatsApp",
    color: "#25D366",
  },
];
// --- MOCK DATA END ---

function ContactPage() {
  return (
    <div className="contact-page">
      {/* હીરો વિભાગ */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="om-symbol">ॐ</div>
          <h1>અમારા સાથે જોડાઓ</h1>
          <p>અમારી પવિત્ર સમુદાય સાથે જોડાયેલા રહો</p>
          <div className="hero-divider">
            <span>🙏</span>
            <span>🪷</span>
            <span>🙏</span>
          </div>
        </div>
      </section>

      <div className="container">
        {/* સંપર્ક ફોર્મ અને નકશો વિભાગ */}
        <section className="contact-form-section">
          <div className="map-container">
            <h3>અમને અહીં શોધો</h3>
            <p className="map-subtitle">અમારું સ્થાન - અમારી પવિત્ર જગ્યા</p>

            <div className="google-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4640.637353991937!2d72.0915871!3d21.335457500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be1f3cc8b49f9fd%3A0x9f1c0f85ed82599c!2sTarsaradham%20Hanumanji%20Mandir!5e1!3m2!1sen!2sin!4v1755952110601!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="તરસરીયા પરિવાર મંદિર સ્થાન"
              ></iframe>
            </div>

            <div className="quick-info">
              <div className="info-item">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span>પ્રાર્થના માટે રોજ ખુલ્લું છે</span>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faClock} />
                <span>6:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube વિડીયો વિભાગ */}
        <section className="videos-section">
          <div className="section-header">
            <h2>પવિત્ર ક્ષણો</h2>
            <p className="section-subtitle">
              પવિત્ર ક્ષણ - અમારી દિવ્ય ઉજવણીઓના ઝલક
            </p>
          </div>

          <div className="videos-grid">
            {youtubeVideos.map((video) => (
              <YoutubeThumbnail key={video.videoId} {...video} />
            ))}
          </div>
        </section>

        {/* સોશિયલ મીડિયા વિભાગ */}
        <section className="social-section">
          <div className="section-header">
            <h2>સંપર્કમાં રહો</h2>
            <p className="section-subtitle">
              સામાજિક સંપર્ક - અમારી યાત્રાનો અનુસરો
            </p>
          </div>

          <div className="social-container">
            <p className="social-intro">
              અમારી ડિજિટલ સમુદાયમાં જોડાઓ અને અમારા તાજા ઈવેન્ટ્સ, ઉજવણીઓ, અને
              આધ્યાત્મિક સમજણમાં અપડેટ રહો. સામાજિક મીડિયામાં અમને અનુસરો!
            </p>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ "--social-color": social.color }}
                >
                  <FontAwesomeIcon icon={social.icon} />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactPage;
