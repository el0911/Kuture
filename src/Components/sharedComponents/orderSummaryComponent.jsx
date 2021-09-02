import React from 'react'
import styled from "styled-components";
import Line from "../../assets/svg/totalline.svg";
import RedButton from './redButton';

 function orderSummaryComponent({
   data
  }) {
    const { name,
      amt,
      serving,
      noofrecipes,
      priceperserving,
      shipping,
      tax,
      total } =  data 
    const Main = styled.main`

    .background {
      display: block;
       position: relative;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .order_div {
      background: #ffffff;
      border: 1px solid rgba(169, 178, 193, 0.6);
      box-sizing: border-box;
      border-radius: 18px;
      width: 80%;
      margin-left: auto;
      margin-top: 3rem;
      padding-left: 10px;
      padding-right: 10px;
      color: #aa614d;
      font-family: Sen;
    }
    
    h4 {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: center;
      color: #aa614d;
    }
    .name_amt_div {
      display: flex;
      justify-content: space-between;
    }
    .name_amt_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .serving_price_div {
      display: flex;
      justify-content: space-between;
    }
    .serving_price_div p {
      font-weight: normal;
      font-size: 13px;
      line-height: 18px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .shipping_div {
      display: flex;
      justify-content: space-between;
    }
    .shipping_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .tax_div {
      display: flex;
      justify-content: space-between;
    }
    .tax_div h5 {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .total_div {
      display: flex;
      justify-content: space-between;
    }
    .total_div h5 {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      /* identical to box height */
      letter-spacing: 0.02em;
    }
    .last_div {
      margin-top: 2rem;
      margin-bottom: 3rem;
    }
    .last_div img {
      width: -moz-available;
      width: -webkit-fill-available;
    }
    
    .footy_div {
      margin-top: -9rem;
      position: relative;
    }
    
    @media (max-width: 768px) {
      .order_div {
          background: #ffffff;
          border: 1px solid rgba(169, 178, 193, 0.6);
          box-sizing: border-box;
          border-radius: 18px;
          width: 100%;
          margin: auto;
          margin-top: 3rem;
          padding-left: 5px;
          padding-right: 5px;
        }
        h4 {
          font-weight: bold;
          font-size: 23px;
          line-height: 36px;
          letter-spacing: 0.03em;
          text-align: center;
          color: #aa614d;
        }
        .name_amt_div {
          display: flex;
          justify-content: space-between;
        }
        .name_amt_div h5 {
          font-weight: bold;
          font-size: 17px;
          line-height: 24px;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
    
          /* identical to box height */
          letter-spacing: 0.02em;
        }
        .serving_price_div {
          display: flex;
          justify-content: space-between;
        }
        .serving_price_div p {
          font-weight: normal;
          font-size: 13px;
          line-height: 18px;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
    
          /* identical to box height */
          letter-spacing: 0.02em;
        }
        .shipping_div {
          display: flex;
          justify-content: space-between;
        }
        .shipping_div h5 {
          font-weight: bold;
          font-size: 17px;
          line-height: 24px;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          /* identical to box height */
          letter-spacing: 0.02em;
        }
        .tax_div {
          display: flex;
          justify-content: space-between;
        }
        .tax_div h5 {
          font-weight: bold;
          font-size: 17px;
          line-height: 24px;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          /* identical to box height */
          letter-spacing: 0.02em;
        }
        .total_div {
          display: flex;
          justify-content: space-between;
        }
        .total_div h5 {
          font-weight: bold;
          font-size: 18px;
          line-height: 24px;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          /* identical to box height */
          letter-spacing: 0.02em;
        }
        .last_div {
          margin-top: 2rem;
          margin-bottom: 3rem;
        }
        .last_div img {
          width: -moz-available;
          width: -webkit-fill-available;
        }
        .footy_div {
          margin-top: -5rem;
          position: relative;
        }
      }
      
  
   
`
    return (
        <Main>
             <div className="background">
 
        <div className="body_order">
          <div className="order_div">
            <h4>Order Summary</h4>
             
            <div className="name_amt_div">
              <h5>{name} </h5>
              <h5>{amt}</h5>
            </div>
            <div className="serving_price_div">
              <div className="serving_div">
                <p>{serving}</p>
                <p>{noofrecipes}</p>
              </div>
              <p>{priceperserving}</p>
            </div>
            <div className="shipping_div">
              <h5>Shipping</h5>
              <h5>{shipping}</h5>
            </div>
            <div className="tax_div">
              <h5>Tax</h5>
              <h5>{tax}</h5>
            </div>
            <div className="last_div">
              <img src={Line} alt="line" />
              <div className="total_div">
                <h5>Total each per week</h5>
                <h5>{total}</h5>
              </div>
              <img src={Line} alt="line" />
            </div>
            <RedButton style={{
                  width: 'inherit',
                  position: 'absolute',
                  right: '0',
                  bottom: '-25px',
                  borderRadius:'0px 0px 5px 5px'
            }}  title='Confirm Your Order'/>
          </div>
        </div>

       </div>
        </Main>
    )
}


export default orderSummaryComponent