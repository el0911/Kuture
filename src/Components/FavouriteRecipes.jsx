import React from "react";
import styled from "styled-components";
import BannerM from "../assets/svg/bannerM.svg";
import BannerL from "../assets/images/bannerL.jpg";
import FavRec from "../assets/images/favrecipe1.jpg";
import Meal from "./sharedComponents/meal";

const Main = styled.main`
.title {
  font-weight: bold;
  font-size: 25px;
  line-height: 36px;
  text-align: center;
  color: #aa614d;
}
  @media (min-width: 300px) and (max-width: 600px) {
    .title {
      font-weight: bold;
      font-size: 25px;
      line-height: 36px;
      text-align: center;
      color: #aa614d;
    }
    .how_div {
      margin-top: 3em;
    }

    .how_div  img{
      max-width: 100vw;
    }

    .how_div  .banner{
      max-width: 100vw;
      min-width: 100vw;
    }
    .sub_title {
      font-weight: normal;
      font-size: 16px;
      color: #aa614d;
      width: 90%;
      margin: auto;
    }
    .eachRec {
      width: 373px;
      margin: auto;
      margin-bottom: 2rem;
      margin-top: 2rem;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: center;
    }
    .btn_div button {
      width: 200px;
      height: 50px;
      background: #ee4e2f;
      border-radius: 10px;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      border: none;
    }
    .eachRec h5 {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #10145f;
      text-align: center;
    }
    .bannerL {
      display: none;
    }
  
  }
  @media (min-width: 600px) and (max-width: 960px) {
    .bannerM {
      display: none;
    }
    .title {
      font-weight: bold;
      font-size: 30px;
      line-height: 48px;
      text-align: center;
      color: #aa614d;
    }
    .sub_title {
      font-weight: normal;
      font-size: 21px;
      line-height: 25px;
      width: 90%;
      margin: auto;
      margin-top: 2rem;
      color: #aa614d;
      text-align: center;
    }
    .bothfav {
      display: flex;
      margin-top: 2em;
      margin-bottom: 2em;
    }
    .eachRec {
      width: 373px;
      margin: auto;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: center;
    }
    .btn_div button {
      width: 200px;
      height: 50px;
      background: #ee4e2f;
      border-radius: 10px;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      border: none;
    }
    .eachRec h5 {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #10145f;
      text-align: center;
    }
    .bannerL {
      width: -moz-available;
      width: -webkit-fill-available;
    }
  }

  @media (min-width: 960px) and (max-width: 1024px) {
    .bannerM {
      display: none;
    }
    .bannerL {
      width: -moz-available;
      width: -webkit-fill-available;
    }
    .sub_title {
      font-weight: normal;
      font-size: 16px;
      color: #aa614d;
      width: 90%;
      margin: auto;
    }
    .bothfav {
       margin-top: 2em;
      margin-bottom: 2em;
      justify-content: space-evenly;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: center;
    }
    .btn_div button {
      width: 200px;
      height: 50px;
      background: #ee4e2f;
      border-radius: 10px;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      border: none;
    }
    .eachRec h5 {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #10145f;
      text-align: center;
    }
  }

  @media (min-width: 1024px) {
    .bothfav {
       margin-top: 2em;
      margin-bottom: 2em;
      justify-content: space-evenly;
    }
    .bannerM {
      display: none;
    }
    .bannerL {
      width: -moz-available;
      width: -webkit-fill-available;
    }
    .title {
      font-weight: bold;
      font-size: 38px;
      line-height: 48px;
      text-align: center;
      color: #aa614d;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: center;
    }
    .btn_div button {
      width: 200px;
      height: 50px;
      background: #ee4e2f;
      border-radius: 10px;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      border: none;
    }
    .eachRec h5 {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #10145f;
      text-align: center;
    }
    .sub_title {
      font-weight: normal;
      font-size: 16px;
      color: #aa614d;
      width: 60%;
      margin: auto;
      margin-bottom: 3rem;
    }
  }
`;

export default function FavouriteRecipes({ favourites }) {
  return (
    <Main>
      <div className="how_div">
        <img  src={BannerM} alt="banner_mobile" className="bannerM banner" />
        <img  src={BannerL} alt="banner_mobile" className="bannerL banner" />
        <h2 className="title" style={{}} >OUR FAVOURITE RECIPES THIS WEEK</h2>
        <p className="sub_title">
         {/* random text */}
        </p>
        <div className="bothfav">
          <Meal list={favourites}>
          </Meal>
        </div>
      </div>
    </Main>
  );
}

FavouriteRecipes.defaultProps = {
  image: `${FavRec}`,
  name: "FRIED RICE ONE",
};
