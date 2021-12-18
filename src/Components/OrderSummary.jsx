import React from "react";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import axiosCall from "../utils/axios";
import AddressComponent from "./sharedComponents/addressComponent";

import OrderSummaryComponent from "./sharedComponents/orderSummaryComponent";
import RedButton from "./sharedComponents/redButton";

const Main = styled.main`
 display:flex;
 width: -webkit-fill-available;
 justify-content: space-around;
 padding:100px 0;


 .address-holder{
  width: 80vw;
  margin: 30px auto;
 }

 @media (max-width: 768px) {
   display:block;
   padding:100px 10px;

 }



`;

export default function OrderSummary({
  name,
  amt,
  serving,
  noofrecipes,
  priceperserving,
  shipping,
  tax,
  total,
}) {

  const history = useHistory()
  const [data, setAddress] = React.useState([])
  const [mark, setMark] = React.useState(false)
  const loadAllAddresses = async () => {


    try {
      const { data } = await axiosCall.get('orders/address')

      setAddress(data.payload.data)
    } catch (error) {
      toast('Cant load addresses reload page ')
    }
  }


  React.useEffect(() => {
    loadAllAddresses()
  }, [])
  return (

    <div>
      <Main  >

        {  
        
          !mark && <div className='address-holder' >

          {  <RedButton onClick={e => {
            history.push('deliveryinfo')
          }} style={{
            width: '-webkit-fill-available'
          }} title='Add an address' />}


          {
            
          !mark && <div className="addresses">
            <div  style={{
                textAlign:'center'
            }}>
            {!data.length &&  <Loader
                type="ThreeDots"
                color="#FFC850"
                height={100}
                width={100}
            />}
            </div>
            {data.map((addressDetails, i) => { return <AddressComponent key={i} setMarked={setMark} marked={mark} details={addressDetails} /> })}
          </div>

          }


        </div>}

        {mark && <OrderSummaryComponent data={{
          name,
          amt,
          serving,
          setMark,
          noofrecipes,
          priceperserving,
          shipping,
          tax,
          total,
          mark
        }} />}



      </Main>

    </div>

  );
}

OrderSummary.defaultProps = {
  id: 1,
  name: "The Couple Plan",
  amt: 40.99,
  serving: "Serving 2 people",
  noofrecipes: "3 recipes per week",
  priceperserving: "$8.99 per serving",
  shipping: "7.99",
  tax: "3.89",
  total: "52.99",
};
