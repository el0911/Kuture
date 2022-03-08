import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CartItem from "./cartItem.component";
import cartObject from "../utils/cart";
import { TrashSvg } from "../assets/svg";

const Main = styled.main`

position: fixed;
right: 0;
min-height: 100vh;
z-index: 4;
background: rgb(178 182 193 / 70%);
height: 100vh;
width: -webkit-fill-available;     
top: 0;

.box  {
  margin-bottom: 30px;
}

.box:last-child {
  margin-bottom: 300px;
}


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
    max-height: calc(80vh - 170px);
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
    width: calc(-30px + 100vw);
    background: white;
    padding-bottom: 10px;
   }
  }

`;

const Box = styled.div`

  .box-name{
    color:silver;
    margin: 0;
    width: -webkit-fill-available;
  }

  .title-content svg{
    cursor: pointer;
    fill:silver
  }

  .title-content svg:hover{
     fill:#EE4E2F
  }

  .line{
    border-bottom:1px solid silver;
    width:100%;
    height:1px;
  }

  .box-title{
    margin-bottom:20px
  }

  .box-items{
    width: 90%;
    margin-left: auto;
  }


  .title-content{
    display: flex;
    width: 100%;
    align-items: self-end;
  }


`

export default function Cart({ setCartShow, children, history }) {


  const [cart, setCart] = React.useState([])
  const [total, setTotal] = React.useState(0)
  const [togle, setToggle] = React.useState(0)

  useEffect(() => {
    
 
    cartObject.passUpdateFunction(setToggle)
    setCart(cartObject.getAllBoxes())
    let tempTotal = 0

    cartObject.allCartRaw.map(({ price, plan }) => {
      tempTotal = tempTotal + (price * (plan || 1))
    })

    setTotal(tempTotal)
  }, [togle,cartObject.allCartRaw.length])


  return (
    <Main>
      <div className="main" id='mainp'>
        <div className="close_div">
          {children}
        </div>
        <h1 className="each_itemh1">Added to your Cart</h1>
        <div className="cart_list">
          {cart && Object.keys(cart).map((box, j) => {
            return (<Box className='box' key={j}>

              <div className="box-title">
                <div className="title-content">
                  <p className='box-name' >
                    {`Box ${j+1}`}
                  </p>

                  <TrashSvg onClick={e=>{
                    cartObject.deleteBox(box)
                  }} />
                </div>

                <div className="line">

                </div>
              </div>
              <div className="box-items">
                {cart[box].map((item, i) => {
                  return (
                    <CartItem item={item} key={i} id={i} />
                  );
                })}
              </div>

            </Box>)
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


