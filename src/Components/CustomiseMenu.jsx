import React from "react";
import styled from "styled-components";
import Finger from "../assets/svg/finger_down.svg";
import Overlay from "../assets/svg/plan_back.svg";
import CoupleMenu from "../assets/svg/2servings.svg";
import FamilyMenu from "../assets/svg/4servings.svg";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Main = styled.main`
  background: fafaef;

  @media (min-width: 300px) and (max-width: 600px) {
    .modal_div {
      position: relative;
      z-index: 10;
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
    .footy_div {
    }
    .modal_div img {
      display: block;
      margin: auto;
    }
    .modal_background h2 {
      font-weight: bold;
      font-size: 27px;
      line-height: 36px;
      color: #c47357;
      margin-top: 2rem;
      text-align: center;
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
      padding-bottom: 2rem;
      padding-top: 2rem;
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
    .men_div {
      background: #fff;
      width: 90%;
      margin: auto;
      margin-top: 2rem;
      border-radius: 10px;
      padding-left: 10px;
      padding-top: 8px;
      display: flex;
      justify-content: center;
    }
    .finger_down {
      width: 2rem !important;
      margin: 0 !important;
    }
    .men_div p {
      margin-right: 1rem;
      font-weight: bold;
      font-size: 17px;
      line-height: 23px;
      color: #ff4128;
    }
    .family_menu {
      background: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px 10px 0px 0px;
      width: 90%;
      margin: auto;
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
    .family_menu img {
      width: 7rem;
      height: 7rem;
    }
    .couple_menu {
      background: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px 10px 0px 0px;
      width: 90%;
      margin: auto;
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
    .couple_menu img {
      width: 9rem;
      height: 9rem;
    }
    .couple_text h4 {
      font-weight: bold;
      font-size: 21px;
      line-height: 30px;
      width: 93%;
      margin: auto;
      color: #ee4e2f;
      margin-bottom: 1rem;
      text-align: center;
      margin-top: 1.5rem;
    }
    .couple_text p {
      font-weight: normal;
      font-size: 15px;
      line-height: 18px;
      width: 93%;
      margin: auto;
      color: #c47357;
    }
    .norecipes_div {
      width: 93%;
      margin: auto;
    }
    .norecipes_div h4 {
      font-weight: bold;
      font-size: 17px;
      line-height: 20px;
      color: #e85d5d;
    }
    .btn_non {
      color: #aa614d;
      background: #ffffff;
      border: 1px solid #2f3676;
      box-sizing: border-box;
      border-radius: 100%;
      margin-right: 1rem;
      font-size: 20px;
      cursor: pointer;
    }
    .btn_active {
      color: #fff;
      background: #ffced6;
      border: 1px solid #2f3676;
      box-sizing: border-box;
      border-radius: 100%;
      margin-right: 1rem;
      font-size: 20px;
      cursor: pointer;
    }
    .ship_serving_div {
      display: flex;
      width: 93%;
      justify-content: space-around;
      margin: auto;
      margin-top: 1rem;
    }
    .ship_serving_div h4 {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #e85d5d;
    }
    .shipping_hr {
      color: #2f3676;
    }
    .shipping_div h4 {
      margin-right: 2rem;
    }
  }

  @media (min-width: 600px) and (max-width: 960px) {
    .modal_div {
      position: relative;
      z-index: 10;
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
    .modal_background h2 {
      font-weight: bold;
      font-size: 27px;
      line-height: 36px;
      color: #c47357;
      margin-top: 6rem;
      margin-bottom: 2rem;
      text-align: center;
    }
    .men_div {
      background: #fff;
      width: 60%;
      margin: auto;
      margin-top: 2rem;
      border-radius: 10px;
      padding-left: 10px;
      padding-top: 8px;
      display: flex;
      justify-content: center;
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
      padding-top: 3rem;
      padding-bottom: 1.5rem;
    }
    .bttn_div button {
      background: #ee4e2f;
      border-radius: 31px;
      border: none;
      color: #fff;
      width: 180px;
      height: 39px;
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
    .finger_down {
      width: 2rem !important;
      margin: 0 !important;
    }
    .men_div p {
      margin-right: 2rem;
      font-weight: bold;
      font-size: 19px;
      line-height: 23px;
      color: #ff4128;
    }
    .family_menu {
      background: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px 10px 0px 0px;
      width: 60%;
      margin: auto;
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
    .family_menu img {
      width: 9rem;
      height: 9rem;
    }
    .couple_menu {
      background: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px 10px 0px 0px;
      width: 60%;
      margin: auto;
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
    .couple_menu img {
      width: 9rem;
      height: 9rem;
    }
    .couple_text h4 {
      font-weight: bold;
      font-size: 21px;
      line-height: 30px;
      width: 93%;
      margin: auto;
      color: #ee4e2f;
      margin-bottom: 1rem;
      text-align: center;
      margin-top: 1.5rem;
    }
    .couple_text p {
      font-weight: normal;
      font-size: 15px;
      line-height: 18px;
      width: 93%;
      margin: auto;
      color: #c47357;
    }
    .norecipes_div {
      width: 93%;
      margin: auto;
    }
    .norecipes_div h4 {
      font-weight: bold;
      font-size: 17px;
      line-height: 20px;
      color: #e85d5d;
    }
    .btn_non {
      color: #aa614d;
      background: #ffffff;
      border: 1px solid #2f3676;
      box-sizing: border-box;
      border-radius: 100%;
      margin-right: 1rem;
      font-size: 20px;
      cursor: pointer;
    }
    .btn_active {
      color: #fff;
      background: #ffced6;
      border: 1px solid #2f3676;
      box-sizing: border-box;
      border-radius: 100%;
      margin-right: 1rem;
      font-size: 20px;
      cursor: pointer;
    }
    .ship_serving_div {
      display: flex;
      width: 93%;
      justify-content: space-around;
      margin: auto;
    }
    .ship_serving_div h4 {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #e85d5d;
    }
    .shipping_hr {
      color: #2f3676;
    }
    .shipping_div h4 {
      margin-right: 2rem;
    }
  }
  @media (min-width: 960px) and (max-width: 1024px) {
    .modal_background {
      position: relative;
      z-index: 10;
      width: 100%;
      overflow: auto;
      background-image: url(${Overlay});
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: top;
    }
    .modal_background h2 {
      font-weight: bold;
      font-size: 27px;
      line-height: 36px;
      color: #c47357;
      margin-top: 6rem;
      margin-bottom: 2rem;
      text-align: center;
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
      padding-bottom: 2rem;
      padding-top: 1.5rem;
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
    .men_div {
      background: #fff;
      width: 60%;
      margin: auto;
      margin-top: 2rem;
      border-radius: 10px;
      padding-left: 10px;
      padding-top: 8px;
      display: flex;
      justify-content: center;
    }
    .both_menu {
      display: flex;
    }
    .finger_down {
      width: 2rem !important;
      margin: 0 !important;
    }
    .men_div p {
      margin-right: 2rem;
      font-weight: bold;
      font-size: 19px;
      line-height: 23px;
      color: #ff4128;
    }
    .family_menu {
      background: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px 10px 0px 0px;
      width: 60%;
      margin: auto;
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
    .family_menu img {
      width: 9rem;
      height: 9rem;
    }
    .couple_menu {
      background: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px 10px 0px 0px;
      width: 60%;
      margin: auto;
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
    .couple_menu img {
      width: 9rem;
      height: 9rem;
    }
    .couple_text h4 {
      font-weight: bold;
      font-size: 21px;
      line-height: 30px;
      width: 93%;
      margin: auto;
      color: #ee4e2f;
      margin-bottom: 1rem;
      text-align: center;
      margin-top: 1.5rem;
    }
    .couple_text p {
      font-weight: normal;
      font-size: 15px;
      line-height: 18px;
      width: 93%;
      margin: auto;
      color: #c47357;
    }
    .norecipes_div {
      width: 93%;
      margin: auto;
    }
    .norecipes_div h4 {
      font-weight: bold;
      font-size: 17px;
      line-height: 20px;
      color: #e85d5d;
    }
    .btn_non {
      color: #aa614d;
      background: #ffffff;
      border: 1px solid #2f3676;
      box-sizing: border-box;
      border-radius: 100%;
      margin-right: 1rem;
      font-size: 20px;
      cursor: pointer;
    }
    .btn_active {
      color: #fff;
      background: #ffced6;
      border: 1px solid #2f3676;
      box-sizing: border-box;
      border-radius: 100%;
      margin-right: 1rem;
      font-size: 20px;
      cursor: pointer;
    }
    .ship_serving_div {
      display: flex;
      width: 93%;
      justify-content: space-around;
      margin: auto;
    }
    .ship_serving_div h4 {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #e85d5d;
    }
    .shipping_hr {
      color: #2f3676;
    }
    .shipping_div h4 {
      margin-right: 2rem;
    }
    .head_div {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: auto;
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
      z-index: 10;
      width: 100%;
      margin: auto;
      overflow: auto;
      background-image: url(${Overlay});
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: top;
    }
    .modal_background h2 {
      font-weight: bold;
      font-size: 37px;
      line-height: 36px;
      color: #c47357;
      margin-top: 6rem;
      margin-bottom: 2rem;
      text-align: center;
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
      padding-bottom: 2rem;
      padding-top: 1.5rem;
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
    .both_menu {
      display: flex;
    }
    .finger_down {
      width: 2rem !important;
      margin: 0 !important;
    }
    .men_div p {
      margin-right: 2rem;
      font-weight: bold;
      font-size: 19px;
      line-height: 23px;
      color: #ff4128;
    }
    .men_div {
      background: #fff;
      width: 25%;
      margin: auto;
      margin-top: 2rem;
      border-radius: 10px;
      padding-left: 10px;
      padding-top: 8px;
      display: flex;
      justify-content: center;
    }
    .family_menu {
      background: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px 10px 0px 0px;
      width: 35%;
      margin: auto;
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
    .family_menu img {
      width: 9rem;
      height: 9rem;
    }
    .couple_menu {
      background: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px 10px 0px 0px;
      width: 35%;
      margin: auto;
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
    .couple_menu img {
      width: 9rem;
      height: 9rem;
    }
    .couple_text h4 {
      font-weight: bold;
      font-size: 21px;
      line-height: 30px;
      width: 93%;
      margin: auto;
      color: #ee4e2f;
      margin-bottom: 1rem;
      text-align: center;
      margin-top: 1.5rem;
    }
    .couple_text p {
      font-weight: normal;
      font-size: 15px;
      line-height: 18px;
      width: 93%;
      margin: auto;
      color: #c47357;
    }
    .norecipes_div {
      width: 93%;
      margin: auto;
    }
    .norecipes_div h4 {
      font-weight: bold;
      font-size: 17px;
      line-height: 20px;
      color: #e85d5d;
    }
    .btn_non {
      color: #aa614d;
      background: #ffffff;
      border: 1px solid #2f3676;
      box-sizing: border-box;
      border-radius: 100%;
      margin-right: 1rem;
      font-size: 20px;
      cursor: pointer;
    }
    .btn_active {
      color: #fff;
      background: #ffced6;
      border: 1px solid #2f3676;
      box-sizing: border-box;
      border-radius: 100%;
      margin-right: 1rem;
      font-size: 20px;
      cursor: pointer;
    }
    .ship_serving_div {
      display: flex;
      width: 85%;
      justify-content: space-around;
      margin: auto;
      margin-top: 0.7rem;
    }
    .ship_serving_div h4 {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #e85d5d;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }
    .shipping_hr {
      color: #2f3676;
    }
    .shipping_div h4 {
      margin-right: 2rem;
      margin-bottom: 0.5rem;
      margin-top: 0.8rem;
    }
  }
  @media (min-width: 1700px) {
    .head_div {
      display: flex;
      justify-content: space-between;
      max-width: 70%;
      margin: auto;
    }
    .modal_div {
      position: relative;
      z-index: 10;
      max-width: 100%;
      overflow: auto;
      margin: auto;
      background-image: url(${Overlay});
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: top;
    }
    .modal_background h2 {
      font-weight: bold;
      font-size: 37px;
      line-height: 36px;
      color: #c47357;
      margin-top: 6rem;
      margin-bottom: 2rem;
      text-align: center;
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
      padding-bottom: 2rem;
      padding-top: 1.5rem;
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
    .men_div {
      background: #fff;
      width: 20%;
      margin: auto;
      margin-top: 2rem;
      border-radius: 10px;
      padding-left: 10px;
      padding-top: 8px;
      display: flex;
      justify-content: center;
    }
    .both_menu {
      display: flex;
      max-width: 80%;
      margin: auto;
    }
    .finger_down {
      width: 2rem !important;
      margin: 0 !important;
    }
    .men_div p {
      margin-right: 2rem;
      font-weight: bold;
      font-size: 19px;
      line-height: 23px;
      color: #ff4128;
    }
    .family_menu {
      background: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px 10px 0px 0px;
      max-width: 20%;
      margin: auto;
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
    .family_menu img {
      width: 9rem;
      height: 9rem;
    }
    .couple_menu {
      background: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px 10px 0px 0px;
      max-width: 20%;
      margin: auto;
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
    .couple_menu img {
      width: 9rem;
      height: 9rem;
    }
    .couple_text h4 {
      font-weight: bold;
      font-size: 21px;
      line-height: 30px;
      width: 93%;
      margin: auto;
      color: #ee4e2f;
      margin-bottom: 1rem;
      text-align: center;
      margin-top: 1.5rem;
    }
    .couple_text p {
      font-weight: normal;
      font-size: 15px;
      line-height: 18px;
      width: 93%;
      margin: auto;
      color: #c47357;
    }
    .norecipes_div {
      width: 93%;
      margin: auto;
    }
    .norecipes_div h4 {
      font-weight: bold;
      font-size: 17px;
      line-height: 20px;
      color: #e85d5d;
    }
    .btn_non {
      color: #aa614d;
      background: #ffffff;
      border: 1px solid #2f3676;
      box-sizing: border-box;
      border-radius: 100%;
      margin-right: 1rem;
      font-size: 20px;
      cursor: pointer;
    }
    .btn_active {
      color: #fff;
      background: #ffced6;
      border: 1px solid #2f3676;
      box-sizing: border-box;
      border-radius: 100%;
      margin-right: 1rem;
      font-size: 20px;
      cursor: pointer;
    }
    .ship_serving_div {
      display: flex;
      width: 85%;
      justify-content: space-around;
      margin: auto;
      margin-top: 0.7rem;
    }
    .ship_serving_div h4 {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #e85d5d;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }
    .shipping_hr {
      color: #2f3676;
    }
    .shipping_div h4 {
      margin-right: 2rem;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }
  }
`;

export default function CustomiseMenu() {


  const history = useHistory();
  return (
    <Main>
      <div className="">
        <Header />
        <div className="modal_background">
          <h2>SELECT YOUR PLAN</h2>
          <div className="modal_div">
            <div className="men_div">
              <p>Select your customised menu</p>
              <img src={Finger} className="finger_down" alt="finger_down" />
            </div>
            <div>
              <div className="both_menu">
                <div className="couple_menu">
                  <img src={CoupleMenu} alt="couple_menu" />
                  <div className="couple_text">
                    <h4>The couple - 2 Servings</h4>
                    <p>
                      Choose from an ever-changing mix of meat, fish, Beyond
                      Meat, WW Approved, Diabetes Friendly recipes and
                      health-conscious offerings.
                    </p>
                  </div>
                  <div className="norecipes_div">
                    <h4>No of recipes per week</h4>
                    <div className="btns_div">
                      <button className="btn_non">1</button>
                      <button className="btn_non">2</button>
                      <button className="btn_active">3</button>
                    </div>
                  </div>
                  <div className="ship_serving_div">
                    <div className="shipping_div">
                      <h4>Shipping</h4>
                      <h4>$10.99</h4>
                    </div>
                    <hr className="shipping_hr" />
                    <div className="serving_div">
                      <h4>Per Serving</h4>
                      <h4>$9.99</h4>
                    </div>
                  </div>
                  <div className="bttn_div">
                    <button
                      onClick={() => {
                        alert("You selected the couple plan");
                        history.push("/allrecipes");
                      }}
                    >
                      SELECT PLAN
                    </button>
                  </div>
                </div>
                <div className="family_menu">
                  <img src={FamilyMenu} alt="family_menu" />
                  <div className="couple_text">
                    <h4>Da Family - 4 Servings</h4>
                    <p>
                      Choose from an ever-changing mix of meat, fish, Beyond
                      Meat, WW Approved, Diabetes Friendly recipes and
                      health-conscious offerings.
                    </p>
                  </div>
                  <div className="norecipes_div">
                    <h4>No of recipes per week</h4>
                    <div className="btns_div">
                      <button className="btn_non">1</button>
                      <button className="btn_non">2</button>
                      <button className="btn_active">3</button>
                    </div>
                  </div>
                  <div className="ship_serving_div">
                    <div className="shipping_div">
                      <h4>Shipping</h4>
                      <h4>$10.99</h4>
                    </div>
                    <hr className="shipping_hr" />
                    <div className="serving_div">
                      <h4>Per Serving</h4>
                      <h4>$9.99</h4>
                    </div>
                  </div>
                  <div className="bttn_div">
                    <button
                      onClick={() => {
                        alert("You selected the family plan");
                        history.push("/allrecipes");
                      }}
                    >
                      SELECT PLAN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footy_div">
          <Footer />
        </div>
      </div>
    </Main>
  );
}
