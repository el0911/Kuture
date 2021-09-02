import React from "react";
import styled from "styled-components";
import Top from "../assets/svg/rightside.svg";
import TopIpad from "../assets/svg/top_background.svg";
import ArrowDown from "../assets/svg/arrowdown.svg";
import Categories from "../Components/Categories";
import HowWeOperate from "../Components/HowWeOperate";
import FavouriteRecipes from "../Components/FavouriteRecipes";
import Footer from "../Components/Footer";
import { commerce } from "../lib/Commerce";

const Main = styled.main`
  font-family: "Sen", sans-serif;
 
  .rightside{
    background-image:url("${Top}")
    
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
      position: relative;
      width: 100%;
      height: 55vh;
      background-repeat: no-repeat;
      background-position-y: top;
      background-size: cover;
      margin-top: -2rem;
    }
    .arrdown {
      display: block;
      margin: auto;
      margin-top: 1.5rem;
      text-align: center;
    }
    .top_right {
      display: none;
    }
    .bothsides_divL {
      display: none;
    }
    .all_divs {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }
  @media (min-width: 1024px) and (max-width: 1690px) {
     
    .rightside{
      background-image:url("${Top}");
      width: 100vw;
    }
    .background {
      width: 50%;
    }
    .background_ipad {
      display: none;
    }
    .background_mobile {
      display: none;
    }
    .all_divs {
      display: flex;
      width: 90%;
      justify-content: space-between;
    }
    .bothsides_divL {
      width: 80%;
      margin: auto;
      margin-top: 10em;
    }
    .landing_div {
      display: block;

      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      height: 114vh;
      width: 95%;
      margin-left: auto;
    }
    .rightside_div h2 {
      font-weight: 800;
      font-size: 53px;
      color: #013220;
      line-height: 74px;

      max-width: 100%;
      margin-bottom: 0.7rem;
    }
    .rightside_div h6 {
      font-weight: 600;
      font-size: 25px;
      color: #013220;
      margin-top: 1rem;
      max-width: 100%;
    }
    .leftside_div {
      width: 50%;
      margin-top: -5rem;
    }
    .left_side {
      width: -moz-available;
      width: -webkit-fill-available;
    }
    .top_right {
      position: absolute;
      top: 30px;
      right: 0;
      width: 45%;
    }
    .arrdown {
      display: block;
      margin: auto;
      margin-top: 2.5rem;
    }
  }
  @media (min-width: 1690px) {
     .background {
      width: 45%;
    }
    .background_ipad {
      display: none;
    }
    .background_mobile {
      display: none;
    }
    .all_divs {
      display: flex;
      width: 90%;
      justify-content: space-between;
    }
    .landing_div {
      display: block;
       position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      height: 155vh;
      width: 95%;
      margin-left: auto;
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





   .rightside{
    height: 100vh;
    background-size: cover;
    width: 70vw;
    position: absolute;
    right: 0;
}

  .landing_page{
    position: relative;
    top: -116px;
    display:flex;
    width: 100vw;
    display: -webkit-inline-box;
    z-index:0
  }

  .leftside{
    width: 50vw;
    height: 100vh;
  }

  .overlay{
    margin-top: 28vh;
    margin-left: 110px;
    position: relative;
    z-index: 2;
  }

  .overlay .header{
    font-family: Sen;
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 150.4%;
    /* or 90px */
    color: #013220;
  }

  .overlay .text{
    font-family: Sen;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #013220;
  }




  @media (min-width: 300px) and (max-width: 600px) {
    .rightside{
      background-image:url("${TopIpad}");
      width: 100vw;
    }

    .overlay{
      text-align: center;
      width: max-content;
      margin-left: auto;
      margin-right: auto;
    }

    .overlay .header{
      font-weight: 800;
      font-size: 35px;
      line-height: 42px;
    }

    .overlay .text{
      font-size: 16px;
      line-height: 19px;
      text-align: center;
    }


    .leftside{
      width: 100vw;
      height: 100vh;
    }

    .body_landing {
      padding-top: 0.51rem;
    }
    .landing_div {

      position: relative;
      width: 100%;
      height: 80vh;
      background-repeat: no-repeat;
      background-position-y: top;
      background-size: cover;
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
    .rightside{
      background-image:url("${TopIpad}");
      width: 100vw;
    }

    .overlay{
      text-align: center;
      width: max-content;
      margin-left: auto;
      margin-right: auto;
    }

    .overlay .header{
      font-weight: 800;
      font-size: 35px;
      line-height: 42px;
    }


    .overlay .text{
      font-size: 16px;
      line-height: 19px;
      text-align: center;
    }


    .leftside{
      width: 100vw;
      height: 100vh;
    }

    .background  pink;
     .background_ipad {
      position: relative;
      width: -moz-available;
    }
    .landing_div {
      display: block;

      position: relative;
      width: 100%;
      height: 45vh;
      background-repeat: no-repeat;
      background-position-y: top;
      background-size: cover;
      padding-top: 1rem;
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
`;

export default function LandingPage() {
  const [categories, setCategories] = React.useState([]);

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    console.log(data, "cat");

    setCategories(data);
  };
  console.log(categories, "cate");

  React.useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Main>
      <div className="landing_page">
        <div className="leftside">
          <div className="overlay">
            <p className="header">
              We are bringing <br />
              your roots to you.
            </p>

            <p className="text">
              Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, <br />when an unknown printer took a galley of <br /> type.
            </p>
          </div>
        </div>
        <div className="rightside" style={{
        }} >

        </div>
      </div>
      <img src={ArrowDown} alt="arrow" className="arrdown" />

      <Categories categories={categories} />
      <HowWeOperate />
      <FavouriteRecipes />
      <Footer />
    </Main>
  );
}
