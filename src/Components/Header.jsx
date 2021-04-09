import React from "react";
import styled from "styled-components";
import Menu from "./images/menu.svg";
import SideMenu from "./images/sidemenu.svg";
import Close from "./images/close(1).svg";
import Login from "./images/user1.svg";
import WhyKulture from "./images/why.svg";
import OurRecipes from "./images/dropdown.svg";

const HeaderMain = styled.main`
  font-family: "Sen", sans-serif;
  a {
    text-decoration: none;
    cursor: pointer;
    color: #013220;
  }
  @media (min-width: 300px) and (max-width: 600px) {
    header {
      width: 80%;
      margin: auto;
      margin-top: 2em;
      display: flex;
      justify-content: space-between;
    }
    header h3 {
      font-family: "Sen", sans-serif;
      font-size: 26px;
      font-weight: 800;
      color: #013220;
      margin-top: 0;
      margin-bottom: 0;
    }
    .menu_div {
    }
    .menu {
      width: 2.5rem;
      height: 2rem;
    }
    ul {
      display: block;
      list-style: none;
      padding-top: 0.7rem;
      padding-bottom: 1rem;
    }
    .login_ul {
      display: block;
      list-style: none;
      padding-top: 0.7rem;
      padding-bottom: 1rem;
      width: 48%;
      margin: auto;
    }
    .cat {
      width: 185px;
      height: 35px;
      background: #e18f4e;
      border-radius: 10px;
      font-size: 14px;
      margin-bottom: 0.8rem;
      margin-top: 0.8rem;
      padding: 5px 5px;
      display: flex;
      text-transform: uppercase;
    }
    .cat span {
      font-size: 14px;
      text-transform: uppercase;
      color: #10145f;
    }
    .cat img {
      width: 1.52rem;
      padding-right: 8px;
      padding-top: 1px;
    }
    .login_drop {
      width: 100px;
      height: 28px;
      background: #e18f4e;
      border-radius: 10px;
      color: #10145f;
      font-weight: bold;
      margin-bottom: 0.8rem;
      padding: 5px 5px;
    }
    .login_drop_span {
      font-size: 14px;
      text-transform: uppercase;
      color: #10145f;
    }
    .login_drop img {
      width: 1.52rem;
      padding-right: 8px;
      padding-top: 1px;
    }
    .why {
      width: 185px;
      height: 35px;
      background: #e18f4e;
      border-radius: 10px;
      font-size: 14px;
      color: #10145f;
      font-weight: bold;
      margin-bottom: 0.8rem;
      padding: 5px 5px;
      text-transform: uppercase;
    }
    .why_span {
      font-size: 14px;
      text-transform: uppercase;
      color: #10145f;
    }
    .why img {
      width: 1.52rem;
      padding-right: 8px;
      padding-top: 1px;
    }
    select::-ms-expand {
      display: none;
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #10145f;
      display: block;
      width: 200px;
      height: 45px;
      margin: 5px 0px;
      font-size: 13px;
      background-color: transparent;
      border: none;
      word-break: normal;
      font-weight: bold;
      padding: 5px 5px;
    }
    .side_menu {
      background-repeat: no-repeat;
      background-size: cover;
      position: fixed;
      z-index: 10;
      width: 75%;
      margin-left: 7rem;
      margin-top: -5.3rem;
      border-bottom-left-radius: 25px;
      border-top-left-radius: 25px;
    }
    .side_bar {
      margin-top: 3em;
    }
  }
  @media (min-width: 600px) and (max-width: 960px) {
    header {
      width: 80%;
      margin: auto;
      margin-top: 2em;
      display: flex;
      justify-content: space-between;
    }
    header h3 {
      font-family: "Sen", sans-serif;
      font-size: 28px;
      font-weight: 800;
      color: #013220;
      margin-top: 0;
      margin-bottom: 0;
    }
    .menu_div {
    }
    .menu {
      width: 2.5rem;
      height: 2rem;
    }
    ul {
      display: block;
      list-style: none;
      padding-top: 0.7rem;
      padding-bottom: 1rem;
    }
    .login_ul {
      display: block;
      list-style: none;
      padding-top: 0.7rem;
      padding-bottom: 1rem;
      width: 48%;
      margin: auto;
    }
    .cat {
      width: 185px;
      height: 35px;
      background: #e18f4e;
      border-radius: 10px;
      font-size: 14px;
      margin-bottom: 0.8rem;
      margin-top: 0.8rem;
      padding: 5px 5px;
      display: flex;
      text-transform: uppercase;
    }
    .cat span {
      font-size: 14px;
      text-transform: uppercase;
      color: #10145f;
    }
    .cat img {
      width: 1.52rem;
      padding-right: 8px;
      padding-top: 1px;
    }
    .login_drop {
      width: 100px;
      height: 28px;
      background: #e18f4e;
      border-radius: 10px;
      color: #10145f;
      font-weight: bold;
      margin-bottom: 0.8rem;
      padding: 5px 5px;
    }
    .login_drop_span {
      font-size: 14px;
      text-transform: uppercase;
      color: #10145f;
    }
    .login_drop img {
      width: 1.52rem;
      padding-right: 8px;
      padding-top: 1px;
    }
    .why {
      width: 185px;
      height: 35px;
      background: #e18f4e;
      border-radius: 10px;
      font-size: 14px;
      color: #10145f;
      font-weight: bold;
      margin-bottom: 0.8rem;
      padding: 5px 5px;
      text-transform: uppercase;
    }
    .why_span {
      font-size: 14px;
      text-transform: uppercase;
      color: #10145f;
    }
    .why img {
      width: 1.52rem;
      padding-right: 8px;
      padding-top: 1px;
    }
    select::-ms-expand {
      display: none;
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #10145f;
      display: block;
      width: 200px;
      height: 45px;
      margin: 5px 0px;
      font-size: 13px;
      background-color: transparent;
      border: none;
      word-break: normal;
      font-weight: bold;
      padding: 5px 5px;
    }
    .side_menu {
      background-repeat: no-repeat;
      background-size: cover;
      position: fixed;
      z-index: 10;
      width: 39%;
      margin-left: 29rem;
      margin-top: -4rem;
      border-bottom-left-radius: 25px;
      border-top-left-radius: 25px;
    }
    .side_bar {
      margin-top: 3em;
    }
  }

  @media (min-width: 960px) and (max-width: 1024px) {
    header {
      display: flex;
      width: 90%;
      margin: auto;
      margin-top: 2em;
      justify-content: space-between;
    }
    header h3 {
      font-family: "Sen", sans-serif;
      font-size: 32px;
      font-weight: 800;
      color: #013220;
      margin-top: 0.5rem;
      margin-bottom: 0;
    }
    .menu_div {
    }
    .menu {
      display: none;
    }

    .side_menu {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    header {
      display: block;
      width: 85%;
      margin: auto;
      margin-top: 2em;
    }
    header h3 {
      font-family: "Sen", sans-serif;
      font-size: 32px;
      font-weight: 800;
      color: #013220;
      margin-top: 0.5rem;
      margin-bottom: 0;
    }
    .menu_div {
    }
    .menu {
      display: none;
    }

    .side_menu {
      display: none;
    }
  }
`;

export default function Header() {
  const [close, setClose] = React.useState(false);

  const handleClose = () => {
    setClose(true);
  };

  const Dropdown = [
    { id: 1, name: "SELECT" },
    { id: 2, name: "IGBOCENTRIC MEALS" },
    { id: 3, name: "YORUBACENTRIC MEALS" },
    { id: 4, name: "HAUSACENTRIC MEALS" },
    { id: 5, name: "MIX IT UP" },
  ];

  return (
    <HeaderMain>
      <header>
        <h3>
          <a href="/">kulturefresh</a>
        </h3>
        <div className="menu_div">
          <img
            src={Menu}
            alt="menu"
            className="menu"
            onClick={() => {
              setClose(!close);
            }}
          />
        </div>
      </header>
      {close && (
        <div
          className="side_menu"
          style={{ backgroundImage: `url(${SideMenu})` }}
        >
          <ul>
            <img
              src={Close}
              alt="sidemenu"
              className="side_menuimg"
              onClick={() => {
                setClose(!close);
              }}
            />
            <li className="cat">
              <img src={OurRecipes} alt="ourrecipes" />
              <select>
                {Dropdown.map((cat) => {
                  return (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}{" "}
                    </option>
                  );
                })}
              </select>
            </li>
            <li className="why">
              {" "}
              <img src={WhyKulture} alt="why" />
              <span className="why_span">Why kulturefresh</span>
            </li>
          </ul>
          <ul className="login_ul">
            <li className="login_drop">
              <img src={Login} alt="login" />
              <span className="login_drop_span">Login</span>
            </li>
          </ul>
        </div>
      )}
    </HeaderMain>
  );
}
