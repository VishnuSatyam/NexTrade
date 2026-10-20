import React from "react";

function Awards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src="assets/largestBroker.svg"></img>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Larget stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <ul>
            <div className="row">
              <div className="col-6">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </div>
              <div className="col-6">
                <li>Stocks & IPOS</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </div>
            </div>
          </ul>
          <img src="assets/presslogos.png" style={{ width: "90%" }}></img>
        </div>
      </div>
    </div>
  );
}

export default Awards;
