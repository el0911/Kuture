import React from "react";
import styled from "styled-components";
import Overlay from "./images/plan_back.svg";
import Header from "./Header";
import Navbar from "./Navbar";
import FavRec from "./images/favrecipe1.jpg";
import Trash from "./images/trash.svg";
import Footer from "./Footer";

const Main = styled.main`
  background: fafaef;
  font-family: "Sen", sans-serif;

  @media (min-width: 300px) and (max-width: 600px) {
    .modal_div {
      position: relative;
      top: 0;
      width: 100%;
      overflow: auto;
      background-image: url(${Overlay});
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: top;
      margin-top: 2rem;
    }
    h4 {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #ee4e2f;
      padding-top: 2rem;
    }
    .deli_div {
      background: #fafaef;
      border-radius: 15px;
      width: 90%;
      margin: auto;
      padding-left: 7px;
      padding-right: 7px;
      color: #aa614d;
    }
    h5 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
      padding-top: 1rem;
      margin-bottom: 0.7rem;
    }
    .each_img {
      display: block;
      margin: auto;
      text-align: center;
      width: -moz-available;
      width: -webkit-fill-available;
    }
    .edit_button {
      background: transparent;
      border: none;
      color: #ee4e2f;
      margin-top: 3rem;
    }
    .first_div {
      display: block;
    }
    .text_div p {
      font-size: 14px;
    }
    .name_div {
      display: flex;
      justify-content: space-between;
    }
    .card_div {
      display: flex;
      justify-content: space-between;
    }
    .couples_div p {
      font-size: 14px;
    }
    .couples_div {
      display: flex;
      justify-content: space-between;
    }
    .card_div p {
      margin-bottom: 0.5rem;
      margin-right: 1rem;
      margin-top: 3rem;
      font-size: 14px;
    }
    .total_div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 3rem;
    }
    .total_div p {
      margin-right: 2rem;
    }
    .chosen_rec_div {
      background: #fafaef;
      border-radius: 15px;
      width: 90%;
      margin: auto;
    }
    .chosen_rec_div h6 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
      padding-top: 2rem;
      margin-bottom: 2rem;
    }

    .mapped_recipes {
      width: 70%;
      margin: auto;
    }
    .mapped_recipes p {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
    }
    .mapped {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
    }
    .mappedimg {
      width: auto;
      display: block;
      margin-left: auto;
    }
    .bttn_div {
      display: block;
      margin: auto;
      text-align: center;
      padding-bottom: 2rem;
      padding-top: 0.5rem;
    }
    .bttn_div button {
      background: #ee4e2f;
      border-radius: 31px;
      border: none;
      color: #fff;
      width: 280px;
      font-size: 17px;
      height: 57px;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
  @media (min-width: 600px) and (max-width: 960px) {
    .modal_div {
      position: relative;
      left: 0;
      top: 0;
      overflow: auto;
      background-image: url(${Overlay});
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: top;
    }
    h4 {
      font-weight: bold;
      font-size: 25px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #ee4e2f;
      padding-top: 2rem;
    }
    .deli_div {
      background: #fafaef;
      border-radius: 15px;
      width: 70%;
      margin: auto;
      padding-left: 7px;
      padding-right: 7px;
      color: #aa614d;
    }
    h5 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
      padding-top: 1rem;
      margin-bottom: 0.7rem;
    }
    .each_img {
      display: block;
      margin: auto;
      text-align: center;
    }
    edit_button {
      background: transparent;
      border: none;
      color: #ee4e2f;
      margin-top: 3rem;
    }
    .first_div {
      display: flex;
      justify-content: space-between;
    }
    .name_div {
      display: flex;
    }
    .card_div {
      display: flex;
    }
    .card_div p {
      margin-bottom: 0.5rem;
      margin-right: 1rem;
      margin-top: 3rem;
    }
    .total_div {
      display: flex;
      margin-bottom: 3rem;
    }
    .total_div p {
      margin-right: 2rem;
    }
    .chosen_rec_div {
      background: #fafaef;
      border-radius: 15px;
      width: 70%;
      margin: auto;
    }
    .chosen_rec_div h6 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
      padding-top: 2rem;
      margin-bottom: 2rem;
    }

    .mapped_recipes {
      width: 70%;
      margin: auto;
    }
    .mapped_recipes p {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
    }
    .mapped {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
    }
    .mappedimg {
      width: auto;
      display: block;
      margin-left: auto;
    }
    .bttn_div {
      display: block;
      margin: auto;
      text-align: center;
      padding-bottom: 2rem;
      padding-top: 0.5rem;
    }
    .bttn_div button {
      background: #ee4e2f;
      border-radius: 31px;
      border: none;
      color: #fff;
      width: 380px;
      font-size: 17px;
      height: 57px;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
  @media (min-width: 960px) and (max-width: 1024px) {
    .modal_div {
      position: relative;
      left: 0;
      top: 0;
      overflow: auto;
      background-image: url(${Overlay});
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: top;
    }
    h4 {
      font-weight: bold;
      font-size: 25px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #ee4e2f;
      padding-top: 2rem;
    }
    h5 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
      padding-top: 1rem;
      margin-bottom: 0.7rem;
    }
    .edit_button {
      background: transparent;
      border: none;
      color: #ee4e2f;
      margin-top: 3rem;
    }
    .each_img {
      display: block;
      margin: auto;
      text-align: center;
    }
    .first_div {
      display: flex;
      justify-content: space-between;
    }
    .name_div {
      display: flex;
    }
    .card_div {
      display: flex;
    }
    .card_div p {
      margin-bottom: 0.5rem;
      margin-right: 1rem;
      margin-top: 3rem;
    }
    .total_div {
      display: flex;
      margin-bottom: 3rem;
    }
    .total_div p {
      margin-right: 2rem;
    }
    .chosen_rec_div {
      background: #fafaef;
      border-radius: 15px;
      width: 70%;
      margin: auto;
    }
    .chosen_rec_div h6 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
      padding-top: 2rem;
      margin-bottom: 2rem;
    }

    .mapped_recipes {
      width: 70%;
      margin: auto;
    }
    .mapped_recipes p {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
    }
    .mapped {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
    }
    .mappedimg {
      width: auto;
      display: block;
      margin-left: auto;
    }
    .bttn_div {
      display: block;
      margin: auto;
      text-align: center;
      padding-bottom: 2rem;
      padding-top: 0.5rem;
    }
    .bttn_div button {
      background: #ee4e2f;
      border-radius: 31px;
      border: none;
      color: #fff;
      width: 380px;
      font-size: 17px;
      height: 57px;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1700px) {
    .head_div {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: auto;
    }
    .modal_div {
      position: relative;
      left: 0;
      top: 0;
      overflow: auto;
      background-image: url(${Overlay});
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: top;
    }
    .deli_div {
      background: #fafaef;
      border-radius: 15px;
      max-width: 50%;
      margin: auto;
      padding-left: 7px;
      padding-right: 7px;
      color: #aa614d;
    }
    .couples_div {
      display: flex;
      justify-content: space-between;
    }
    .chosen_rec_div {
      background: #fafaef;
      border-radius: 15px;
      max-width: 50%;
      margin: auto;
    }
    h4 {
      font-weight: bold;
      font-size: 27px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #ee4e2f;
      padding-top: 2rem;
    }
    h5 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
      padding-top: 1rem;
      margin-bottom: 0.7rem;
    }
    .each_img {
      display: block;
      margin: auto;
      text-align: center;
    }
    .edit_button {
      background: transparent;
      border: none;
      color: #ee4e2f;
      margin-top: 3rem;
    }
    .first_div {
      display: flex;
      justify-content: space-around;
    }
    .name_div {
      display: flex;
    }
    .card_div {
      display: flex;
      max-width: 85%;
      margin: auto;
    }
    .card_div p {
      margin-bottom: 0.5rem;
      margin-right: 1rem;
      margin-top: 3rem;
    }
    .total_div {
      display: flex;
      margin-bottom: 3rem;
      max-width: 85%;
      margin: auto;
    }
    .total_div p {
      margin-right: 2rem;
      font-size: 20px;
      font-weight: bold;
    }
    .chosen_rec_div {
      background: #fafaef;
      border-radius: 15px;
      width: 70%;
      margin: auto;
    }
    .chosen_rec_div h6 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
      padding-top: 2rem;
      margin-bottom: 2rem;
    }

    .mapped_recipes {
      max-width: 70%;
      margin: auto;
    }
    .mapped_recipes p {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
    }
    .mapped {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      max-width: 70%;
    }
    .mappedimg {
      width: auto;
      display: block;
      margin-left: auto;
    }
    .bttn_div {
      display: block;
      margin: auto;
      text-align: center;
      padding-bottom: 2rem;
      padding-top: 0.5rem;
    }
    .bttn_div button {
      background: #ee4e2f;
      border-radius: 31px;
      border: none;
      color: #fff;
      width: 380px;
      font-size: 17px;
      height: 57px;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
  @media (min-width: 1700px) {
    .head_div {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: auto;
    }
    .modal_div {
      position: relative;
      left: 0;
      top: 0;
      overflow: auto;
      background-image: url(${Overlay});
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: top;
    }
    .deli_div {
      background: #fafaef;
      border-radius: 15px;
      max-width: 50%;
      margin: auto;
      padding-left: 7px;
      padding-right: 7px;
      color: #aa614d;
    }
    .chosen_rec_div {
      background: #fafaef;
      border-radius: 15px;
      max-width: 50%;
      margin: auto;
    }
    h4 {
      font-weight: bold;
      font-size: 27px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #ee4e2f;
      padding-top: 2rem;
    }
    h5 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
      padding-top: 1rem;
      margin-bottom: 0.7rem;
    }
    .each_img {
      display: block;
      margin: auto;
      text-align: center;
    }
    .edit_button {
      background: transparent;
      border: none;
      color: #ee4e2f;
      margin-top: 3rem;
    }
    .first_div {
      display: flex;
      justify-content: space-around;
    }
    .name_div {
      display: flex;
    }
    .couples_div {
      display: flex;
      justify-content: space-between;
    }
    .card_div {
      display: flex;
      width: 70%;
      margin: auto;
    }
    .card_div p {
      margin-bottom: 0.5rem;
      margin-right: 1rem;
      margin-top: 3rem;
    }
    .total_div {
      display: flex;
      margin-bottom: 3rem;
      width: 70%;
      margin: auto;
    }
    .total_div p {
      margin-right: 2rem;
      font-weight: bold;
      font-size: 23px;
    }
    .chosen_rec_div {
      background: #fafaef;
      border-radius: 15px;
      width: 70%;
      margin: auto;
    }
    .chosen_rec_div h6 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
      padding-top: 2rem;
      margin-bottom: 2rem;
    }

    .mapped_recipes {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 3em;
      max-width: 65%;
      margin: auto;
      justify-content: center;
    }
    .mapped_recipes p {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
    }
    .mapped {
      padding-bottom: 2rem;
      margin: auto;
      margin-bottom: 2rem;
    }
    .mapped img {
      width: auto;
      display: block;
      margin-left: auto;
    }
    .bttn_div {
      display: block;
      margin: auto;
      text-align: center;
      padding-bottom: 2rem;
      padding-top: 0.5rem;
    }
    .bttn_div button {
      background: #ee4e2f;
      border-radius: 31px;
      border: none;
      color: #fff;
      width: 380px;
      font-size: 17px;
      height: 57px;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
`;

export default function CompletedOrder({ name, address, pnumber, cardno }) {
  const Recipes = [
    {
      id: 1,
      image: `${FavRec}`,
      name: "FRIED RICE ONE",
    },
    {
      id: 2,
      image: `${FavRec}`,
      name: "FRIED RICE ONE",
    },
    {
      id: 3,
      image: `${FavRec}`,
      name: "FRIED RICE ONE",
    },
    {
      id: 4,
      image: `${FavRec}`,
      name: "FRIED RICE ONE",
    },
  ];
  return (
    <Main>
      <div className="head_div">
        <Header />
        <Navbar />
      </div>
      <h4>YOUR ORDER</h4>
      <div className="modal_div">
        <div className="deli_div">
          <h5>Delivery Information</h5>
          <div className="first_div">
            <div className="name_div">
              <div className="text_div">
                <p>{name}</p>
                <p>{address}</p>
                <p>{pnumber}</p>
              </div>
              <div className="btn_div">
                <button className="edit_button">EDIT</button>
              </div>
            </div>
            <div className="couples_div">
              <div>
                <p>The Couple Plan</p>
                <p>3 recipes per week</p>
              </div>
              <div className="btn_div">
                <button className="edit_button">EDIT</button>
              </div>
            </div>
          </div>
          <div className="card_div">
            <p>{cardno}</p>
            <div className="btn_div">
              <button className="edit_button">EDIT</button>
            </div>
          </div>
          <div className="total_div">
            <p>Total each week</p>
            <p>$52.99</p>
          </div>
        </div>
        <div className="chosen_rec_div">
          <h6>Your Selected Recipes</h6>
          <div className="mapped_recipes">
            {Recipes.map((eachrecipe) => {
              return (
                <div key={eachrecipe.id} className="mapped">
                  <img
                    src={eachrecipe.image}
                    alt="eachrecipe"
                    className="each_img"
                  />
                  <p>{eachrecipe.name}</p>
                  <img src={Trash} className="mappedimg" alt="trash" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="bttn_div">
          <button>PLACE YOUR ORDER</button>
        </div>
      </div>
      <Footer />
    </Main>
  );
}
CompletedOrder.defaultProps = {
  name: "Anika Ross",
  address: "2307 Oak Street , Old Forge NY 13420",
  pnumber: "(315) -36-9-5970",
  cardno: "5139  **** **** **67",
};
