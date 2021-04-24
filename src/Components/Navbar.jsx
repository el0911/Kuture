import React from "react";
import styled from "styled-components";
import Cart from "./images/cart.svg";

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
  @media (min-width: 300px) and (max-width: 960px) {
    ul {
      display: none;
    }
  }
  @media (min-width: 960px) (max-width: 1024px) {
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
      width: 1.52rem;
      padding-right: 8px;
      height: 35px;
      color: #ee4e2f;
      text-align: center;
      padding-top: 0.81rem;
      margin-right: 1rem;
      margin-left: 1rem;
    }
    a {
      text-decoration: none;
      cursor: pointer;
    }
    .cart img {
      width: 2rem;
      padding-right: 8px;
      padding-top: 1px;
    }
  }

  ${Link}:hover & {
    color: #ffffff;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <ul>
        <Li className="recipes">
          <Link href="/ourrecipes">Our recipes</Link>
        </Li>
        <Li className="whykulture">
          <Link href="/whykulturefresh">Why kulturefresh</Link>
        </Li>
        <Li className="login">
          <Link href="/login">Login</Link>
        </Li>
        <Li className="cart">
          <img src={Cart} alt="cart" />
        </Li>
      </ul>
    </Nav>
  );
}
