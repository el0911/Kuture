import React from "react";
import styled from "styled-components";
import carticon from "../assets/svg/cart.svg";
import Cart from "./Cart";
import Close from "../assets/svg/close(1).svg";
import AuthUtil from "../utils/auth";
import { useHistory } from "react-router-dom";
import cartObject from "../utils/cart";
import { CartContext } from "../providers/cart.provider";

const Li = styled.li`
  .whykulture {
    background: rgba(230, 230, 230, 0.5);
    border: 2px solid #10145f;
    border-radius: 11px;
    width: 183px;
    height: 35px;
    font-weight: bold;
    font-size: 20px;
    color: #ee4e2f;
    text-align: center;
    padding-top: 0.81rem;
    margin-right: 1rem;
  }
  .recipes {
    background: rgba(230, 230, 230, 0.5);
    border: 2px solid #10145f;
    border-radius: 11px;
    width: 143px;
    height: 35px;
    font-weight: bold;
    font-size: 20px;
    color: #ee4e2f;
    text-align: center;
    padding-top: 0.81rem;
    margin-right: 1rem;
  }
  .login {
    background: rgba(230, 230, 230, 0.5);
    border: 2px solid #10145f;
    border-radius: 11px;
    width: 116px;
    height: 35px;
    font-weight: bold;
    font-size: 20px;
    color: #ee4e2f;
    text-align: center;
    padding-top: 0.81rem;
  }
`;
const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #ee4e2f !important;
  ${Li}:hover & {
    background: #10145f;
    color: #ffffff;
    width: 143px;
    height: 35px;
  }
`;

const Nav = styled.nav`
  font-family: "Sen", sans-serif;

  .cart-home{
    display: flex;
    position: relative;
  }
  
.cart-home .text{
  position: absolute;
  height: 30px;
  width: 30px;
  background: white;
  border-radius: 50%;
  font-size: 18px;
  color: black;
  right: -25px;
  top: 13px;
}

.cart-home .text p{
  padding: 0;
  margin: 0;
  margin-top: 5px;
} 


 

  @media (min-width: 300px) and (max-width: 960px) {
    ul {
      display: none;
    }
  }
     ul {
      list-style: none;
      display: flex;
    }
    .whykulture {
      background: rgba(230, 230, 230, 0.5);
      border: 2px solid #10145f;
      border-radius: 11px;
      width: 183px;
      height: 35px;
      font-weight: bold;
      font-size: 20px;
      color: #ee4e2f;
      text-align: center;
      padding-top: 0.81rem;
      margin-right: 1rem;
    }
    .recipes {
      background: rgba(230, 230, 230, 0.5);
      border: 2px solid #10145f;
      border-radius: 11px;
      width: 143px;
      height: 35px;
      font-weight: bold;
      font-size: 20px;
      color: #ee4e2f;
      text-align: center;
      padding-top: 0.81rem;
      margin-right: 1rem;
    }
    .login {
      background: rgba(230, 230, 230, 0.5);
      border: 2px solid #10145f;
      border-radius: 11px;
      width: 116px;
      height: 35px;
      font-weight: bold;
      font-size: 20px;
      color: #ee4e2f;
      text-align: center;
      padding-top: 0.81rem;
    }
    a {
      text-decoration: none;
      cursor: pointer;
    }
  
  @media (min-width: 1024px) {
    ul {
      list-style: none;
      display: flex;
    }
    .whykulture {
      background: rgba(230, 230, 230, 0.5);
      border: 2px solid #10145f;
      border-radius: 11px;
      width: 173px;
      height: 35px;
      font-weight: bold;
      font-size: 16px;
      color: #ee4e2f;
      text-align: center;
      padding-top: 0.81rem;
      margin-right: 1rem;
    }
    .recipes {
      background: rgba(230, 230, 230, 0.5);
      border: 2px solid #10145f;
      border-radius: 11px;
      width: 135px;
      height: 35px;
      font-weight: bold;
      font-size: 16px;
      color: #ee4e2f;
      text-align: center;
      padding-top: 0.81rem;
      margin-right: 1rem;
    }
    .login {
      background: rgba(230, 230, 230, 0.5);
      border: 2px solid #10145f;
      border-radius: 11px;
      width: 110px;
      height: 35px;
      font-weight: bold;
      font-size: 16px;
      color: #ee4e2f;
      text-align: center;
      padding-top: 0.81rem;
    }
    .cart {
      width: 30px;
      padding-right: 8px;
      height: 35px;
      color: #ee4e2f;
      text-align: center;
      padding-top: 0.81rem;
      margin-right: 1rem;
      margin-left: 1rem;
      cursor: pointer;
    }
    a {
      text-decoration: none;
      cursor: pointer;
    }
 
  }

  ${Link}:hover & {
    color: #ffffff;
  }
`;

export default function Navbar({ cart, handleClick }) {

  const history = useHistory()
  const { isCartReady } = CartContext()

  return (
    <Nav>
      <ul style={{
        marginRight: '20px'
      }} >
        <Li onClick={e => {
          history.push('allrecipes')
        }} className="recipes">
          <Link  > Our recipes</Link>
        </Li>
        <Li onClick={e => {
          history.push('whykulturefresh')
        }} className="whykulture">
          <Link   >Why kulturefresh</Link>
        </Li>


        {!AuthUtil.isLogedIn() && <Li onClick={e => {
          history.push('login')
        }} className="login">
          <Link  >Login</Link>
        </Li>}


        {AuthUtil.isLogedIn() && <Li onClick={e => {
          history.push('history')
        }} className="whykulture">
          <Link   >History</Link>
        </Li>
        }



        {AuthUtil.isLogedIn() && <Li onClick={e => {
          AuthUtil.logout()
        }} className="login">
          <Link  >Logout</Link>
        </Li>}


 

        {AuthUtil.isLogedIn() && <Li className="cart" onClick={handleClick}>

          <div className='cart-home' >
            <img src={carticon} style={{
              width: '30px'
            }} alt="cart" />


            {isCartReady && <div className="text">
              <p>
                {cartObject.getAllCartItemCount()}
              </p>
            </div>}



          </div>

        </Li>}

      </ul>

      {/* {showcart && (
            <Cart cart={cart} showcart={showcart}>
              <img
                src={Close}
                style={{
                  width: '30px'
                }}
                alt="sidemenu"
                className="side_menuimg"
                onClick={() => {
                  handleClick(false);
                }}
              />
            </Cart>
          )} */}
    </Nav>
  );
}
