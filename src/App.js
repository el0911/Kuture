import { useEffect } from "react";
import Routes from "./routes";
import cartObject from "./utils/cart";
import LoaderProvider from "./providers/fullLoader.provider";
import CartProvider from "./providers/cart.provider";
import 'react-toastify/dist/ReactToastify.css';
 
import { ToastContainer } from 'react-toastify';

function App() {

  useEffect(()=>{
    cartObject.loadCart()
   },[])
 
  return (
    <div >
      <CartProvider> 
        <LoaderProvider>
           <Routes/>
          </LoaderProvider>
       </CartProvider>
       <ToastContainer />
    </div>
  );
}

export default App;
