import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Main = styled.main`
  background: #fafaef;
  @media (min-width: 300px) and (max-width: 600px) {
    .cart_bodydiv {
      width: 100%;
      top: 5%;
      position: absolute;
      z-index: 10;
      background: inherit;
      left: 0%;
    }
    .each_itemh1 {
      text-align: center;
      font-size: 25px;
      color: #10145f;
    }
    .each_item img {
      width: 60%;
      margin: auto;
      display: block;
    }
    .text_div {
      display: flex;
      color: #10145f;
      justify-content: space-evenly;
    }
    .text_div h6 {
      font-size: 15px;
      font-weight: bold;
    }
    .text_div h4 {
      font-size: 19px;
      font-weight: 800;
    }
    .buttn_div {
      display: block;
      margin: auto;
      text-align: center;
      padding-bottom: 3rem;
      padding-top: 1rem;
    }
    .buttn_div button {
      background: #ffc850;
      border-radius: 31px;
      border: none;
      color: #10145f;
      width: 250px;
      height: 50px;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .close_div {
      display: block;
      margin: auto;
      margin-top: 1rem;
      text-align: right;
      width: 85%;
    }
  }

  @media (min-width: 600px) and (max-width: 960px) {
    .cart_bodydiv {
      width: 100%;
      top: 5%;
      position: absolute;
      z-index: 10;
      background: inherit;
      left: 0%;
    }
    .each_itemh1 {
      text-align: center;
      font-size: 25px;
      color: #10145f;
    }
    .each_item img {
      width: 40%;
      margin: auto;
      display: block;
    }
    .text_div {
      display: flex;
      color: #10145f;
      justify-content: space-evenly;
    }
    .text_div h6 {
      font-size: 15px;
      font-weight: bold;
    }
    .text_div h4 {
      font-size: 19px;
      font-weight: 800;
    }
    .buttn_div {
      display: block;
      margin: auto;
      text-align: center;
      padding-bottom: 3rem;
      padding-top: 1rem;
    }
    .buttn_div button {
      background: #ffc850;
      border-radius: 31px;
      border: none;
      color: #10145f;
      width: 250px;
      height: 50px;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .close_div {
      display: block;
      margin: auto;
      margin-top: 1rem;
      text-align: right;
      width: 85%;
    }
  }
  @media (min-width: 960px) and (max-width: 1024px) {
    .cart_bodydiv {
      width: 100%;
      top: 5%;
      position: absolute;
      z-index: 10;
      background: inherit;
      left: 0%;
    }
    .each_itemh1 {
      text-align: center;
      font-size: 25px;
      color: #10145f;
    }
    .each_item img {
      max-width: 40%;
      margin: auto;
      display: block;
    }
    .text_div {
      display: flex;
      color: #10145f;
      justify-content: space-evenly;
    }
    .text_div h6 {
      font-size: 15px;
      font-weight: bold;
    }
    .text_div h4 {
      font-size: 19px;
      font-weight: 800;
    }
    .buttn_div {
      display: block;
      margin: auto;
      text-align: center;
      padding-bottom: 3rem;
      padding-top: 1rem;
    }
    .buttn_div button {
      background: #ffc850;
      border-radius: 31px;
      border: none;
      color: #10145f;
      width: 250px;
      height: 50px;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .close_div {
      display: block;
      margin: auto;
      margin-top: 1rem;
      text-align: right;
      width: 85%;
    }
  }
  @media (min-width: 1024px) and (max-width: 1700px) {
    .cart_bodydiv {
      max-width: 55%;
      top: 0%;
      position: absolute;
      z-index: 10;
      background: inherit;
      left: 45%;
    }
    .each_itemh1 {
      text-align: center;
      font-size: 25px;
      color: #10145f;
    }
    .each_item img {
      width: 40%;
      margin: auto;
      display: block;
    }
    .text_div {
      display: flex;
      color: #10145f;
      justify-content: space-evenly;
    }
    .text_div h6 {
      font-size: 15px;
      font-weight: bold;
    }
    .text_div h4 {
      font-size: 19px;
      font-weight: 800;
    }
    .buttn_div {
      display: block;
      margin: auto;
      text-align: center;
      padding-bottom: 3rem;
      padding-top: 1rem;
    }
    .buttn_div button {
      background: #ffc850;
      border-radius: 31px;
      border: none;
      color: #10145f;
      width: 250px;
      height: 50px;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .close_div {
      display: block;
      margin: auto;
      margin-top: 1rem;
      text-align: right;
      width: 85%;
    }
  }
  @media (min-width: 1700px) {
    .cart_bodydiv {
      max-width: 55%;
      top: 0%;
      position: absolute;
      z-index: 10;
      background: inherit;
      left: 65%;
    }
    .each_itemh1 {
      text-align: center;
      font-size: 25px;
      color: #10145f;
    }
    .each_item img {
      width: 40%;
      margin: auto;
      display: block;
    }
    .text_div {
      display: flex;
      color: #10145f;
      justify-content: space-evenly;
    }
    .text_div h6 {
      font-size: 15px;
      font-weight: bold;
    }
    .text_div h4 {
      font-size: 19px;
      font-weight: 800;
    }
    .buttn_div {
      display: block;
      margin: auto;
      text-align: center;
      padding-bottom: 3rem;
      padding-top: 1rem;
    }
    .buttn_div button {
      background: #ffc850;
      border-radius: 31px;
      border: none;
      color: #10145f;
      width: 250px;
      height: 50px;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .close_div {
      display: block;
      margin: auto;
      margin-top: 1rem;
      text-align: right;
      width: 85%;
    }
  }
`;

export default function Cart({ cart }) {
  const history = useHistory();

  return (
    <Main>
      <div className="cart_bodydiv">
        <div className="close_div"></div>
        <h1 className="each_itemh1">Your Cart</h1>
        {cart.line_items.map((item) => {
          return (
            <div key={item.id} className="each_item">
              <img src={item.media.source} alt="each" />
              <div className="text_div">
                <h6>{item.name} </h6>
                <h6>{item.line_total.formatted_with_symbol} </h6>
              </div>
            </div>
          );
        })}
        <div className="text_div">
          <h4>Sub-Total</h4>
          <h4> {cart.subtotal.formatted_with_symbol} </h4>
        </div>
        <div className="buttn_div">
          <button
            onClick={() => {
              history.push("/ordersummary");
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </Main>
  );
}
