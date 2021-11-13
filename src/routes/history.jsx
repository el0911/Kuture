import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import axiosCall from "../utils/axios";
import RedButton from "../Components/sharedComponents/redButton";
 

const Main = styled.main`
  font-family: "Sen", sans-serif;
 
`;

export default function HistoryPage() {

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
        
      </div>
    </Main>
  );
}
