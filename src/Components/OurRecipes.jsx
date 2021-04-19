import React from "react";
import styled from "styled-components";
import AllRecipesBack from "./images/allrecipes_back.svg";
import AllRecipesBackI from "./images/allrecipes_bacI.svg";
import Header from "./Header";
import Egusi from "./images/Egusi.jpg";
import LargeBanner from "./images/largebanner.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Modal from "./Modal";
import { useHistory } from "react-router-dom";
import { commerce } from "../lib/Commerce";

const Main = styled.main`
  font-family: "Sen", sans-serif;
  option {
    font-family: "Sen", sans-serif;
    font-weight: 800;
    font-size: 15px;
  }
  @media (min-width: 300px) and (max-width: 600px) {
    .background_mobile {
      background-image: url(${AllRecipesBack});
      position: relative;
      width: 100%;
      height: 84vh;
      background-repeat: no-repeat;
      background-position-y: top;
      margin-top: -2rem;
    }
    .header_div {
      padding-top: 1rem;
    }
    .title_div {
      width: 90%;
      margin: auto;
      text-align: center;
      margin-top: 8rem;
    }
    .title_div h2 {
      font-weight: bold;
      font-size: 28px;
      color: #cf301b;
    }
    .title_div h6 {
      font-weight: bold;
      font-size: 17px;
      color: #cf301b;
      margin-bottom: 5px;
      margin-top: 10px;
    }
    .title_div p {
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #cf301b;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: center;
      margin-top: 4rem;
    }
    .btn_div button {
      background: #ee4e2f;
      border: 4px solid #ffffff;
      border-radius: 18px;
      width: 250px;
      height: 55px;
      color: #fff;
      font-weight: bold;
      font-size: 19px;
      letter-spacing: 3px;
    }
    .recipes_div_h5 {
      font-weight: bold;
      font-size: 19px;
      line-height: 36px;
      color: #aa614d;
      text-align: center;
    }
    .each_recipe {
      width: 90%;
      margin: auto;
      text-align: center;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      background: #fafaef;
      border-radius: 10px;
      margin-bottom: 4rem;
      padding-bottom: 2.5rem;
    }
    .rec_text {
      display: flex;
      justify-content: center;
    }
    .name {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #10145f;
      text-align: center;
      padding-right: 0.7rem;
      border-right: 2px solid #10145f;
    }
    .duration {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #10145f;
      display: flex;
      text-align: center;
      margin-left: 0.7rem;
    }

    .bttn_div {
      display: block;
      margin: auto;
      text-align: center;
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
    .select_div {
      display: none;
    }
  }
  @media (min-width: 600px) and (max-width: 960px) {
    .background_mobile {
      background-image: url(${AllRecipesBackI});
      position: relative;
      width: auto;
      background-repeat: no-repeat;
      background-position-y: top;
      margin-top: -2rem;
      background-size: contain;
      height: 53vh;
    }
    .header_div {
      padding-top: 1rem;
    }
    .title_div {
      width: 90%;
      margin: auto;
      text-align: center;
      margin-top: 8rem;
    }
    .title_div h2 {
      font-weight: bold;
      font-size: 28px;
      color: #ae5d29;
    }
    .title_div h6 {
      font-weight: bold;
      font-size: 17px;
      color: #cf301b;
      margin-bottom: 5px;
      margin-top: 10px;
    }
    .title_div p {
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #cf301b;
    }
    select::-ms-expand {
      display: none;
    }
    .btn_div {
      display: none;
    }
    .select_drop {
      display: none;
    }
    .recipes_div {
      display: grid;
      grid-template-columns: auto auto auto;
    }
    .recipes_div_h5 {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      color: #aa614d;
      text-align: center;
    }
    .each_recipe {
      margin: auto;
      text-align: center;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      background: #fafaef;
      border-radius: 10px;
      margin-bottom: 4rem;
      padding-bottom: 2.5rem;
      width: 40%;
    }
    .rec_text {
      display: flex;
      justify-content: center;
    }
    .name {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #10145f;
      text-align: center;
      padding-right: 0.7rem;
      border-right: 2px solid #10145f;
    }
    .each_recipe img {
      width: -moz-available;
    }
    .duration {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #10145f;
      display: flex;
      text-align: center;
      margin-left: 0.7rem;
    }

    .bttn_div {
      display: block;
      margin: auto;
      text-align: center;
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
  }
  @media (min-width: 960px) and (max-width: 1024px) {
    .background_mobile {
      background-image: url(${LargeBanner});
      position: relative;
      width: auto;
      background-repeat: no-repeat;
      background-position-y: top;
      margin-top: -2rem;
      background-size: cover;
      height: 84vh;
    }
    .header_div {
      padding-top: 1rem;
    }
    .title_div {
      width: 90%;
      margin: auto;
      text-align: center;
      margin-top: 8rem;
    }
    .title_div h2 {
      font-weight: bold;
      font-size: 28px;
      color: #cf301b;
    }
    .title_div h6 {
      font-weight: bold;
      font-size: 17px;
      color: #ae5d29;
      margin-bottom: 5px;
      margin-top: 10px;
    }
    .title_div p {
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #cf301b;
    }
    select::-ms-expand {
      display: none;
    }
    .btn_div {
      display: none;
    }
    .select_drop {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #10145f;
      display: block;
      width: 200px;
      height: 45px;
      margin: 5px 0px;
      font-size: 13px;
      background-color: #fff;
      border: none;
      word-break: normal;
      font-weight: bold;
      padding: 5px 5px;
    }
    .recipes_div {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: center;
    }
    .recipes_div_h5 {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      color: #aa614d;
      text-align: center;
    }
    .each_recipe {
      width: 90%;
      margin: auto;
      text-align: center;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      background: #fafaef;
      border-radius: 10px;
      margin-bottom: 4rem;
      padding-bottom: 2.5rem;
    }
    .rec_text {
      display: flex;
      justify-content: center;
    }
    .name {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #10145f;
      text-align: center;
      padding-right: 0.7rem;
      border-right: 2px solid #10145f;
    }
    .duration {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #10145f;
      display: flex;
      text-align: center;
      margin-left: 0.7rem;
    }

    .bttn_div {
      display: block;
      margin: auto;
      text-align: center;
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
  }
  @media (min-width: 1024px) and (max-width: 1800px) {
    .background_mobile {
      background-image: url(${LargeBanner});
      position: relative;
      width: auto;
      background-repeat: no-repeat;
      background-position-y: top;
      margin-top: -2rem;
      background-size: cover;
      height: 120vh;
    }
    .header_div {
      padding-top: 1rem;
    }
    .title_div {
      max-width: 80%;
      margin: auto;
      text-align: center;
      margin-top: 4rem;
    }
    .title_div h2 {
      font-weight: bold;
      font-size: 40px;
      line-height: 48px;
      color: #cf301b;
      margin-bottom: 3rem;
    }
    .title_div h6 {
      font-weight: bold;
      font-size: 30px;
      color: #cf301b;
      margin-bottom: 5px;
      margin-top: 10px;
      text-align: left;
    }
    .title_div p {
      font-weight: normal;
      font-size: 21px;
      line-height: 19px;
      text-align: left;
      color: #cf301b;
    }
    select::-ms-expand {
      display: none;
    }
    .btn_div {
      display: none;
    }
    .select_div {
      margin-top: 2rem;
      margin-bottom: 4rem;
    }
    .select_drop {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #10145f;
      display: block;
      width: 200px;
      height: 45px;
      margin: 5px 0px;
      font-size: 15px;
      background-color: #fff;
      border: none;
      word-break: normal;
      font-weight: bold;
      padding: 5px 10px;
      border-radius: 7px;
    }
    .recipes_div {
      display: grid;
      grid-template-columns: auto auto auto;
      max-width: 75%;
      margin: auto;
      grid-gap: 2em;
      justify-content: center;
    }
    .recipes_div_h5 {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      color: #aa614d;
      text-align: center;
    }
    .each_recipe {
      width: 25%;
      margin: auto;
      text-align: center;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      background: #fafaef;
      border-radius: 10px;
      margin-bottom: 4rem;
      padding-bottom: 2.5rem;
    }
    .each_recipe img {
      width: -moz-available;
    }
    .each_recipe img {
      width: -moz-available;
      width: -webkit-fill-available;
    }
    .rec_text {
      display: flex;
      justify-content: center;
    }
    .name {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #10145f;
      text-align: center;
      padding-right: 0.7rem;
      border-right: 2px solid #10145f;
    }
    .duration {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #10145f;
      display: flex;
      text-align: center;
      margin-left: 0.7rem;
    }

    .bttn_div {
      display: block;
      margin: auto;
      text-align: center;
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
    .heading_div {
      display: flex;
      width: 90%;
      margin: auto;
      justify-content: space-between;
      margin-top: 2rem;
    }
    .nav_div {
      margin-top: 2rem;
    }
  }
  @media (min-width: 1800px) {
    .background_mobile {
      background-image: url(${LargeBanner});
      position: relative;
      width: auto;
      background-repeat: no-repeat;
      background-position-y: top;
      margin-top: -2rem;
      background-size: cover;
      height: 123vh;
    }
    .header_div {
      padding-top: 1rem;
    }
    .title_div {
      max-width: 65%;
      margin: auto;
      text-align: center;
      margin-top: 4rem;
    }
    .title_div h2 {
      font-weight: bold;
      font-size: 40px;
      line-height: 48px;
      color: #cf301b;
      margin-bottom: 3rem;
    }
    .title_div h6 {
      font-weight: bold;
      font-size: 30px;
      color: #cf301b;
      margin-bottom: 5px;
      margin-top: 10px;
      text-align: left;
    }
    .title_div p {
      font-weight: normal;
      font-size: 21px;
      line-height: 19px;
      text-align: left;
      color: #cf301b;
    }
    select::-ms-expand {
      display: none;
    }
    .btn_div {
      display: none;
    }
    .select_div {
      margin-top: 2rem;
      margin-bottom: 4rem;
    }
    .select_drop {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #10145f;
      display: block;
      width: 200px;
      height: 45px;
      margin: 5px 0px;
      font-size: 15px;
      background-color: #fff;
      border: none;
      word-break: normal;
      font-weight: bold;
      padding: 5px 10px;
      border-radius: 7px;
    }
    .recipes_div {
      display: grid;
      grid-template-columns: auto auto auto;
      max-width: 80%;
      margin: auto;
      grid-gap: 3rem;
    }
    .recipes_div_h5 {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      color: #aa614d;
      text-align: center;
    }
    .each_recipe {
      text-align: center;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      background: #fafaef;
      border-radius: 10px;
      margin-bottom: 4rem;
      padding-bottom: 2.5rem;
    }
    .each_recipe img {
      width: 45%;
      max-height: 60%;
    }
    .rec_text {
      display: flex;
      justify-content: center;
    }
    .name {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #10145f;
      text-align: center;
      padding-right: 0.7rem;
      border-right: 2px solid #10145f;
    }
    .duration {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #10145f;
      display: flex;
      text-align: center;
      margin-left: 0.7rem;
    }

    .bttn_div {
      display: block;
      margin: auto;
      text-align: center;
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
    .heading_div {
      display: flex;
      width: 90%;
      margin: auto;
      justify-content: space-between;
      margin-top: 2rem;
    }
    .nav_div {
      margin-top: 2rem;
    }
  }
`;

export default function OurRecipes() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const history = useHistory();
  const [products, setProducts] = React.useState([]);
  const [categ, setCateg] = React.useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  React.useEffect(() => {
    fetchProducts();
    console.log(products, "products");
  }, []);

  return (
    <Main>
      <div className="background_mobile">
        <div className="heading_div">
          <div className="header_div">
            <Header />
          </div>
          <div className="nav_div">
            <Navbar />
          </div>
        </div>
        <div className="title_div">
          <h2>ALL RECIPES</h2>
          <div className="select_div">
            {/* <select className="select_drop">
              {categ.map((cat) => {
                return (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                );
              })}
            </select> */}
          </div>
          <h6>Everything you need for your all meals</h6>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.{" "}
          </p>
        </div>
        <div className="btn_div">
          <button>START COOKING!</button>
        </div>
      </div>
      <div>
        <h5 className="recipes_div_h5">Menu for 20th Feb. - 26th Feb. 2021</h5>
        <div className="recipes_div">
          {products.map((rec) => {
            return (
              <div
                className="each_recipe"
                onClick={() => {
                  let prodID = localStorage.setItem("prodid", rec.id);
                  commerce.products
                    .retrieve(prodID)
                    .then((product) => console.log(product.name));
                  console.log("clicked", prodID);
                }}
              >
                <img src={rec.media.source} alt="egusi" />
                <div className="rec_text">
                  <p className="name">{rec.name}</p>
                  <p className="duration">{rec.price.formatted_with_symbol} </p>
                </div>
                <div className="bttn_div">
                  <button
                    onClick={() => {
                      alert("added to cart");
                      history.push("/allrecipes");
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </Main>
  );
}
