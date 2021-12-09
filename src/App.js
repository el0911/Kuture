import { useEffect } from "react";
import Routes from "./routes";
import cartObject from "./utils/cart";
import LoaderProvider from "./providers/fullLoader.provider";
import CartProvider from "./providers/cart.provider";
import 'react-toastify/dist/ReactToastify.css';
 
import { ToastContainer } from 'react-toastify';
import React from "react";

function App() {

  const [readyCart,setReadyCart] = React.useState(false)

  const tryCart = async () =>{
   try {
    await cartObject.loadCart()
    setReadyCart(true)
    
   } catch (error) {
     
   }
  }

  useEffect(()=>{
    tryCart()
   },[])
 
  return (
    <div >
      <CartProvider readyCart={readyCart}> 
        <LoaderProvider>
           <Routes/>
          </LoaderProvider>
       </CartProvider>
       <ToastContainer />
    </div>
  );
}

export default App;
