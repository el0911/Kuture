import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Top from "./images/topback.svg";
import TopIpad from "./images/topipad.svg";
import LeftSide from "./images/leftside.svg";
import ArrowDown from "./images/arrowdown.svg";
import Navbar from "./Navbar";
import Categories from "./Categories";
import HowWeOperate from "./HowWeOperate";
import FavouriteRecipes from "./FavouriteRecipes";
import Footer from "./Footer";

const Main = styled.main`
  font-family: "Sen", sans-serif;

  @media (min-width: 300px) and (max-width: 600px) {
    .background {
    }
    .body_landing {
      padding-top: 0.51rem;
    }
    .background_mobile {
      background-image: url(${Top});
      position: relative;
      width: 100%;
      height: 84vh;
      background-repeat: no-repeat;
      background-position-y: top;
    }
    .bothsides_div {
      width: 100% !important;
      margin-top: 8rem;
      position: absolute;
      z-index: 1;
    }
    .rightside_div {
      width: auto !important;
    }
    .rightside_div h2 {
      font-weight: 800;
      font-size: 35px;
      width: 90%;
      margin: auto;
      text-align: center;
      color: #013220;
      margin-bottom: 1rem;
    }

    .rightside_div h6 {
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #013220;
      width: 80%;
      margin: auto;
    }
    .background_ipad {
      display: block;
    }

    .leftside_div {
      display: none;
    }
    .landing_div {
      display: block;
    }
    .arrdown {
      display: block;
      margin: auto;
      margin-top: 1.5rem;
    }
    .top_right {
      display: none;
    }
    .bothsides_divL {
      display: none;
    }
  }
  @media (min-width: 600px) and (max-width: 960px) {
    .body_landing {
    }
    .background_ipad {
      position: relative;
      width: -moz-available;
    }
    .background_mobile {
      background-image: url(${TopIpad});
      position: relative;
      width: 100%;
      height: 84vh;
      background-repeat: no-repeat;
      background-position-y: top;
    }
    .bothsides_div {
      margin-top: 5em;
    }
    .rightside_div {
      width: 51% !important;
    }
    .rightside_div h2 {
      font-weight: 800;
      font-size: 35px;
      width: 90%;
      margin: auto;
      text-align: left;
      color: #013220;
      margin-bottom: 1rem;
    }

    .rightside_div h6 {
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      text-align: left;
      color: #013220;
      width: 80%;
      margin: auto;
    }

    .leftside_div {
      display: none;
    }
    .landing_div {
      display: block;
    }
    .arrdown {
      display: block;
      margin: auto;
      margin-top: 1.5rem;
    }
    .bothsides_div {
      width: auto;
      margin-top: 0;
    }
    .top_right {
      display: none;
    }
    .bothsides_divL {
      display: none;
    }
  }

  @media (min-width: 960px) and (max-width: 1024px) {
    .background_ipad {
      position: relative;
    }
    .background_mobile {
      display: none;
    }
    .bothsides_div {
      width: auto;
      margin-top: 0;
    }
    .leftside_div {
      display: none;
    }
    .landing_div {
      display: block;
    }
    .arrdown {
      display: block;
      margin: auto;
      margin-top: 1.5rem;
    }
    .top_right {
      display: none;
    }
    .bothsides_divL {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    .background {
      width: 45%;
    }
    .background_ipad {
      display: none;
    }
    .background_mobile {
      display: none;
    }
    .landing_div {
      display: flex;
      width: 100%;
    }
    .bothsides_divL {
      width: 60%;
      margin: auto;
      margin-top: 14em;
    }
    .rightside_div {
      width: 90%;
    }
    .rightside_div h2 {
      font-weight: 800;
      font-size: 80px;
      color: #013220;
      max-width: 100%;
    }
    .rightside_div h6 {
      font-weight: 700;
      font-size: 30px;
      line-height: 44px;
      color: #013220;
      max-width: 100%;
    }
    .leftside_div {
      width: 55%;
    }
    .left_side {
      width: -moz-available;
      width: -webkit-fill-available;
    }
    .arrdown {
      display: block;
      margin: auto;
      margin-top: 1.5rem;
    }
    .top_right {
      position: absolute;
      top: 30px;
      right: 16px;
      width: 30%;
    }
  }
`;

export default function LandingPage() {
  return (
    <Main>
      <div className="landing_div">
        <div className="background_ipad">
          <div className="background_mobile">
            <div className="body_landing">
              <Header />
              <div className="bothsides_div">
                <div className="rightside_div">
                  <h2>We are bringing your roots to you.</h2>
                  <h6>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bothsides_divL">
          <div className="rightside_div">
            <h2>We are bringing your roots to you.</h2>
            <h6>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </h6>
          </div>
        </div>
        <div className="leftside_div">
          <img src={LeftSide} alt="leftside" className="left_side" />
          <div className="top_right">
            <Navbar />
          </div>
        </div>
      </div>
      <img src={ArrowDown} className="arrdown" />
      <Categories />
      <HowWeOperate />
      <FavouriteRecipes />
      <Footer />
    </Main>
  );
}
