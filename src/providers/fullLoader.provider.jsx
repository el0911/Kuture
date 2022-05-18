import React, { createContext, useContext } from "react";
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const LoaderContext = createContext({ isLoading: false, setLoader: () => { } });

const Component = styled.div`
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

.message{
  position: sticky;
}

.message p{
  background: #ffdec0;
  margin: 0;
  padding: 20px 0;
  font-size: 23px;
  font-weight: 700;
  text-align: center;
}

`;


const LoaderProvider = ({ children }) => {
  const [isLoading, setLoader] = React.useState(false);

  
 
  return (
    <Component>
      <LoaderContext.Provider value={{ isLoading, setLoader }}>
        {isLoading && <div className="loading">
          <Loader
            type="ThreeDots"
            color="#FFC850"
            height={100}
            width={100}
          />
        </div>}
        <div className="message" >
          <p>
            Get 25% On Your First Order
          </p>
        </div>
        {children}
      </LoaderContext.Provider>
    </Component>

  );
};

export const useLoadrConttext = () => useContext(LoaderContext);

export default LoaderProvider;
