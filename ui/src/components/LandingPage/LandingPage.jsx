import React from "react";
import "./LandingPage.css";
import ElectronicsCarousel from "../ElectronicsCarousel/ElectronicsCarousel";
import { BottomNavigation } from "@mui/material";
import Footer from "./../Footer/Footer";

function LandingPage() {
  return (
    <>
      <div className="landing-page-container">
        <div className="navbar">
          <div id="company-logo">
            <div>Matrix </div>
          </div>

          <div class="box-1">
            <div class="btn btn-one">
              <span>Sign In</span>
            </div>
          </div>
        </div>
        {/* end navbar*/}
        <div className="main">
          <div className="left-content">
            <h2>
              Gear Up for Greatness <br /> with <em id="text-logo">Matrix</em>
            </h2>
            <p>Top-Quality Electronics at Unbeatable Prices</p>
          </div>
          <div className="right-carousel">
            <ElectronicsCarousel />
          </div>
        </div>
        {/*main ends*/}
        <div className="bottom-nav">
          <Footer />
        </div>
      </div>
      {/* end landing-page-container*/}
    </>
  );
}

export default LandingPage;
