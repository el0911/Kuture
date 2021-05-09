import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Main = styled.main`
  font-family: "Sen", sans-serif;

  @media (min-width: 300px) and (max-width: 600px) {
    .title {
      font-weight: bold;
      font-size: 25px;
      line-height: 36px;
      text-align: center;
      color: #aa614d;
    }
    .categories_div {
      display: flex;
      width: 95%;
      margin: auto;
    }
    .each_cat {
      width: 320px;
      height: 451px;
      background: #fafaef;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      display: block;
      margin: auto;
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
    .each_cat h4 {
      font-weight: bold;
      font-size: 23px;
      line-height: 30px;
      color: #aa614d;
      text-align: center;
      margin-top: 1rem;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: center;
      margin-top: 1.3rem;
      width: 45%;
    }
    .btn_div button {
      height: 55px;
      background: #ee4e2f;
      border-radius: 10px;
      border: none;
      color: #fff;
      font-weight: bold;
      font-size: 15px;
      text-align: center;
    }
  }
  @media (min-width: 600px) and (max-width: 960px) {
    .categories_div {
      display: flex;
      width: 95%;
      margin: auto;
    }
    .title {
      font-weight: bold;
      font-size: 30px;
      line-height: 48px;
      text-align: center;
      color: #aa614d;
    }
    .categories_div h4 {
      font-weight: bold;
      font-size: 20px;
      color: #aa614d;
      text-align: center;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: center;
      margin-top: 1rem;
    }
    .btn_div button {
      height: 55px;
      background: #ee4e2f;
      border-radius: 10px;
      border: none;
      color: #fff;
      font-weight: bold;
      font-size: 17px;
      text-align: center;
    }
  }

  @media (min-width: 960px) and (max-width: 1024px) {
    .categories_div {
      display: flex;
      width: 95%;
      margin: auto;
    }
    .title {
      font-weight: bold;
      font-size: 40px;
      line-height: 48px;
      text-align: center;
      color: #aa614d;
    }
    .categories_div h4 {
      font-weight: bold;
      font-size: 22px;
      color: #aa614d;
      text-align: center;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: center;
    }
    .btn_div button {
      width: 230px;
      height: 50px;
      background: #ee4e2f;
      border-radius: 10px;
      border: none;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
    }
  }

  @media (min-width: 1024px) {
    .categories_div {
      display: flex;
      width: 80%;
      margin: auto;
    }
    .title {
      font-weight: bold;
      font-size: 40px;
      line-height: 48px;
      text-align: center;
      color: #aa614d;
    }
    .categories_div h4 {
      font-weight: bold;
      font-size: 25px;
      color: #aa614d;
      text-align: center;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: center;
      margin-top: 2rem;
    }
    .btn_div button {
      height: 50px;
      background: #ee4e2f;
      border-radius: 10px;
      border: none;
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      text-align: center;
    }
  }
`;

export default function Categories({ categories }) {
  const history = useHistory();

  return (
    <Main>
      <h2 className="title">OUR CATEGORIES</h2>
      <div className="categories_div">
        {categories.map((category) => {
          return (
            <div className="btn_div" key={category.id}>
              <button
                onClick={() => {
                  history.push("/allrecipes");
                }}
              >
                {category.name}{" "}
              </button>
            </div>
          );
        })}
      </div>
    </Main>
  );
}
