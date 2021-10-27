import React from "react";
import styled from "styled-components";
import Choose from "../assets/svg/choose.svg";
import Deliver from "../assets/svg/deliver.svg";
import Enjoy from "../assets/svg/enjoy.svg";
import Line1 from "../assets/svg/Line1.svg";
import Line2 from "../assets/svg/Line2.svg";
import Line1L from "../assets/svg/lineL.svg";
import Line2L from "../assets/svg/line2L.svg";
import BannerM from "../assets/svg/bannerM.svg";
import BannerL from "../assets/images/bannerL.jpg";

const Main = styled.main`
  font-family: "Sen", sans-serif;

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

    .banner{
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
    .enjoy_div {
      width: 90%;
      margin: auto;
      margin-top: 1.5rem;
    }
    .choose_div h5 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #aa614d;
      margin-top: 0.8rem;
      margin-bottom: 0.5rem;
    }
    .choose_div p {
      font-weight: bold;
      font-size: 14px;
      line-height: 19px;
      color: #aa614d;
      margin-top: 1rem;
    }
    .choose {
      position: relative;

      z-index: 10;
    }
    .deliver_div h5 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #aa614d;
      margin-top: 0.8rem;
      margin-bottom: 0.5rem;
      text-align: left;
    }
    .deliver_div p {
      font-weight: bold;
      font-size: 14px;
      line-height: 19px;
      color: #aa614d;
      width: 80%;
      margin-top: 1rem;
      text-align: left;
    }
    .deliverM {
      position: relative;

      z-index: 10;
    }
    .enjoy_div h5 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #aa614d;
      margin-top: 0.8rem;
      margin-bottom: 0.5rem;
    }
    .enjoy_div p {
      width: 80%;

      font-weight: bold;
      font-size: 14px;
      line-height: 19px;
      color: #aa614d;

      margin-top: 1rem;
    }
    .choose {
      position: relative;

      z-index: 10;
    }
    .choose_text {
      width: 85%;
      margin: auto;
    }
    .line1 {
      margin-top: -19rem;

      position: absolute;
    }
    .deliver_div {
      display: block;
      text-align: right;
      width: 90%;
      margin: auto;
    }

    .line2_div {
      display: block;
      text-align: center;
    }
    .line2 {
      margin-top: -19rem;
      position: absolute;
      margin-left: -20px;
    }
    .enjoy {
      position: relative;
      z-index: 10;
    }
    .bannerL {
      display: none;
    }
    .line1L {
      display: none;
    }
    .line2L {
      display: none;
    }
    .deliverL {
      display: none;
    }
  }
  @media (min-width: 600px) and (max-width: 960px) {
    .bannerM {
      display: none;
    }
    .line1 {
      display: none;
    }
    .line2 {
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
    .operate_div {
      width: 85%;
      margin: auto;
      display: block;
    }
    .choose_div {
      display: flex;
      width: 100%;
      margin: auto;
      margin-top: auto;
      margin-top: 3em;
      position: relative;
      z-index: 10;
    }
    .choose_div h5 {
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
      color: #aa614d;
      margin-bottom: 0.5rem;
    }
    .choose_text {
      width: auto;
      margin: auto;
      margin-left: 1em;
    }
    .choose_text p {
      font-weight: bold;
      font-size: 15px;
      line-height: 22px;
      width: 90%;
      color: #aa614d;
    }
    .deliver_div {
      margin-top: 2rem;
      display: flex;
      width: 100%;
      margin: auto;
      margin-top: -3em;
      position: relative;
      z-index: 10;
    }
    .deliver_div h5 {
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
      color: #aa614d;
      width: 85%;

      margin-bottom: 0.5rem;
    }
    .deliver_text {
      width: 80%;
      margin: auto;
      text-align: right;
    }
    .deliver_text p {
      font-weight: bold;
      font-size: 15px;
      line-height: 22px;
      width: 90%;
      color: #aa614d;
      margin-bottom: 5rem;
      text-align: right;
    }
    .enjoy_div {
      margin-top: 2rem;
      display: flex;
      width: 100%;
      margin: auto;
      position: relative;
      z-index: 10;
      margin-top: -3rem;
    }
    .enjoy_div h5 {
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
      color: #aa614d;
      margin-bottom: 0.5rem;
      margin-top: 5rem;
    }
    .enjoy_text {
      width: auto;
      margin: auto;
      margin-left: 1rem;
    }
    .enjoy_text p {
      font-weight: bold;
      font-size: 15px;
      line-height: 22px;
      width: 95%;
      color: #aa614d;
    }
    .line1L {
      text-align: center;
      display: block;
      margin: auto;
      margin-top: auto;
      margin-top: -4em;
    }
    .line2L {
      text-align: center;
      display: block;
      margin: auto;
      margin-top: auto;
      margin-top: -6em;
    }
    .deliverM {
      display: none;
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
    .line1 {
      display: none;
    }
    .line2 {
      display: none;
    }
    .title {
      font-weight: bold;
      font-size: 40px;
      line-height: 48px;

      color: #aa614d;
    }
    .sub_title {
      font-weight: normal;
      font-size: 21px;
      line-height: 25px;
      width: 75%;
      margin: auto;
      margin-top: 2rem;
      color: #aa614d;
    }
    .operate_div {
      width: 85%;
      margin: auto;
      display: block;
    }
    .choose_div {
      display: flex;
      width: 67%;
      margin: auto;
      margin-top: auto;
      margin-top: 3em;
      position: relative;
      z-index: 10;
    }
    .choose_div h5 {
      font-weight: bold;
      font-size: 25px;
      line-height: 30px;
      color: #aa614d;
      margin-bottom: 0.5rem;
    }
    .choose_text {
      width: auto;
      margin: auto;
      margin-left: 1em;
    }
    .choose_text p {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      width: 90%;
      color: #aa614d;
    }
    .deliver_div {
      margin-top: 2rem;
      display: flex;
      width: 67%;
      margin: auto;
      margin-top: -3em;
      position: relative;
      z-index: 10;
    }
    .deliver_div h5 {
      font-weight: bold;
      font-size: 25px;
      line-height: 30px;
      color: #aa614d;
      width: 85%;

      margin-bottom: 0.5rem;
    }
    .deliver_text {
      width: 80%;
      margin: auto;
      text-align: right;
    }
    .deliver_text p {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      width: 85%;
      color: #aa614d;
      margin-bottom: 5rem;
      text-align: right;
    }
    .enjoy_div {
      margin-top: 2rem;
      display: flex;
      width: 67%;
      margin: auto;
      position: relative;
      z-index: 10;
      margin-top: -3rem;
    }
    .enjoy_div h5 {
      font-weight: bold;
      font-size: 25px;
      line-height: 30px;
      color: #aa614d;
      margin-bottom: 0.5rem;
      margin-top: 5rem;
    }
    .enjoy_text {
      width: auto;
      margin: auto;
      margin-left: 1rem;
    }
    .enjoy_text p {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      width: 95%;
      color: #aa614d;
    }
    .line1L {
      text-align: center;
      display: block;
      margin: auto;
      margin-top: auto;
      margin-top: -4em;
    }
    .line2L {
      text-align: center;
      display: block;
      margin: auto;
      margin-top: auto;
      margin-top: -4em;
    }
    .deliverM {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1690px) {
    .title {
      font-weight: bold;
      font-size: 40px;
      line-height: 48px;
      text-align: center;
      color: #aa614d;
    }
    .sub_title {
      font-weight: normal;
      font-size: 21px;
      line-height: 25px;
      width: 70%;
      margin: auto;
      margin-top: 2rem;
      color: #aa614d;
    }
    .operate_div {
      max-width: 58%;
      margin: auto;
      display: block;
    }
    .choose_div {
      display: flex;
      max-width: 90%;
      margin: auto;
      margin-top: auto;
      margin-top: 3em;
      position: relative;
      z-index: 10;
    }
    .choose_div h5 {
      font-weight: bold;
      font-size: 25px;
      line-height: 30px;
      color: #aa614d;
      margin-bottom: 0.5rem;
    }
    .choose_text {
      width: auto;
      margin: auto;
      margin-left: 1em;
    }
    .choose_text p {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      width: 90%;
      color: #aa614d;
    }
    .deliver_div {
      margin-top: 2rem;
      display: flex;
      max-width: 90%;
      margin: auto;
      margin-top: -3em;
      position: relative;
      z-index: 10;
    }
    .deliver_div h5 {
      font-weight: bold;
      font-size: 25px;
      line-height: 30px;
      color: #aa614d;
      width: 85%;

      margin-bottom: 0.5rem;
    }
    .deliver_text {
      width: 80%;
      margin: auto;
      text-align: right;
    }
    .deliver_text p {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      width: 85%;
      color: #aa614d;
      margin-bottom: 5rem;
      text-align: right;
    }
    .enjoy_div {
      margin-top: 2rem;
      display: flex;
      max-width: 90%;
      margin: auto;
      position: relative;
      z-index: 10;
      margin-top: -3rem;
    }
    .enjoy_div h5 {
      font-weight: bold;
      font-size: 25px;
      line-height: 30px;
      color: #aa614d;
      margin-bottom: 0.5rem;
      margin-top: 5rem;
    }
    .enjoy_text {
      width: auto;
      margin: auto;
      margin-left: 1rem;
    }
    .enjoy_text p {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      width: 95%;
      color: #aa614d;
    }
    .line1L {
      text-align: center;
      display: block;
      margin: auto;
      margin-top: auto;
      margin-top: -4em;
    }
    .line2L {
      text-align: center;
      display: block;
      margin: auto;
      margin-top: auto;
      margin-top: -7em;
    }
    .bannerM {
      display: none;
    }
    .bannerL {
      width: -moz-available;
      width: -webkit-fill-available;
    }
    .line1 {
      display: none;
    }
    .line2 {
      display: none;
    }
    .deliverM {
      display: none;
    }
  }
  @media (min-width: 1690px) {
    .title {
      font-weight: bold;
      font-size: 40px;
      line-height: 48px;
      text-align: center;
      color: #aa614d;
    }
    .sub_title {
      font-weight: normal;
      font-size: 21px;
      line-height: 25px;
      width: 65%;
      margin: auto;
      margin-top: 2rem;
      color: #aa614d;
    }
    .operate_div {
      max-width: 58%;
      margin: auto;
      display: block;
    }
    .choose_div {
      display: flex;
      width: 67%;
      margin: auto;
      margin-top: auto;
      margin-top: 3em;
      position: relative;
      z-index: 10;
    }
    .choose_div h5 {
      font-weight: bold;
      font-size: 25px;
      line-height: 30px;
      color: #aa614d;
      margin-bottom: 0.5rem;
    }
    .choose_text {
      width: auto;
      margin: auto;
      margin-left: 1em;
    }
    .choose_text p {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      width: 90%;
      color: #aa614d;
    }
    .deliver_div {
      margin-top: 2rem;
      display: flex;
      width: 67%;
      margin: auto;
      margin-top: -3em;
      position: relative;
      z-index: 10;
    }
    .deliver_div h5 {
      font-weight: bold;
      font-size: 25px;
      line-height: 30px;
      color: #aa614d;
      width: 85%;

      margin-bottom: 0.5rem;
    }
    .deliver_text {
      width: 80%;
      margin: auto;
      text-align: right;
    }
    .deliver_text p {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      width: 85%;
      color: #aa614d;
      margin-bottom: 5rem;
      text-align: right;
    }
    .enjoy_div {
      margin-top: 2rem;
      display: flex;
      width: 67%;
      margin: auto;
      position: relative;
      z-index: 10;
      margin-top: -3rem;
    }
    .enjoy_div h5 {
      font-weight: bold;
      font-size: 25px;
      line-height: 30px;
      color: #aa614d;
      margin-bottom: 0.5rem;
      margin-top: 5rem;
    }
    .enjoy_text {
      width: auto;
      margin: auto;
      margin-left: 1rem;
    }
    .enjoy_text p {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      width: 95%;
      color: #aa614d;
    }
    .line1L {
      text-align: center;
      display: block;
      margin: auto;
      margin-top: auto;
      margin-top: -4em;
    }
    .line2L {
      text-align: center;
      display: block;
      margin: auto;
      margin-top: auto;
      margin-top: -4em;
    }
    .bannerM {
      display: none;
    }
    .bannerL {
      width: -moz-available;
      width: -webkit-fill-available;
    }
    .line1 {
      display: none;
    }
    .line2 {
      display: none;
    }
    .deliverM {
      display: none;
    }
  }
`;

export default function HowWeOperate() {
  return (
    <Main>
      <div className="how_div">
        <img src={BannerM} alt="banner_mobile" className="bannerM banner" />
        <img src={BannerL} alt="banner_mobile" className="bannerL banner" />
        <h2 className="title">HOW WE OPERATE</h2>
        <p className="sub_title">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div className="operate_div">
          <div className="choose_div">
            <img src={Choose} alt="choose" className="choose" />
            <div className="choose_text">
              <h5>Choose your recipes.</h5>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <img src={Line1} alt="choose" className="line1" />
          <img src={Line1L} alt="choose" className="line1L" />
          <div className="deliver_div">
            <div className="deliver_img">
              <img src={Deliver} alt="choose" className="deliverM" />
            </div>
            <div className="deliver_text">
              <h5>Deliver your recipes.</h5>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="deliver_img">
              <img src={Deliver} alt="choose" className="deliverL" />
            </div>
          </div>
          <div className="line2_div">
            <img src={Line2} alt="choose" className="line2" />
            <img src={Line2L} alt="choose" className="line2L" />
          </div>{" "}
          <div className="enjoy_div">
            <img src={Enjoy} alt="choose" className="enjoy" />
            <div className="enjoy_text">
              <h5>Enjoy your recipes.</h5>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
