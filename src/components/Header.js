import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <NavLink to="/" className="logo-link">
              <div className="">
                <img src={logo} alt="Logo" className="site-logo" />
              </div>
              <div className="logo-text">
                <span className="main-title">તરસરીયા પરિવાર</span>
              </div>
            </NavLink>
          </div>

          <nav className={`main-nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
            <ul className="nav-list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="nav-icon">🏠</span>
                  હોમ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="nav-icon">📿</span>
                  અમારી વિશે
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/history"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="nav-icon">📜</span>
                  ઈતિહાસ
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="nav-icon">🙏</span>
                  સંપર્ક
                </NavLink>
              </li>
              <li>
                <button
                  className="nav-link login-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = "https://admin.tarsariyaparivar.in/";
                  }}
                >
                  🔑 એડમીન
                </button>
              </li>
            </ul>
          </nav>

          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span>{isMobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
