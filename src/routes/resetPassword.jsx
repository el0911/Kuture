import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import RedButton from "../Components/sharedComponents/redButton";
import { useLoadrConttext } from "../providers/fullLoader.provider";
import AuthUtil from "../utils/auth";
import {db} from "../utils/config";

const Main = styled.main`
  

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


  .next span{

    text-decoration: underline;
    color: #FF2400;

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
    max-width:500px
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

  @media (min-width: 960px) {
      form{
          margin-top:130px
      }
  }

`;

function Subscribe() { 
  const inputEmail = React.createRef(); 
  const loader = useLoadrConttext();

  return (
    <Main>
      <div className="delivery_div">
        <div styled={{
          textAlign: 'center'
        }} >
          <form>
            <h4 className="h4_">Request Password Reeset Link</h4>
            <div className="first_inputs">

             <input ref={inputEmail} type='email' placeholder="Email Address" />

            </div>

            <div className="btn_div">
              <RedButton onClick={async (e) => {
                  try {
                    AuthUtil.resetRequest({
                      email: inputEmail.current.value,
                     }, {
                      preLoad: () => {
                        loader.setLoader(true)
                      }, afterLoad: () => {
                        loader.setLoader(false)
                        toast('Sent Reset Email')
                       }
                    }
                    )
                } catch (error) {
                  toast('Failed to Send Reset Email')                
                }
              }} title='Request Reset ' />
            </div>

            
          </form>

        </div>
      </div>
    </Main>
  );
}



export default Subscribe