import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="assets/homeHero.png" alt="hero" className="img-fluid mb-5" />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, IPOs, derivatives, mutual funds,
          ETFs, bonds, and more.
        </p>
        <button
          className="btn btn-primary fs-5 px-4 py-2 mx-auto text-nowrap"
          style={{ width: "auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
