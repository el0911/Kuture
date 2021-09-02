import React from "react";
import styled from "styled-components";
import AddressComponent from "./sharedComponents/addressComponent";

import OrderSummaryComponent from "./sharedComponents/orderSummaryComponent";
import RedButton from "./sharedComponents/redButton";

const Main = styled.main`
 display:flex;
 width: -webkit-fill-available;
 justify-content: space-around;


 @media (max-width: 768px) {
   display:block
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
  return (
    <Main  >

      <div >
        <div className="addresses">
          {[{}, {}, {}, {}].map(() => { return <AddressComponent /> })}
        </div>

        <RedButton style={{
          width: '-webkit-fill-available'
        }} title='Add an address' />
      </div>

      <OrderSummaryComponent data={{
        name,
        amt,
        serving,
        noofrecipes,
        priceperserving,
        shipping,
        tax,
        total,
      }} />



    </Main>
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
