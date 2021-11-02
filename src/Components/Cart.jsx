import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CartItem from "./cartItem.component";
import cartObject from "../utils/cart";

const Main = styled.main`

position: fixed;
right: 0;
min-height: 100vh;
z-index: 4;
background: rgb(178 182 193 / 70%);
height: 100vh;
width: -webkit-fill-available;     
top: 0;


  .main{
    width: 340px;
    position: absolute;
    height: 100vh;
    padding: 0 15px;
    right: 0;
    background: white;
  }
  
  height: 100vh;

  .each_itemh1{
    color: #10145F;
  }

  .close_div{
    text-align:left;
  }

  .cart_list{
    max-height: calc(80vh - 131px);
    overflow: scroll
  }

  .close_div img{
    width: 20px;
    text-align: left;
    height: 20px;
    margin-top: 25px;
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
    height: 100vh;
    padding: 20px 5px;
  }

  .buttn_div{
    text-align: center;
  }


  @media (max-width: 708px) {
   .main{
    width: calc(100vw - 30px);
    min-width: -webkit-fill-available;
   }


   .buttn_div{
    position: fixed;
    bottom: 0;
    z-index: 10;
   }
  }

`;

export default function Cart({setCartShow , children, history }) {

 
  const [cart, setCart] = React.useState([])
  const [total, setTotal] = React.useState(0)

  useEffect(() => {
    
    setCart(cartObject.allCart)
    let tempTotal = 0
    cartObject.allCart.map(({price,plan})=>{
      tempTotal = tempTotal + (price* plan)
    })

    setTotal(tempTotal)
  }, [])
  return (
    <Main>
      <div className="main">
           <div className="close_div">
            {children}
          </div>
          <h1 className="each_itemh1">Added to your Cart</h1>
          <div className="cart_list">
            {cart && cart.map((item, i) => {
              return (
                <CartItem item={item} key={i} id={i} />
              );
            })}{" "}
          </div>

          <div className="buttn_div">
            <div className="text_div">
              <h4>Total</h4>
              <h4> ${total} </h4>
            </div>
            <button
              onClick={() => {
  
                history.push('ordersummary');
                setCartShow(false)
              }}
            >
              PROCEED TO CHECKOUT
            </button>
         </div>
      </div>
    </Main>
  );
}


