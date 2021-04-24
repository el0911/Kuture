import React from "react";
import styled from "styled-components";
import BackM from "./images/delivery_new.svg";

const Main = styled.main`
  font-family: "Sen", sans-serif;

  @media (min-width: 300px) and (max-width: 600px) {
    .delivery_div {
      display: block;
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
      background-image: url(${BackM});
    }
    input {
      background: #ffffff;
      border: 1px solid #c47357;
      box-sizing: border-box;
      border-radius: 10px;
      height: 45px;
      margin-bottom: 1.5rem;
      width: -moz-available;
      width: -webkit-fill-available;
      padding-inline-start: 9px;
    }
    .h4_ {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: left;
      color: #ee4e2f;
      padding-top: 2rem;
    }
    form {
      width: 90%;
      padding-top: 3 rem;
      margin: auto;
    }
    .first_inputs {
      display: block;
    }
    .second_inputs {
      display: block;
    }
    .third_inputs {
      display: block;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: center;
      margin-top: 2rem;
      padding-bottom: 3rem;
    }
    .btn_div button {
      width: 250px;
      height: 50px;
      background: #ee4e2f;
      border-radius: 33px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      border: none;

      letter-spacing: 0.02em;
    }
  }
  @media (min-width: 600px) and (max-width: 960px) {
    .delivery_div {
      display: block;
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
      background-image: url(${BackM});
    }
    input {
      background: #ffffff;
      border: 1px solid #c47357;
      box-sizing: border-box;
      border-radius: 10px;
      height: 45px;
      margin-bottom: 1.5rem;
      width: -moz-available;
      width: -webkit-fill-available;
      padding-inline-start: 9px;
      margin-right: 1rem;
      margin-left: 1rem;
    }
    .h4_ {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: left;
      color: #ee4e2f;
      padding-top: 2rem;
    }
    form {
      width: 90%;
      padding-top: 8rem;
      margin: auto;
    }
    .first_inputs {
      display: flex;
    }
    .second_inputs {
      display: flex;
    }
    .third_inputs {
      display: flex;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: center;
      margin-top: 2rem;
      padding-bottom: 3rem;
    }
    .btn_div button {
      width: 250px;
      height: 50px;
      background: #ee4e2f;
      border-radius: 33px;
      color: #fff;
      font-weight: 900;
      font-size: 16px;
      border: none;
      letter-spacing: 0.1em;
    }
  }
  @media (min-width: 960px) and (max-width: 1024px) {
    .delivery_div {
      display: block;
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
    }
    input {
      background: #ffffff;
      border: 1px solid #c47357;
      box-sizing: border-box;
      border-radius: 10px;
      height: 45px;
      margin-bottom: 1.5rem;
      width: -moz-available;
      width: -webkit-fill-available;
      padding-inline-start: 9px;
      margin-right: 1rem;
      margin-left: 1rem;
    }
    .h4_ {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: left;
      color: #ee4e2f;
      padding-top: 2rem;
    }
    form {
      width: 90%;
      padding-top: 8rem;
      margin: auto;
    }
    .first_inputs {
      display: flex;
    }
    .second_inputs {
      display: flex;
    }
    .third_inputs {
      display: flex;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: center;
      margin-top: 2rem;
      padding-bottom: 3rem;
    }
    .btn_div button {
      width: 250px;
      height: 50px;
      background: #ee4e2f;
      border-radius: 33px;
      color: #fff;
      font-weight: 900;
      font-size: 16px;
      border: none;
      letter-spacing: 0.1em;
    }
  }
  @media (min-width: 1024px) and (max-width: 1700px) {
    .delivery_div {
      display: block;
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
    }
    input {
      background: #ffffff;
      border: 1px solid #c47357;
      box-sizing: border-box;
      border-radius: 10px;
      height: 45px;
      margin-bottom: 1.5rem;
      width: 30%;
      padding-inline-start: 9px;
      margin-right: 1rem;
      margin-left: 1rem;
    }
    .h4_ {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: left;
      color: #ee4e2f;
      padding-top: 2rem;
    }
    form {
      width: 90%;
      padding-top: 11rem;
      margin: auto;
    }
    .first_inputs {
      display: flex;
    }
    .second_inputs {
      display: flex;
    }
    .third_inputs {
      display: flex;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: left;
      margin-top: 2rem;
      padding-bottom: 3rem;
    }
    .btn_div button {
      width: 320px;
      height: 50px;
      background: #ee4e2f;
      border-radius: 33px;
      color: #fff;
      font-weight: 900;
      font-size: 16px;
      border: none;
      letter-spacing: 0.1em;
      margin-left: 1rem;
    }
  }
  @media (min-width: 1700px) {
    .delivery_div {
      width: 70%;
      margin: auto;
      margin-top: auto;
      margin-top: -2rem;
    }
    input {
      background: #ffffff;
      border: 1px solid #c47357;
      box-sizing: border-box;
      border-radius: 10px;
      height: 45px;
      margin-bottom: 1.5rem;
      width: 50%;
      padding-inline-start: 9px;
      margin-right: 1rem;
      margin-left: 1rem;
    }
    .h4_ {
      font-weight: 900;
      font-size: 27px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: left;
      color: #ee4e2f;
      padding-top: 2rem;
      width: 95%;
      margin: auto;
      margin-bottom: auto;
      margin-bottom: 2rem;
    }
    form {
      width: 40%;
      margin-right: auto;
      background: #fafafa;
      border-radius: 15px;
      margin-bottom: 2rem;
      padding-left: 10px;
    }
    .first_inputs {
      display: flex;
    }
    .first_input {
      display: block;
    }
    .second_inputs {
      display: flex;
    }
    .second_input {
      display: block;
    }
    .third_inputs {
      display: flex;
    }
    .third_input {
      display: block;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: left;
      margin-top: 1rem;
      padding-bottom: 1.5rem;
      margin-left: 1rem;
    }
    .btn_div button {
      width: 250px;
      height: 50px;
      background: #ee4e2f;
      border-radius: 33px;
      color: #fff;
      font-weight: 900;
      font-size: 16px;
      border: none;
      letter-spacing: 0.1em;
    }
  }
`;

export default function DeliveryInformation() {
  return (
    <Main>
      <div className="delivery_div">
        <div>
          <form>
            <h4 className="h4_">Delivery Information</h4>
            <div className="first_inputs">
              <input placeholder="Full Name" />
              <input placeholder="Email Address" />
            </div>
            <div className="second_inputs">
              <input placeholder="Phone Number" />
              <input placeholder="Address" />
            </div>
            <div className="third_inputs">
              <input placeholder="Postal Code" />
              <input placeholder="State" />
            </div>
            <div className="btn_div">
              <button>PROCEED TO BILLING</button>
            </div>
          </form>
          <form>
            <h4 className="h4_">Billing Information</h4>
            <div className="first_input">
              <label>Card Number</label>
              <input />
            </div>
            <div className="first_inputs">
              <div className="second_input">
                <label>Expiration Date</label>
                <input placeholder="" />
              </div>
              <div>
                <div className="third_input">
                  <label>CVV</label>
                  <input placeholder="" />
                </div>
              </div>
            </div>

            <div className="btn_div">
              <button>PROCEED TO CHECKOUT</button>
            </div>
          </form>
        </div>
      </div>
    </Main>
  );
}
