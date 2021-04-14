import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Line from "./images/totalline.svg";
import Navbar from "./Navbar";
import DeliveryInformation from "./DeliveryInformation";
import BackM from "./images/delivery_back.svg";
import BackL from "./images/deliv_backL.svg";
import Footer from "./Footer";
import CardInformation from "./CardInformation";

const Main = styled.main`
  background: #fafaef;
  color: #aa614d;
  @media (min-width: 300px) and (max-width: 600px) {
    .order_div {
      background: #ffffff;
      border: 1px solid rgba(169, 178, 193, 0.6);
      box-sizing: border-box;
      border-radius: 18px;
      width: 90%;
      margin: auto;
      margin-top: 3rem;
      padding-left: 5px;
      padding-right: 5px;
    }
    h4 {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
    }
    .name_amt_div {
      display: flex;
      justify-content: space-between;
    }
    .name_amt_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .serving_price_div {
      display: flex;
      justify-content: space-between;
    }
    .serving_price_div p {
      font-weight: normal;
      font-size: 13px;
      line-height: 18px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .shipping_div {
      display: flex;
      justify-content: space-between;
    }
    .shipping_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .tax_div {
      display: flex;
      justify-content: space-between;
    }
    .tax_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .total_div {
      display: flex;
      justify-content: space-between;
    }
    .total_div h5 {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .last_div {
      margin-top: 2rem;
      margin-bottom: 3rem;
    }
    .last_div img {
      width: -moz-available;
      width: -webkit-fill-available;
    }
    .footy_div {
      margin-top: -5rem;
      position: relative;
    }
  }
  @media (min-width: 600px) and (max-width: 960px) {
    .body_order {
      width: 90%;
      margin: auto;
    }
    .order_div {
      background: #ffffff;
      border: 1px solid rgba(169, 178, 193, 0.6);
      box-sizing: border-box;
      border-radius: 18px;
      width: 45%;
      margin-left: auto;
      margin-top: 1rem;
      padding-left: 5px;
      padding-right: 5px;
    }
    h4 {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: center;
      margin-bottom: 0.5rem;
      color: #aa614d;
    }
    .name_amt_div {
      display: flex;
      justify-content: space-between;
    }
    .name_amt_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .serving_price_div {
      display: flex;
      justify-content: space-between;
    }
    .serving_price_div p {
      font-weight: normal;
      font-size: 13px;
      line-height: 18px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .shipping_div {
      display: flex;
      justify-content: space-between;
    }
    .shipping_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .tax_div {
      display: flex;
      justify-content: space-between;
    }
    .tax_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .total_div {
      display: flex;
      justify-content: space-between;
    }
    .total_div h5 {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .last_div {
      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }
    .last_div img {
      width: -moz-available;
      width: -webkit-fill-available;
    }
    .footy_div {
      margin-top: -4rem;
      position: relative;
    }
  }
  @media (min-width: 960px) and (max-width: 1024px) {
    .background {
      display: block;
      background-image: url(${BackL});
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .order_div {
      background: #ffffff;
      border: 1px solid rgba(169, 178, 193, 0.6);
      box-sizing: border-box;
      border-radius: 18px;
      width: 30%;
      margin-left: auto;
      margin-top: 3rem;
      padding-left: 5px;
      padding-right: 5px;
    }
    .body_order {
      width: 90%;
      margin: auto;
    }
    h4 {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
    }
    .name_amt_div {
      display: flex;
      justify-content: space-between;
    }
    .name_amt_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .serving_price_div {
      display: flex;
      justify-content: space-between;
    }
    .serving_price_div p {
      font-weight: normal;
      font-size: 13px;
      line-height: 18px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .shipping_div {
      display: flex;
      justify-content: space-between;
    }
    .shipping_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .tax_div {
      display: flex;
      justify-content: space-between;
    }
    .tax_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .total_div {
      display: flex;
      justify-content: space-between;
    }
    .total_div h5 {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .last_div {
      margin-top: 2rem;
      margin-bottom: 3rem;
    }
    .last_div img {
      width: -moz-available;
      width: -webkit-fill-available;
    }
    .head_div {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: auto;
    }
    .footy_div {
      margin-top: -9rem;
      position: relative;
    }
  }
  @media (min-width: 1024px) and (max-width: 1700px) {
    .background {
      display: block;
      background-image: url(${BackL});
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .head_div {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: auto;
    }
    .body_order {
      width: 90%;
      margin: auto;
    }
    .order_div {
      background: #ffffff;
      border: 1px solid rgba(169, 178, 193, 0.6);
      box-sizing: border-box;
      border-radius: 18px;
      width: 30%;
      margin-left: auto;
      margin-top: 3rem;
      padding-left: 5px;
      padding-right: 5px;
    }
    h4 {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
    }
    .name_amt_div {
      display: flex;
      justify-content: space-between;
    }
    .name_amt_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .serving_price_div {
      display: flex;
      justify-content: space-between;
    }
    .serving_price_div p {
      font-weight: normal;
      font-size: 13px;
      line-height: 18px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .shipping_div {
      display: flex;
      justify-content: space-between;
    }
    .shipping_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .tax_div {
      display: flex;
      justify-content: space-between;
    }
    .tax_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .total_div {
      display: flex;
      justify-content: space-between;
    }
    .total_div h5 {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .last_div {
      margin-top: 2rem;
      margin-bottom: 3rem;
    }
    .last_div img {
      width: -moz-available;
      width: -webkit-fill-available;
    }
    .footy_div {
      margin-top: -9rem;
      position: relative;
    }
  }
  @media (min-width: 1700px) {
    .background {
      display: block;
      background-image: url(${BackL});
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      height: 155vh;
    }
    .head_div {
      display: flex;
      justify-content: space-between;
      max-width: 70%;
      margin: auto;
    }
    .body_order {
      width: 70%;
      margin: auto;
    }
    .order_div {
      background: #ffffff;
      border: 1px solid rgba(169, 178, 193, 0.6);
      box-sizing: border-box;
      border-radius: 18px;
      max-width: 30%;
      margin-left: auto;
      margin-top: 3rem;
      padding-left: 5px;
      padding-right: 5px;
    }
    h4 {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
    }
    .name_amt_div {
      display: flex;
      justify-content: space-between;
    }
    .name_amt_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .serving_price_div {
      display: flex;
      justify-content: space-between;
    }
    .serving_price_div p {
      font-weight: normal;
      font-size: 13px;
      line-height: 18px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .shipping_div {
      display: flex;
      justify-content: space-between;
    }
    .shipping_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .tax_div {
      display: flex;
      justify-content: space-between;
    }
    .tax_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .total_div {
      display: flex;
      justify-content: space-between;
    }
    .total_div h5 {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .last_div {
      margin-top: 2rem;
      margin-bottom: 3rem;
    }
    .last_div img {
      width: -moz-available;
      width: -webkit-fill-available;
    }
    .footy_div {
      margin-top: -9rem;
      position: relative;
    }
  }
`;

export default function OrderSummary({
  name,
  amt,
  serving,
  noofrecipes,
  priceperserving,
  shipping,
  tax,
  total,
}) {
  return (
    <Main>
      <div className="background">
        <div className="head_div">
          <Header />
          <Navbar />
        </div>
        <div className="body_order">
          <div className="order_div">
            <h4>Order Summary</h4>
            <div className="delivery_date">
              <p>First Delivery Date</p>
            </div>
            <div className="name_amt_div">
              <h5>{name} </h5>
              <h5>{amt}</h5>
            </div>
            <div className="serving_price_div">
              <div className="serving_div">
                <p>{serving}</p>
                <p>{noofrecipes}</p>
              </div>
              <p>{priceperserving}</p>
            </div>
            <div className="shipping_div">
              <h5>Shipping</h5>
              <h5>{shipping}</h5>
            </div>
            <div className="tax_div">
              <h5>Tax</h5>
              <h5>{tax}</h5>
            </div>
            <div className="last_div">
              <img src={Line} alt="line" />
              <div className="total_div">
                <h5>Total each per week</h5>
                <h5>{total}</h5>
              </div>
              <img src={Line} alt="line" />
            </div>
          </div>
        </div>
        <DeliveryInformation />
      </div>
      <div className="footy_div">
        <Footer />
      </div>
    </Main>
  );
}

OrderSummary.defaultProps = {
  id: 1,
  name: "The Couple Plan",
  amt: 40.99,
  serving: "Serving 2 people",
  noofrecipes: "3 recipes per week",
  priceperserving: "$8.99 per serving",
  shipping: "7.99",
  tax: "3.89",
  total: "52.99",
};
