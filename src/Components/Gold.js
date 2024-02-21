import React from "react";
 import Doctor from "../Assets/gold.jpg";
import SolutionStep from "./SolutionStep";
import "../Styles/Gold.css";

function Gold() {
  return (
    
    <div className="cpt-section" id="cpt">
  <div className="cpt-content">
    <div className="cpt-image-content" style={{ position: 'relative' }}>
      <img src={Doctor} alt="Doctor Group" className="cpt-image" />
      <div className="overlay-content">
        <h3 className="overlay-text">Invest in Gold, Silver, Platinum and Palladium at best prices.</h3>
        <h2 className="overlay-subtext">Unlock the Power of Precious Metals</h2>
        <p className="overlay-description">Presenting Repository, An app that aims to democratize investments in all physical precious metals.</p>
        <button className="overlay-button">Learn More</button>
      </div>
    </div>

        <div className="cpt-text-content">
          <h3 className="cpt-title">
            <span>GOLD</span>
          </h3>
          <p className="cpt-description">
          Gold stands out as the most renowned among precious metal assets, serving as a store of value in the form of both reserve assets and jewelry. Its legacy spans over a millennium, having been utilized globally as legal currency. Until the early 1970s, the value of paper currencies was pegged to Gold.

         The dynamics influencing Gold prices are predominantly tethered to its role as a safe-haven asset rather than intrinsic supply and demand factors. Throughout history, Central Banks have held Gold as a reserve asset, and as of Q1 2019, they collectively possessed 34,000 tons, with a noteworthy acquisition of 651 tons in 2018—the highest volume since the era of freely traded Gold began in 1971. Such trends mirror the prevailing sentiment towards financial assets, influenced by factors like:<br/> <br/>

         1. Escalating economic and political risks associated with other reserve assets, prompting a shift towards safer and more liquid alternatives. <br/> <br/>
         2. Negative real and nominal rates in contrast to the positive compounded rate of return offered by Gold. <br/> <br/>
         3. De-dollarization trends, reflecting a reduced reliance on the US Dollar.<br/> <br/>

         For those seeking portfolio diversification and a hedge against market volatility, investing in precious metals, particularly gold, is a prudent choice. eBullion facilitates this process through its user-friendly platform, offering a seamless way to buy and invest in gold online in India. Their digital gold service enables investors to conveniently purchase and hold small denominations of gold digitally, eliminating the need for physical storage and reducing transaction costs. This approach not only makes gold investment more accessible and affordable to a broader investor base but also ensures a secure and reliable option for those looking to venture into precious metals.





          </p>

          <h4 className="cpt-text-title">Unlocking Gold Investment Potential</h4>
          <p className="cpt-description">
          Empower the growth of your investment portfolio with our adaptable gold trading solutions designed to support your forays into the dynamic gold market. Ignite your investment journey and confidently navigate the intricacies of the global gold markets.
          </p>

          <SolutionStep
            title="Trade as you see fit "
            description="Experience the flexibility of our trading platform with no upfront or hidden charges, allowing you to engage in gold trading whenever it suits you, without incurring unnecessary costs.."
          />

          <SolutionStep
            title="Boost Liquidity"
            description="Reap the benefits of our platform's flexibility, allowing you to settle your gold trades at your convenience, with the option to finalize transactions up to 120 days later. This grants you ample time to analyze market trends and optimize the sale of your gold assets.."
          />

          <SolutionStep
            title="No collateral required"
            description="Rest easy knowing that there's no need for collateral in your gold trading ventures, ensuring that it won't impact your existing credit lines or financial commitments.
            Invest confidently in the gold market with our adaptable and fee-friendly trading solutions, providing you the freedom and flexibility to make strategic moves in the ever-evolving world of gold trading.."
          />

          
        </div>
      </div>
    </div>
  );
}

export default Gold;