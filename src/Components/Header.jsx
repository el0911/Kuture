import React from "react";
import styled from "styled-components";
import Menu from "../assets/svg/menu.svg";
import Close from "../assets/svg/close(1).svg";
import Login from "../assets/svg/user1.svg";
import List from "../assets/svg/list.svg";
import carticon from "../assets/svg/cartWhite.svg";
import Cart from "./Cart";
import WhyKulture from "../assets/svg/why.svg";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";
import AuthUtil from "../utils/auth";
import { CartContext } from "../providers/cart.provider";

const HeaderMain = styled.main`
  font-family: "Sen", sans-serif;
    z-index: 3;
    width: -webkit-fill-available;
    position: relative;
  a {
    text-decoration: none;
    cursor: pointer;
    color: #013220;
  }

  .side_menu ul{
    padding: 35px;
  }

  .side_menu {
    background: #FAFAEF;
   width: 100vw;
   height: 70vh;
   position: absolute;
   padding:0;
   margin:0;
   top:0
}


.menu_div{
  position: absolute;
  right: 15px;
}

 

 

.why{
  height: 35px;
  background: #e18f4e;
  border-radius: 10px;
  font-size: 14px;
  color: #10145f;
  font-weight: bold;
  margin-bottom: 0.8rem;
  padding: 5px 5px;
  text-transform: uppercase;
  display: flex;
  margin-top: 20px;
}

.why_span{
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
  width: 100%;
  margin-top: 10px;
}

  @media (min-width: 300px) and (max-width: 600px) {
    .nav_div {
      display: none;
    }
    header {
      width: 90%;
      margin: auto;
      position: relative;
      top: 19px;
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
      position: absolute;
    }
    .menu_div {
    }
    .cart {
      width: 2.5rem;
      height: 2rem;
      cursor: pointer;
      color: #ee4e2f;
    }
    .menu {
      width: 2.5rem;
      height: 2rem;
      cursor: pointer;
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
      font-size: 12px;
      margin-bottom: 0.8rem;
      margin-top: 0.8rem;
      padding: 5px 5px;
      display: flex;
      text-transform: uppercase;
    }
    .cat span {
      font-size: 12px;
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
      font-size: 12px;
      text-transform: uppercase;
      color: #10145f;
    }
    .login_drop img {
      width: 1.52rem;
      padding-right: 8px;
      padding-top: 1px;
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
      font-size: 12px;
      background-color: transparent;
      border: none;
      word-break: normal;
      font-weight: bold;
      padding: 5px 5px;
    }
    .side_menu {
      background: #FAFAEF;
      width: 100vw;
      height: 70vh;
      position: absolute;
    }
    .side_bar {
      margin-top: 3em;
    }
  }
  @media (min-width: 600px) and (max-width: 960px) {
    .both_headers {
      padding-top: 2rem;
    }
    .nav_div {
      display: none;
    }
    header {
      width: 80%;
      margin: auto;
       display: flex;
      justify-content: space-between;
    }
    header h3 {
      font-family: "Sen", sans-serif;
      font-size: 28px;
      font-weight: 800;
      color: #10145f;
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
      font-size: 13px;
      background-color: transparent;
      border: none;
      word-break: normal;
      font-weight: bold;
      padding: 5px 5px;
    }
  
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
       justify-content: space-between;
    }
    header h3 {
      font-family: "Sen", sans-serif;
      font-size: 32px;
      font-weight: 800;
      color: #013220;
      margin-top: 0;
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
       margin-left: 0;
    }
    header h3 {
      font-family: "Sen", sans-serif;
      font-size: 32px;
      font-weight: 800;
      margin-top: 30px;
      color: #013220;
      margin-bottom: 0;
      position: absolute;
    }
    .menu_div {
    }
    .menu {
      display: none;
    }

    .side_menu {
      display: none;
    }
   
    .both_headers {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin: auto;
       padding-left: 110px;
    }
    .nav_div {
      padding-top: 1rem;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`;

export default function Header() {
  const [close, setClose] = React.useState(false);
  const [cart] = React.useState({});
  const [showcart, setShowCart] = React.useState(false);
  const history  = useHistory()
  const {setCartShow} = CartContext()
 
 

  const viewCart = async () => {
    // const response = await commerce.cart.retrieve();
    // setCart(response);
  };
  const handleClick = (state) => {
    setCartShow(true)
  };

  React.useEffect(() => {
    viewCart();
  }, []);
  console.log(cart, "cart");

  return (
    <HeaderMain>
      <div className="both_headers">
        <header>
          <h3>
            <a href="/">kulturefresh</a>
          </h3>

          <div className="nav_div">
            <Navbar cart={cart} showcart={showcart} handleClick={handleClick} />
          </div>

 
            
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

              <li className="why"  onClick={e=>{
                history.push('/allrecipes')
              }} >
                <img src={WhyKulture} alt="why" />
                <span className="why_span">Why kulturefresh</span>
              </li>

              <li className="why" onClick={e=>{
                history.push('/whykulturefresh')
              }} >
                <img src={List} alt="why" />
                <span className="why_span">Our Recepies</span>
              </li>

          { AuthUtil.isLogedIn() && <li className="why cartt"  onClick={e=>{
              handleClick()
          }} >
            <img src={carticon} alt="login" />
            <span className="why_span">Cart</span>
          </li>}

          {!AuthUtil.isLogedIn()  && <li className="why"  onClick={e=>{
                history.push('/login')
              }} >
                <img src={Login} alt="login" />
                <span className="why_span">Login</span>
              </li>}


              {AuthUtil.isLogedIn()  && <li className="why"  onClick={e=>{
                AuthUtil.logout()
              }} >
                <img src={Login} alt="login" />
                <span className="why_span">Logout</span>
              </li>}
            </ul>

          </div>
        )}

      </div>
    </HeaderMain>
  );
}
