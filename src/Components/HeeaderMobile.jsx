import React from "react";
import styled from "styled-components";
import carticon from "../assets/svg/cart.svg";
import Cart from "./Cart";
import Close from "../assets/svg/close(1).svg";
import AuthUtil from "../utils/auth";
import { useHistory } from "react-router-dom";
import cartObject from "../utils/cart";
import { CartContext } from "../providers/cart.provider";
import { AllRecipeSVG, CartSvg, DropDownSvg, HistorySvg, LogoSVG, LogoutSVG, QuestionSVG, UserSVG } from "../assets/svg";


const NavBarMobileComponent = styled.nav` 
  display:grid;
  grid-column: auto;
  background:white;
  width: 100vw;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  padding-top: 10px;

     position: fixed;
    bottom: 0;
    z-index: 4;
    /* z-index: 11; */
    height: 60px;
    
}

.svg{
  align-items: center;
    display: inline-grid;
    text-align: center;
}

.svg svg{
  margin:auto
}

.text{
  position: absolute;
  height: 30px;
  width: 30px;
  background: white;
  border-radius: 50%;
  font-size: 18px;
  color: black;

  right: 14px;
  top: 6px;

  z-index: 2;
  text-align: center;
}

.text p{
  padding: 0;
  margin: 0;
  margin-top: 5px;
} 
`;

export default function HeeaderMobile({ cart, handleClick }) {

  const history = useHistory()
  const { setCartShow, isCartReady } = CartContext()

  const navItemsNotLoggedIn = [
    {
      Icon: UserSVG,
      route: '/login',
      text: 'Signup'
    },
    {
      Icon: AllRecipeSVG,
      route: '/allrecipes',
      text: 'Recopes'
    }, {
      Icon: QuestionSVG,
      route: '/whykulturefresh',
      text: 'About us'
    }
  ]

  const CartComponeent = () => {
    return <div style={{
      position: 'relative'
    }} >
      <CartSvg />
      {isCartReady && <div className="text">
        <p>
          {cartObject.gettAllBoxCount()}
        </p>
      </div>}
    </div>
  }

  const navItemsLoggedIn = [
    {
      Icon: HistorySvg,
      route: '/history',
      text: 'Orders'
    }, {
      Icon: AllRecipeSVG,
      route: '/allrecipes',
      text: 'Recopes'
    }, {
      Icon: CartComponeent,
      onClick: () => {
        ///
        setCartShow(true)
      },
      text: 'Cart'

    }, {
      Icon: LogoutSVG,
      onClick: () => {
        ///
        AuthUtil.logout()
      },
      text: 'Logout'
    }
  ]


  return (
    <NavBarMobileComponent>
      {(AuthUtil.isLogedIn() ? navItemsLoggedIn : navItemsNotLoggedIn).map((data, index) => {
        const { Icon, route, onClick, text } = data
        return <div className='svg' onClick={() => {
          onClick ? onClick() : history.push(route)
        }} >
          <Icon />
          <p className="nav_text">
            {text}
          </p>
        </div>
      })}
    </NavBarMobileComponent>
  );
}
