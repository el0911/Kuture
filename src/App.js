import { useEffect } from "react";
import Routes from "./routes";
import cartObject from "./utils/cart";

function App() {

  useEffect(()=>{
    cartObject.loadCart()
  },[])

  return (
    <div >
      <Routes />
    </div>
  );
}

export default App;
