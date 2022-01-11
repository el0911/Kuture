import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import RedButton from "../Components/sharedComponents/redButton";
import { useLoadrConttext } from "../providers/fullLoader.provider";
import AuthUtil from "../utils/auth";
import {db} from "../utils/config";

const Main = styled.main`
  font-family: "Sen", sans-serif;

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

function ResetPassword(props) { 
  const inputPassword = React.createRef(); 
  const inputConfirmPassword = React.createRef(); 
  const loader = useLoadrConttext();
  const history = useHistory()
  return (
    <Main>
      <div className="delivery_div">
        <div styled={{
          textAlign: 'center'
        }} >
          <form>
            <h4 className="h4_">Reeset Password</h4>
            <div className="first_inputs">

            <input ref={inputPassword} type='password' placeholder="Password" />
            <input ref={inputConfirmPassword} type='password' placeholder="Confirm Password" />

            </div>

            <div className="btn_div">
              <RedButton onClick={async (e) => {
                if (inputPassword.current.value !== inputConfirmPassword.current.value) {
                  toast('Passwords do not match')
                  return
                }
                  try {
                    AuthUtil.reset({
                      password: inputPassword.current.value,
                       token: props.match.params.token,
                     }, {
                      preLoad: () => {
                        loader.setLoader(true)
                      }, afterLoad: (success) => {
                        loader.setLoader(false)
                        if (success) {
                            history.push('/login')
                        } 
                        }
                    }
                    )
                } catch (error) {
                  toast('Failed to Send Reset Email')                
                }
              }} title='Reset Password' />
            </div>

            
          </form>

        </div>
      </div>
    </Main>
  );
}



export default ResetPassword