import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Top from "./images/top_mobile.svg";
import TopIpad from "./images/top_background.svg";
import ArrowDown from "./images/arrowdown.svg";
import Navbar from "./Navbar";
import Categories from "./Categories";
import HowWeOperate from "./HowWeOperate";
import FavouriteRecipes from "./FavouriteRecipes";
import Footer from "./Footer";
import Big from "./images/banner_big.svg";
import { commerce } from "../lib/Commerce";

const Main = styled.main`
  font-family: "Sen", sans-serif;

  @media (min-width: 300px) and (max-width: 600px) {
    .background {
    }
    .body_landing {
      padding-top: 0.51rem;
    }
    .landing_div {
      background-image: url(${Top});
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
    .background_ipad {
      position: relative;
      width: -moz-available;
    }
    .landing_div {
      display: block;
      background-image: url(${TopIpad});
      position: relative;
      width: 100%;
      height: 45vh;
      background-repeat: no-repeat;
      background-position-y: top;
      background-size: contain;
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
      background-image: url(${Big});
      position: relative;
      width: 100%;
      height: 55vh;
      background-repeat: no-repeat;
      background-position-y: top;
      background-size: contain;
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
      background-image: url(${Big});
      position: relative;
      background-repeat: no-repeat;
      background-size: contain;
      height: 155vh;
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
      background-image: url(${Big});
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
`;

export default function LandingPage() {
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState({});
  const [categories, setCategories] = React.useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    console.log(data, "cat");

    setCategories(data);
  };
  console.log(categories, "cate");

  const fetchCart = async () => {};

  React.useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Main>
      <div className="landing_div">
        <div className="all_divs">
          <Header />
          <Navbar />
          <div className="top_right"></div>
        </div>
      </div>
      <img src={ArrowDown} alt="arrow" className="arrdown" />
      <Categories products={products} categories={categories} />
      <HowWeOperate />
      <FavouriteRecipes />
      <Footer />
    </Main>
  );
}
