import React,{ useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Close from "../assets/svg/close(1).svg";
import CartItem from "./cartItem.component";
import cartObject from "../utils/cart";

const Main = styled.main`
  position: absolute;
  right: 0;
  min-width: 340px;
  background: white;
  min-height: 100vh;
  top: 0;
  z-index:1;

  .each_itemh1{
    color: #10145F;
  }

  .close_div{
    text-align:left;
    padding:30px
  }

  .close_div img{
    width: 20px;
    text-align: left;
    height: 20px;
  }

  .buttn_div{
    z-index: 2;
    position:absolute;
    width: 100%;
    bottom:10px
  }

 .buttn_div button{
    height: 60px;
    width: 80%;
    background: #FFC850;
    border-radius: 16px;
    border: 0;
    font-family: Sen;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 32px;
    color: #10145F;
    bottom: 0;
  }

  .cart_bodydiv{
    padding-top: 20px;
    padding: 20px 5px;
  }

  .buttn_div{
    text-align: center;
  }
`;

export default function Cart({  onClose,children }) {
  const history = useHistory();
  const [cart,setCart] = React.useState([])

    useEffect(()=>{
      setCart(cartObject.allCart)
    },[])
  return (
    <Main>
      <div className="cart_bodydiv">
        <div className="close_div">
          {children}
        </div>
        <h1 className="each_itemh1">Added to your Cart</h1>
        {cart && cart.map((item,i) => {
          return (
            <CartItem item={item} key={i} id={i} />
          );
        })}{" "}
       
        <div className="buttn_div">
        <div className="text_div">
          <h4>Total</h4>
          <h4> ${89} </h4>
        </div>
          <button
            onClick={() => {
              history.push("/ordersummary");
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </Main>
  );
}


