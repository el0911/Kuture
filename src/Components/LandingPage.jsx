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

const Main = styled.main`
  font-family: "Sen", sans-serif;

  @media (min-width: 300px) and (max-width: 600px) {
    .background {
    }
    .body_landing {
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      margin-top: 3rem;
    }
    .background_mobile {
      position: relative;
      width: 100%;
    }
    .bothsides_div {
      width: 100% !important;
      margin-top: 5rem !important;
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
      display: none;
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
  }
  @media (min-width: 600px) and (max-width: 960px) {
    .body_landing {
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      margin-top: 1.52em;
    }
    .background_ipad {
      position: relative;
      width: -moz-available;
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
    .background_mobile {
      display: none;
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
    .bothsides_div {
      width: 90%;
      margin: auto;
      margin-top: 14em;
    }
    .rightside_div {
      width: 90%;
    }
    .rightside_div h2 {
      font-weight: 800;
      font-size: 50px;
      color: #013220;
    }
    .rightside_div h6 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #013220;
    }
    .leftside_div {
      width: 55%;
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
    }
  }
`;

export default function LandingPage() {
  return (
    <Main>
      <div className="landing_div">
        <div className="background">
          <img src={Top} alt="top_back" className="background_mobile" />
          <img src={TopIpad} alt="top_back" className="background_ipad" />

          <div className="body_landing">
            <Header />
            <div className="bothsides_div">
              <div className="rightside_div">
                <h2>We are bringing your roots to you.</h2>
                <h6>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it.
                </h6>
              </div>
            </div>
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
    </Main>
  );
}
