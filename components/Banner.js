import React from "react";
import PropTypes from "prop-types";
import Cn from "classnames";

export default function Banner() {

  return (
    <div className="main_con65">
      <div className="main_con66">
      <div className="main_con69">
          <img src="../image/banner44.jpg"></img>
          </div>    
        <div className="main_con67">
          <h2>Future-proof your business. WiFi 6E is here</h2>
        <p>Offer your customers the fastest 
          performance possible with Plume. They’re ready.</p>
          <button>Learn more about WiFi 6E</button>
            
        </div>
       
      </div>
    </div>
  );
}

Banner.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Banner.defaultProps = {
  primary: false,
  onClick: undefined,
};
