import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import RedButton from "../Components/sharedComponents/redButton";
import { useLoadrConttext } from "../providers/fullLoader.provider";
import AuthUtil from "../utils/auth";

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

  .loweer_text_conteent{
    justify-content: space-between;
    display: flex !important;
  }

`;

function Login() {
  const inputPassword = React.createRef();
  const inputEmail = React.createRef();
  const history = useHistory()
  const loader = useLoadrConttext();

  return (
    <Main>
      <div className="delivery_div">
        <div styled={{
          textAlign: 'center'
        }} >
          <form>
            <h4 className="h4_">Login to your account</h4>
            <div className="first_inputs">
              <input ref={inputEmail} type='email' placeholder="Email Address" />
              <input ref={inputPassword} type='password' placeholder="Password" />

            </div>

            <div className="btn_div">
              <RedButton onClick={(e) => {
                e.preventDefault();
                AuthUtil.login({
                  email: inputEmail.current.value.split(" ").join(""),
                  password: inputPassword.current.value.split(" ").join("")
                }, {
                  preLoad: () => {
                    loader.setLoader(true)
                  }, afterLoad: () => {
                    loader.setLoader(false)
                  }
                }
                )
              }} title='Login' />
            </div>

            <div className="loweer_text_conteent" >
              <p className="next">
                <span onClick={e => {
                  history.push('reset-password')
                }}  >
                  Forgot Password?</span></p>

              <p className="next">
                Or
              </p>

              <p className='next' >Dont have an account? <span onClick={e => {
                history.push('signup')
              }} > Signup</span></p>
            </div>
          </form>

        </div>
      </div>
    </Main>
  );
}



export default Login