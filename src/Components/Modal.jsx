import React from "react";
import Overlay from "./images/overlay.svg";
import OverlayM from "./images/overlayM.svg";
import styled from "styled-components";
import Recipes from "./Recipe";
import closeImg from "./images/close(1).svg";

const Div = styled.div`
  @media (min-width: 300px) and (max-width: 600px) {
    .modal_background {
      position: fixed;
      z-index: 10;
      left: 18px;
      top: 0;
      width: 100%;
      overflow: auto;
      background-image: url(${OverlayM});
      width: 90%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: top;
    }
    .modal_title {
      font-style: normal;
      font-weight: bold;
      font-size: 21px;
      text-align: center;
      line-height: 48px;
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
      color: #ee4e2f;
    }
    .modal_div img {
      display: block;
      margin: auto;
    }
    .each_ingre_div h4 {
      font-weight: bold;
      font-size: 20px;
      line-height: 29px;

      color: #fafaef;
    }
    .each_ingre_div {
      width: 90%;
      margin: auto;
    }
    .each_ingre_div h5 {
      font-weight: bold;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      color: #fafaef;
    }
    .each_ingre_div p {
      font-weight: normal;
      font-size: 15px;
      line-height: 23px;
      color: #fafaef;
    }
    ul {
      list-style: none;
      color: #fafaef;
      padding: 0;
      font-size: 15px;
    }

    .bttn_div {
      display: block;
      margin: auto;
      text-align: center;
      margin-bottom: 3rem;
    }
    .bttn_div button {
      background: #ee4e2f;
      border-radius: 31px;
      border: none;
      color: #fff;
      width: 180px;
      height: 50px;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .close_img {
      margin-top: 1.5rem;
      display: block;
      margin-left: auto;
      width: 9%;
      padding-right: 1rem;
      cursor: pointer;
    }
  }
  @media (min-width: 600px) and (max-width: 960px) {
    .modal_background {
      position: fixed;
      z-index: 10;
      left: 0;
      top: 0;
      width: 100%;
      overflow: auto;
      background-image: url(${Overlay});
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: top;
    }
    .modal_title {
      font-style: normal;
      font-weight: bold;
      font-size: 27px;
      line-height: 48px;
      text-align: center;
      color: #ee4e2f;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    .modal_div img {
      display: block;
      margin: auto;
      width: 50%;
    }
    .each_ingre_div h4 {
      font-weight: bold;
      font-size: 20px;
      line-height: 29px;

      color: #fafaef;
    }
    .each_ingre_div {
      width: 90%;
      margin: auto;
    }
    .each_ingre_div h5 {
      font-weight: bold;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      color: #fafaef;
    }
    .each_ingre_div p {
      font-weight: normal;
      font-size: 15px;
      line-height: 23px;
      color: #fafaef;
    }
    ul {
      list-style: none;
      color: #fafaef;
      padding: 0;
      font-size: 15px;
    }

    .bttn_div {
      display: block;
      margin: auto;
      text-align: center;
      margin-bottom: 3rem;
    }
    .bttn_div button {
      background: #ee4e2f;
      border-radius: 31px;
      border: none;
      color: #fff;
      width: 180px;
      height: 50px;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .close_img {
      margin-top: 1.5rem;
      display: block;
      margin-left: auto;
      width: 4%;
      padding-right: 3rem;
      cursor: pointer;
    }
  }
  @media (min-width: 960px) and (max-width: 1024px) {
    .modal_background {
      position: fixed;
      z-index: 10;
      left: 50%;
      top: 50%;
      width: 85%;
      overflow: auto;
      background-image: url(${Overlay});
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: top;
    }
    .modal_title {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 48px;
      margin-top: 2rem;
      margin-bottom: 2rem;
      text-align: center;
      color: #ee4e2f;
    }
    .modal_div img {
      display: block;
      margin: auto;
      width: 50%;
    }
    .each_ingre_div h4 {
      font-weight: bold;
      font-size: 20px;
      line-height: 29px;

      color: #fafaef;
    }
    .each_ingre_div {
      width: 90%;
      margin: auto;
    }
    .each_ingre_div h5 {
      font-weight: bold;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      color: #fafaef;
    }
    .each_ingre_div p {
      font-weight: normal;
      font-size: 15px;
      line-height: 23px;
      color: #fafaef;
    }
    ul {
      list-style: none;
      color: #fafaef;
      padding: 0;
      font-size: 15px;
    }

    .bttn_div {
      display: block;
      margin: auto;
      text-align: center;
      margin-bottom: 3rem;
    }
    .bttn_div button {
      background: #ee4e2f;
      border-radius: 31px;
      border: none;
      color: #fff;
      width: 180px;
      height: 50px;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .close_img {
      margin-top: 1.5rem;
      display: block;
      margin-left: auto;
      width: 4%;
      padding-right: 3rem;
      cursor: pointer;
    }
  }
  @media (min-width: 1024px) and (max-width: 1700px) {
    .modal_background {
      position: fixed;
      z-index: 10;
      top: 50%;
      left: 50%;
      width: 85%;
      overflow: auto;
      background-image: url(${Overlay});
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: top;
    }
    .modal_title {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 48px;
      margin-top: 2rem;
      margin-bottom: 2rem;
      text-align: center;
      color: #ee4e2f;
    }
    .modal_div img {
      display: block;
      margin: auto;
      width: 30%;
    }
    .each_ingre_div h4 {
      font-weight: bold;
      font-size: 20px;
      line-height: 29px;

      color: #fafaef;
    }
    .each_ingre_div {
      width: 90%;
      margin: auto;
    }
    .each_ingre_div h5 {
      font-weight: bold;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      color: #fafaef;
    }
    .each_ingre_div p {
      font-weight: normal;
      font-size: 15px;
      line-height: 23px;
      color: #fafaef;
    }
    ul {
      list-style: none;
      color: #fafaef;
      padding: 0;
      font-size: 15px;
    }

    .bttn_div {
      display: block;
      margin: auto;
      text-align: center;
      margin-bottom: 3rem;
    }
    .bttn_div button {
      background: #ee4e2f;
      border-radius: 31px;
      border: none;
      color: #fff;
      width: 180px;
      height: 50px;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .close_img {
      margin-top: 1.5rem;
      display: block;
      margin-left: auto;
      width: 2%;
      padding-right: 3rem;
      cursor: pointer;
    }
  }
  @media (min-width: 1700px) {
    .modal_background {
      position: fixed;
      z-index: 10;
      top: 50%;
      left: 50%;
      max-width: 60%;
      overflow: auto;
      background-image: url(${Overlay});
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: top;
    }
    .modal_title {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 48px;
      margin-top: 2rem;
      margin-bottom: 2rem;
      text-align: center;
      color: #ee4e2f;
    }
    .modal_div img {
      display: block;
      margin: auto;
      width: 30%;
    }
    .each_ingre_div h4 {
      font-weight: bold;
      font-size: 20px;
      line-height: 29px;

      color: #fafaef;
    }
    .each_ingre_div {
      width: 90%;
      margin: auto;
    }
    .each_ingre_div h5 {
      font-weight: bold;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      color: #fafaef;
    }
    .each_ingre_div p {
      font-weight: normal;
      font-size: 15px;
      line-height: 23px;
      color: #fafaef;
    }
    ul {
      list-style: none;
      color: #fafaef;
      padding: 0;
      font-size: 15px;
    }

    .bttn_div {
      display: block;
      margin: auto;
      text-align: center;
      margin-bottom: 3rem;
    }
    .bttn_div button {
      background: #ee4e2f;
      border-radius: 31px;
      border: none;
      color: #fff;
      width: 180px;
      height: 50px;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .close_img {
      margin-top: 1.5rem;
      display: block;
      margin-left: auto;
      width: 2%;
      padding-right: 3rem;
      cursor: pointer;
    }
  }
`;

export default function Modal({ modalOpen }) {
  return (
    <Div>
      <div className="modal_background">
        <img
          src={closeImg}
          alt="close_img"
          className="close_img"
          onClick={() => {}}
        />
        {Recipes.map((recipe) => {
          const {
            name,
            image,
            rec_text,
            recipe_title,
            Needed,
            Ingredients_title,
            ingredients,
            preparation,
            prepare_steps,
          } = recipe;
          return (
            <div className="modal_div">
              <h2 className="modal_title">{name}</h2>
              <img src={image} alt="modal_image" />
              <div className="each_ingre_div">
                <h4> {recipe_title} </h4>
                <p> {rec_text} </p>
                <h5>{Needed} </h5>
                <h4> {Ingredients_title} </h4>
                {ingredients.map((each_ingre) => {
                  return (
                    <ul>
                      <li> {each_ingre} </li>
                    </ul>
                  );
                })}
                <h4>{preparation} </h4>
                {prepare_steps.map((step) => {
                  return (
                    <ul>
                      <li>{step} </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="bttn_div">
          <button>ADD RECIPE</button>
        </div>
      </div>
    </Div>
  );
}
