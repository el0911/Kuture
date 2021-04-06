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
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .cat {
      width: 263px;
      height: 50px;
      background: #e18f4e;
      border-radius: 10px;
    }
    .login_drop {
      width: 163px;
      height: 38px;
      background: #e18f4e;
      border-radius: 10px;
    }
    .why {
      width: 263px;
      height: 50px;
      background: #e18f4e;
      border-radius: 10px;
    }
    select {
      background: transparent;
      border: none;
      width: 250px;
      height: 50px;
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
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @media (min-width: 960px) {
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
`;

export default function Header() {
  const [close, setClose] = React.useState(true);

  const handleClose = () => {
    setClose(false);
    console.log("clicked");
  };

  return (
    <HeaderMain>
      <header>
        <h3>
          <a href="/">kulturefresh</a>
        </h3>
        <div className="menu_div">
          <img src={Menu} alt="menu" className="menu" onClick={handleClose} />
          <div className="side_menu">
            {/* <img src={SideMenu} alt="sidemenu" className="side_menuimg" />
            {close && (
              <ul>
                {/* <img
                  src={Close}
                  alt="sidemenu"
                  className="side_menuimg"
                  onClick={handleClose}
                /> */}
            {/* <li className="cat">
                  {" "}
                  <img src={OurRecipes} alt="ourrecipes" /> <select></select>
                </li>
                <li className="why">
                  {" "}
                  <img src={WhyKulture} alt="why" />
                  Why kulturefresh
                </li>
                <li className="login_drop">
                  <img src={Login} alt="login" />
                  Login
                </li> */}
            {/* </ul> */}
          </div>
        </div>
      </header>
    </HeaderMain>
  );
}
