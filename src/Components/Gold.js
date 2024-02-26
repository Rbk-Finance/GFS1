import React from "react";
import Doctor from "../Assets/gold.jpeg";
import GoldImage from "../Assets/gold1.jpg";
import "../Styles/Gold.css";

function Gold() {
  return (
    <div>
      {/* First Section */}
      <div className="cpt-section" id="cpt">
        <div className="cpt-content">
          <div className="cpt-image-content" style={{ position: 'relative' }}>
            <img src={Doctor} alt="Doctor Group" className="cpt-image" />
            <div className="overlay-content">
              <h3 className="overlay-text">Invest in Gold, Silver, Platinum and Palladium at best prices.</h3>
              <h2 className="overlay-subtext">Unlock the Power of Precious Metals</h2>
              <p className="overlay-description">Presenting Repository, An app that aims to democratize investments in all physical precious metals.</p>
              <button className="overlay-button">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="khazana-container">
        <div className="khazana-content">
          <h1>Welcome to Repository</h1>
          <h6>Your Trusted Precious Metals Investment Platform!</h6>
          <p>
            Discover a dependable and safeguarded way to invest in precious metals. Our platform
            offers you a wide range of options, including gold, silver, platinum, and palladium. With
            Khazana, you have the flexibility to withdraw your investment whenever you want or
            securely store your metals in our protected vault. Rest assured, your investment will
            remain protected and trustworthy.
          </p>
          <p>
            Invest with confidence at Khazana – where security meets convenience. Start your journey
            towards a secure financial future today!
          </p>
        </div>
        <div className="khazana-image">
          {/* Use the imported image here */}
          <img src={GoldImage} alt="Sample" />
        </div>
        <div className="contact-us">
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Gold; 
