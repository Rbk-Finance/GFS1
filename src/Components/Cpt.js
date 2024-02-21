import React from "react";
import Doctor from "../Assets/tradefinance.png";
import SolutionStep from "./SolutionStep";
import "../Styles/Cpt.css";

function CPT() {
  return (
  
    <div className="cpt-section" id="cpt">
    <div className="cpt-content">
      <div className="cpt-image-content" style={{ position: 'relative' }}>
        <img src={Doctor} alt="Doctor Group" className="cpt-image" />
        <div className="overlay-content">
          <h3 className="overlay-text">Invest in Gold, Silver, Platinum and Palladium at best prices.</h3>
          <h2 className="overlay-subtext">Trade Anytime, Anywhere</h2>
          <p className="overlay-description">Presenting Khazana, An app that aims to democratize investments in all physical precious metals.</p>
          <button className="overlay-button">Learn More</button>
        </div>
      </div>
        <div className="cpt-text-content">
          <h3 className="cpt-title">
            <span>CPT</span>
          </h3>
          <p className="cpt-description">
            Supercharge Your CPT Market Experience.
          </p>

          <h4 className="cpt-text-title">WHY CPT MARKETS ?</h4>
          <p className="cpt-description">
            Trade with 0 Commissions and low spreads starting at 0.7 pips on a
            responsive and User-friendly trading platform. CPT Markets holds
            many licenses from prestigious financial authorities worldwide
            including FCA UK, FSCA South Africa, and IFSC Belize. We offer
            flexible payment methods with separated local bank accounts for a
            more secure trading journey.
          </p>

          <div className="solution-steps-container">
            <SolutionStep
              title="Stocks"
              description="Trade Leveraged products on shares of the biggest companies in the world, including Apple, Microsoft, Tesla, Facebook, Netflix, and Amazon."
            />

            <SolutionStep
              title="Commodities"
              description="Our leading trading platform offers Gold, Oil, Silver, Gas, and many other commodities. Invest in popular commodities with competitive conditions."
            />

            <SolutionStep
              title="Forex"
              description="CPT offers the most popular forex pairs like EUR/USD, GBP/USD, and EUR/GBP. Explore our wide range of major and minor currency pairs."
            />
          </div>

          <div className="cpt-buttons">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CPT;
