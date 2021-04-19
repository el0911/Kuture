import React from "react";
import styled from "styled-components";
import Finger from "./images/finger_down.svg";
import Overlay from "./images/plan_back.svg";
import CoupleMenu from "./images/2servings.svg";
import FamilyMenu from "./images/4servings.svg";
import { useHistory } from "react-router-dom";
import Header from "./Header";

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
    .shipping_div {
      border-right: 2px solid #2f3676;
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
    .shipping_div {
      border-right: 2px solid #2f3676;
    }
    .shipping_div h4 {
      margin-right: 2rem;
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
    .shipping_div {
      border-right: 2px solid #2f3676;
    }
    .shipping_div h4 {
      margin-right: 2rem;
    }
  }
  @media (min-width: 1024px) and (max-width: 1700px) {
    .modal_background {
      position: fixed;
      z-index: 10;
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
      width: 60%;
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
    .shipping_div {
      border-right: 2px solid #2f3676;
    }
    .shipping_div h4 {
      margin-right: 2rem;
    }
  }
  @media (min-width: 1700px) {
    .modal_background {
      position: relative;
      z-index: 10;
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
    .shipping_div {
      border-right: 2px solid #2f3676;
    }
    .shipping_div h4 {
      margin-right: 2rem;
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
          <div className="modal_div"></div>
        </div>
      </div>
    </Main>
  );
}