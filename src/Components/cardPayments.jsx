import React from 'react'
import styled from "styled-components";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import RedButton from './sharedComponents/redButton';
import axiosCall from '../utils/axios';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';
import cartObject from '../utils/cart';

const Component = styled.main`
 
max-height: 70vh;
background-size: cover;
background:white;padding-top:30px;

@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

:root {
  --light-grey: #F6F9FC;
  --dark-terminal-color: #0A2540;
  --accent-color: #635BFF;
  --radius: 3px;
}

body {
  padding: 20px;
  font-family: 'Raleway';
  display: flex;
  justify-content: center;
  font-size: 1.2em;
  color: var(--dark-terminal-color);
}

main {
  width: 480px;
}

form > * {
  margin: 10px 0;
}


form{
    width: 400px;
    max-width: 80vw;
}

 
button {
   color: white;
  border: 0;
  padding: 12px 16px;
  margin-top: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: block;
  width: -webkit-fill-available;
}
button:hover {
  filter: contrast(115%);
}
button:active {
  transform: translateY(0px) scale(0.98);
  filter: brightness(0.9);
}
button:disabled {
  opacity: 0.5;
  cursor: none;
}

input, select {
  display: block;
  font-size: 1.1em;
  width: 100%;
}

label {
  display: block;
}

a {
  color: var(--accent-color);
  font-weight: 900;
}

small {
  font-size: .6em;
}

fieldset, input, select {
  border: 1px solid #efefef;
}


#payment-form {
  border: #F6F9FC solid 1px;
  border-radius: var(--radius);
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 30px 50px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%);
}
`

const CardPaymentHolder = ({ setLoader }) => {
    return <CardElement onReady={() => {
        setLoader(false)
    }} />
}


function CardPayments({ addressId }) {

    const stripe = useStripe();
    const elements = useElements();
    const [loader, setLoader] = React.useState(true);
    const history = useHistory()



    const handleSubmit = async () => {
        try {
            setLoader(true)
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(CardElement),
            });

            if (!error) {
                console.log("Stripe 23 | token generated!", paymentMethod);
                const { data } = await axiosCall.post('/orders', {
                    ...paymentMethod,
                    addressId
                })

                const { success } = data.payload.data;
                if (success) {
                  cartObject.clearCart()
                    toast('Order Created!!!!!!!!!!!!!😊😊😊')
                    history.push('/')
                }


                //send token to backend here
            } else {
                toast('Unable to make payments')
            }
        } catch (error) {
            console.log(error)
        }
        setLoader(false)

    };

    return (
        <Component>
            <form style={{
                display: `${loader ? "none" : ""}`
            }} >
                <CardPaymentHolder key='cardholder' setLoader={setLoader} />
                <RedButton title='Pay' onClick={e => { handleSubmit() }} ></RedButton>
            </form>
            {loader && <Loader type="Puff"
                color="#FF2301"
                height={100}
                width={100}
            />}
        </Component>
    )
}


export default CardPayments