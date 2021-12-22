import React from "react";
import styled from "styled-components";
import carticon from "../assets/svg/cart.svg";
import Cart from "./Cart";
import Close from "../assets/svg/close(1).svg";
import AuthUtil from "../utils/auth";
import { useHistory } from "react-router-dom";
import cartObject from "../utils/cart";
import { CartContext } from "../providers/cart.provider";
import { CartSvg, DropDownSvg, LogoSVG } from "../assets/svg";

 
const NavBarMobileComponent = styled.nav` 
  display:grid;
  grid-column: auto;
  width: 100vw;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
}

.svg{
  align-items: center;
    display: inline-grid;
    text-align: center;
}

.svg svg{
  margin:auto
}
`;

export default function HeeaderMobile({ cart, handleClick }) {

  const history = useHistory()
  const { isCartReady } = CartContext()

  const navItems = [
    {

    },  {
      
    },
      {
      
    }
  ]

  return (
    <NavBarMobileComponent>
      {navItems.map(( data,index )=>{
          return <div className='svg'>
            <CartSvg/>
          </div>
      })}
    </NavBarMobileComponent>
  );
}
