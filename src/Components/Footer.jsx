import React from "react";
import styled from "styled-components";
import Facebook from "../assets/svg/facebook.svg";
import Twitter from "../assets/svg/twitter.svg";
import Instagram from "../assets/svg/instagram.svg";
import Copyright from "../assets/svg/kulture_copy.svg";

const FooterDiv = styled.footer`
  background: #3f3d56;
  margin-top: 3rem;
  color: #fff;
  @media (min-width: 300px) and (max-width: 600px) {
    .body_footer {
      display: flex;
      width: 95%;
      margin: auto;
      padding-top: 2rem;
    }
    footer {
      padding-bottom: 1rem;
    }
    p {
      font-size: 13px;
    }
    .first_div {
      width: 40%;
    }
    .second_div {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
      margin-top: -1.72rem;
      text-align: center;
      margin-bottom: 20px;
    }
    .second_div a {
      padding-right: 0.5rem;
    }
    .copyright {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    h6 {
      font-size: 15px;
      margin-bottom: 5px;
    }
  }
  @media (min-width: 600px) and (max-width: 960px) {
    .body_footer {
      display: flex;
      width: 95%;
      margin: auto;
      padding-top: 2rem;
    }
    footer {
      padding-bottom: 1rem;
    }
    p {
      font-size: 13px;
    }
    .first_div {
      width: 40%;
    }
    .second_div {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
      margin-top: -1.72rem;
      text-align: center;
      margin-bottom: 20px;
    }
    .second_div a {
      padding-right: 0.5rem;
    }
    .copyright {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    h6 {
      font-size: 15px;
      margin-bottom: 5px;
    }
  }
  @media (min-width: 960px) {


    footer{
      display: flex;
    }

    .body_footer {
      display: flex;
      width: 95%;
      margin: auto;
      padding-top: 2rem;
    }
    footer {
      padding-bottom: 1rem;
    }
    p {
      font-size: 13px;
    }
    .first_div {
      width: 40%;
    }
    .second_div {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
      margin-top: -1.72rem;
    }
    .second_div a {
      padding-right: 0.5rem;
    }
    .copyright {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    h6 {
      font-size: 15px;
      margin-bottom: 5px;
    }
  }
`;

export default function Footer() {
  return (
    <FooterDiv>
     
        {/* <div className="body_footer">
        
          <div className="second_div">
            <h6>Follow us on social media</h6>
            <a href="facebook.com/kulturefresh">
              <img src={Facebook} alt="facebook" />
            </a>
            <a href="twitter.com/kulturefresh">
              <img src={Twitter} alt="twitter" />
            </a>
            <a href="instagram.com">
              <img src={Instagram} alt="instagram" />
            </a>
          </div>
        </div>
        <img src={Copyright} alt="copyright" className="copyright" /> */}
     </FooterDiv>
  );
}
