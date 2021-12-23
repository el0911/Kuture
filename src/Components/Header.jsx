import React from "react";
import styled from "styled-components";

import Cart from "./Cart";

import { useHistory } from "react-router-dom";
import AuthUtil from "../utils/auth";
import { CartContext } from "../providers/cart.provider";
import { CartSvg, DropDownSvg, LogoSVG, UserSVG } from "../assets/svg";
import cartObject from "../utils/cart";
const HeaderMain = styled.main`
  width: calc(100% - 80px);
  margin: 20px 40px;
  display: grid;
  align-items: center;
  grid-template-columns: 200px 1fr;

  .user-specific-actions{
    width: calc(100% - 80px);
  }

  .end-of-navbar{
    text-align: right;
    display: grid;
    display: grid;
    grid-gap: 15px;
    align-content: unset;
    align-items: center;
  }
  

  .image{
    display: grid;
  }

  .user-specific-actions .text{
    position: absolute;
    height: 30px;
    width: 30px;
    background: white;
    border-radius: 50%;
    font-size: 18px;
    color: black;
    right: -17px;
    top: 21px;
    z-index: 2;
    text-align: center;
  }
  
  .user-specific-actions .text p{
    padding: 0;
    margin: 0;
    margin-top: 5px;
  } 
  

  .end-of-navbar button{
    color: #424242;
    background: transparent;
    border: 0;
     font-style: normal;
    font-weight: 500;
    font-size: 16px;
    cursor:pointer;
    line-height: 18px;
    height: 30px;
  }

  .end-of-navbar button:hover{
    border-bottom: 2px solid #424242;
  }



  .user-specific-actions{
    display: inline-grid;
    grid-template-columns: 30px 80px;
    grid-gap: 10px;
    justify-items: center;
    grid-column-gap: 18px;
  }

  .user-specific-actions svg{
    margin: auto;
  }

  .drop-down .image{
    width: 48px;
    height: 48px;
    left: 1302.16px;
    top: 48px;
    border-radius: 50%;
    background: #C4C4C4;
    margin: 0 10px;
  }

  .drop-down{
    display: flex;
    position: relative;
  }

  .drop-down-list{
      position: absolute;
      background: white;
      list-style: none;
      border-radius: 7px;
      font-size: 15px;
      font-weight: 400;
      text-align: left;
      padding: 10px 20px;
      min-width: max-content;
      top: 59px;
      left: -10px;
      z-index:10;
  }

  .drop-down-list li{
    height: 34px;
    color: #314351;
    cursor:pointer;
  }

  .drop-down-list ul{
    list-style:none;
    margin: 0;
    padding: 0;
  }
`;

export default function Header() {
  const [close, setClose] = React.useState(false);
  const [drop, setDrop] = React.useState(false);
  const [stillIn, setStillIn] = React.useState(false);
  const [cart] = React.useState({});
  const [showcart, setShowCart] = React.useState(false);
  const history = useHistory()
  const { setCartShow, isCartReady } = CartContext()

  const handleOpen = () => {
    setDrop(true)
  }

  const handleClose = () => {
    setTimeout(() => {
      ///if am not inside the dropDown then hide
      if (!stillIn) {
        setDrop(false)
      }

    }, 3000)
  }

  const viewCart = async () => {
    // const response = await commerce.cart.retrieve();
    // setCart(response);
  };
  const handleCartClick = (state) => {
    setCartShow(true)
  };

  React.useEffect(() => {
    viewCart();
  }, []);

 
  return (
    <HeaderMain>
     <div style={{
        display: 'grid',
        position: 'relative'
        }} onClick={()=>{
          history.push('./')
        }} >
              <LogoSVG />
      </div>
    
      <div className="end-of-navbar" style={!!AuthUtil.isLogedIn() ? {
        'grid-template-columns': '1fr 110px 152px 142px'
      }
        : {
          'grid-template-columns': '1fr 110px 152px 50px'
        }} >
        <div></div>
        <button onClick={e => {
          history.push('./allrecipes')
        }} >
          Our Recipes
        </button>

        <button onClick={e => {
          history.push('./whykulturefresh')
        }}>
          Why KultureFresh?
        </button>

        {!!AuthUtil.isLogedIn() ? <div className="user-specific-actions">
          <div style={{
            display: 'grid',
            position: 'relative'
          }} onClick={handleCartClick} >
            <CartSvg />
            {isCartReady && <div className="text">
              <p>
                {cartObject.gettAllBoxCount()}
              </p>
            </div>}
          </div>
          <div
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            className="drop-down">
            <div className="image">
              <UserSVG/>
            </div>
            <DropDownSvg />

            {drop && <div
              onMouseEnter={() => {
                setStillIn(true)
              }}
              onMouseLeave={() => {
                setStillIn(false)
                setDrop(false)
              }}
              className="drop-down-list">
              <ul>

                <li onClick={e => {
                  history.push('./history')
                }}>
                  Order History
                </li>

                 <li onClick={e => {
                  history.push('./history')
                }}>
                  Favourites
                </li>

                <li onClick={e => {
                  AuthUtil.logout()
                }}>
                  Logout
                </li>


              </ul>
            </div>}
          </div>

        </div> : <button onClick={e => {
          history.push('./login')
        }} >
          Login
        </button>}

      </div>
    </HeaderMain>
  );
}
