import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Main = styled.main`
  font-family: "Sen", sans-serif;

  @media (min-width: 300px) and (max-width: 600px) {
    .title {
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      text-align: center;
      color: #aa614d;
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
      margin-top: 5rem;
    }
    .btn_div button {
      width: 200px;
      height: 46.93px;
      background: #ee4e2f;
      border-radius: 10px;
      border: none;
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      text-align: center;
    }
  }
  @media (min-width: 600px) and (max-width: 960px) {
    .categories_div {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 3em;
      width: 80%;
      margin: auto;
      justify-content: center;
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
      margin-top: 3rem;
    }
    .btn_div button {
      width: 200px;
      height: 40px;
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
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 3em;
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
    }
    .btn_div button {
      width: 230px;
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

  @media (min-width: 1024px) {
    .categories_div {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 3em;
      width: 65%;
      margin: auto;
      justify-content: center;
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
      margin-top: 5rem;
    }
    .btn_div button {
      width: 230px;
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
            <div className="each_cat" key={category.id}>
              <h4>{category.name}</h4>
              <div className="btn_div">
                <button
                  onClick={() => {
                    history.push("/allrecipes");
                  }}
                >
                  VIEW RECIPES
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Main>
  );
}
