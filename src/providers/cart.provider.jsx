import React, {useEffect, createContext, useContext } from "react";
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Close from "../assets/svg/close(1).svg";
import Cart from "../Components/Cart";
import CartObject from  '../utils/cart'
 
const cartContext = createContext({ setCartShow: () => { } });

const Component = styled.div`
font-family: "Sen", sans-serif;
.loading{
   height: 100vh;
   width: 100vw;
   background: white;
   position: sticky;
   z-index: 4;
   text-align: center;
   padding-top: 40vh;
   top:0
}

`;
 

const CartProvider = ({ children,readyCart }) => {
  const [showCart, setCartShow] = React.useState(false);
  const [isCartReady, toggleCartReady] = React.useState(false);
  const history = console.useHistory 
  
  useEffect(()=>{
    const body = document.getElementsByTagName('body')[0];
    CartObject.setFunctionsIneed({
      toggleCartReady
    })
    if (showCart) {
      ///stop scroll
      body.style.overflow = 'hidden'
    }else      { body.style.overflow = 'scroll'}
 
  },[showCart,readyCart])
 

  
  useEffect(()=>{
    toggleCartReady(readyCart)
  },[readyCart])
 


  return (
    <Component>
      <cartContext.Provider value={{ setCartShow,toggleCartReady, isCartReady }}>
        {showCart && <Cart setCartShow={setCartShow}  history={history} >
            
            <img
              src={Close}
              alt="menu"
              className="menu"
              onClick={() => {
                setCartShow(false);
              }}
            />
            
            </Cart>}
        {children}
      </cartContext.Provider>
    </Component>

  );
};

export const CartContext = () => useContext(cartContext);

export default CartProvider;
