import React from "react";
import Overlay from "../assets/svg/overlay.svg";
import OverlayM from "../assets/svg/overlayM.svg";
import styled from "styled-components";
 
const Div = styled.div`
  @media (min-width: 300px) and (max-width: 600px) {
    .modal_background {
      margin: auto;
      max-width: 85%;
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
      margin: auto;
      max-width: 85%;
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
      margin: auto;
      max-width: 85%;
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
      margin: auto;
      max-width: 85%;
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
      margin: auto;
      max-width: 60%;
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
`;

export default function EachRecipe({ produc }) {
  // let id = useParams();

  // let productID = parseInt(id.productId);

  // // console.log(productID,product.id, "params");
  // const eachprod = product;
  // const Eachproduct = product.find((p) => p.id === productID);
  // console.log(Eachproduct, "EACH");
  console.log(produc);

  return <h3>test</h3>;
  // return (
  //   <Div>
  //     <div className="modal_background">
  //       <h1>you suck</h1>
  //       <img
  //         src={closeImg}
  //         alt="close_img"
  //         className="close_img"
  //         onClick={() => {}}
  //       />
  //       return (
  //       <div className="modal_div">
  //         <h2 className="modal_title">{product.name}</h2>
  //         <img src={product.media.source} alt="modal_image" />
  //         <div className="each_ingre_div">
  //           <ul dangerouslySetInnerHTML={{ __html: product.description }}></ul>
  //         </div>
  //       </div>
  //       <div className="bttn_div">
  //         <button>ADD RECIPE</button>
  //       </div>
  //     </div>
  //   </Div>
  // );
}
