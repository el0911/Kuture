import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import axiosCall from "../utils/axios";
import RedButton from "../Components/sharedComponents/redButton";
 

const Main = styled.main`
  font-family: "Sen", sans-serif;
  margin-top:100px;

  select{
    width: 30%;
    height: 50px;
    border-radius: 10px;
    padding: 1px 10px;
    background: transparent;
    border: 0;
  }
   
  @media  (max-width: 768px) {

    form div{
      display:grid !important;
    }

    form div input{
      width: -webkit-fill-available;
    }
    
    .delivery_div {
      display: block;
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
     }
    input {
      background: transparent;
      border: 0;
      box-sizing: border-box;
      border-radius: 10px;
      height: 45px;
      margin-bottom: 1.5rem;
      width: 30%;
      padding-inline-start: 9px;
      margin-right: 1rem;

    }
    .h4_ {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: left;
      color: #ee4e2f;
      padding-top: 2rem;
    }
    form {
      width: 90%;
      padding-top: 3 rem;
      margin: auto;
    }
    .first_inputs {
      display: block;
    }
    .second_inputs {
      display: block;
    }
    .third_inputs {
      display: block;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: center;
      margin-top: 2rem;
      padding-bottom: 3rem;
    }

    .btn_div button{
      width: -webkit-fill-available;
    }

    
  }
  @media (min-width: 600px) and (max-width: 960px) {
    .delivery_div {
      display: block;
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
     }
    input {
      background: transparent;
      border: 0;
      box-sizing: border-box;
      border-radius: 10px;
      height: 45px;
      margin-bottom: 1.5rem;
      width: 30%;
      padding-inline-start: 9px;
      margin-right: 1rem;

    }
    .h4_ {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: left;
      color: #ee4e2f;
      padding-top: 2rem;
    }
    form {
      width: 90%;
      margin: auto;
    }
    .first_inputs {
      display: flex;
    }
    .second_inputs {
      display: flex;
    }
    .third_inputs {
      display: flex;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: center;
      margin-top: 2rem;
      padding-bottom: 3rem;
    }
  }
  @media (min-width: 960px) and (max-width: 1024px) {
    .delivery_div {
      display: block;
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
    }
    input {
      background: transparent;
      border: 0;
      box-sizing: border-box;
      border-radius: 10px;
      height: 45px;
      margin-bottom: 1.5rem;
      width: 30%;
      padding-inline-start: 9px;
      margin-right: 1rem;

    }
    .h4_ {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: left;
      color: #ee4e2f;
      padding-top: 2rem;
    }
    form {
      width: 90%;
      margin: auto;
    }
    .first_inputs {
      display: flex;
    }
    .second_inputs {
      display: flex;
    }
    .third_inputs {
      display: flex;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: center;
      margin-top: 2rem;
      padding-bottom: 3rem;
    }
    
  }
  @media (min-width: 1024px) and (max-width: 1700px) {
    .delivery_div {
      display: block;
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
    }
    input {
      background: transparent;
      border: 0;
      box-sizing: border-box;
      border-radius: 10px;
      height: 45px;
      margin-bottom: 1.5rem;
      width: 30%;
      padding-inline-start: 9px;
      margin-right: 1rem;

    }
    .h4_ {
      font-weight: bold;
      font-size: 23px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: left;
      color: #ee4e2f;
      padding-top: 2rem;
    }
    form {
      width: 90%;
      margin: auto;
    }
    .first_inputs {
      display: flex;
    }
    .second_inputs {
      display: flex;
    }
    .third_inputs {
      display: flex;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: left;
      margin-top: 2rem;
      padding-bottom: 3rem;
    }
     
  }
  @media (min-width: 1700px) {
    .delivery_div {
      width: 70%;
      margin: auto;
      margin-top: auto;
      margin-top: -2rem;
    }
    input {
      background: transparent;
      border: 0;
      box-sizing: border-box;
      border-radius: 10px;
      height: 45px;
      margin-bottom: 1.5rem;
      width: 30%;
      padding-inline-start: 9px;
      margin-right: 1rem;

    }
    .h4_ {
      font-weight: 900;
      font-size: 27px;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-align: left;
      color: #ee4e2f;
      padding-top: 2rem;
      width: 95%;
      margin: auto;
      margin-bottom: auto;
      margin-bottom: 2rem;
    }
    form {
      width: 40%;
      margin-right: auto;
      background: #fafafa;
      border-radius: 15px;
      margin-bottom: 2rem;
      padding-left: 10px;
    }
    .first_inputs {
      display: flex;
    }
    .first_input {
      display: block;
    }
    .second_inputs {
      display: flex;
    }
    .second_input {
      display: block;
    }
    .third_inputs {
      display: flex;
    }
    .third_input {
      display: block;
    }
    .btn_div {
      display: block;
      margin: auto;
      text-align: left;
      margin-top: 1rem;
      padding-bottom: 1.5rem;

    }
   
  }
`;

export default function DeliveryInformation() {

  const inputPhone = React.createRef();
  const inputaddress = React.createRef();

  const inputPostCode = React.createRef();
  const inputState = React.createRef();

  const history = new useHistory()

  const handleChange  = (value) =>{
    console.log(`selected ${value}`);
  }

  const saveAddress = async (e) => {

    if (inputPhone.current.value.length === 0 ||
      inputaddress.current.value.length === 0 ||
      inputPostCode.current.value.length === 0 ||
      inputState.current.value.length === 0) {
      toast('Missing fields', {})
      return
    }
    try {
      const { data } = await axiosCall.post('orders/address', {
        phone: inputPhone.current.value,
        address: inputaddress.current.value,
        code: inputPostCode.current.value,
        state: inputState.current.value,
      })


      toast('Added Address', {})

      history.push('ordersummary')


      console.log(data)

    } catch (error) {

      toast('Error adding address', {})

    }

  }
  return (

    <Main>
      <div className="delivery_div">
        <div>
          <form>
            <h4 className="h4_">Delivery Information</h4>
            {/* <div className="first_inputs">
              <input disabled placeholder="Full Name" />
              <input disabled placeholder="Email Address" />
            </div> */}
            <div className="second_inputs">
              <input ref={inputPhone} placeholder="Phone Number" />
              <input ref={inputaddress} placeholder="Address" />
            </div>
            <div className="third_inputs">
              <input ref={inputPostCode} placeholder="Postal Code" />
              <select ref={inputState} onChange={e=>{
                  console.log(inputState.current.value)
              }} >
              <option value="">Select State</option>
              <option value="Tex">Texas</option>
              <option value="Ge">Georgia</option>
              </select>
            </div>
            <div className="btn_div">
              <RedButton onClick={saveAddress} title='SAVE ADDRESS' />
            </div>
          </form>

        </div>
      </div>
    </Main>
  );
}
