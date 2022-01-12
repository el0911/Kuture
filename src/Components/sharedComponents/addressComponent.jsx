import React from 'react'
import styled from "styled-components";

const Check = styled.main`
min-width:30px;
height:30px;
border-radius:50%;
background: #FF2400;
margin-top: 30px;
margin-right: 18px;
position: relative;



.inner{
 
    min-width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #fff;
    margin-top: 30px;
    position: absolute;
    top: -28px;
    margin-right: 18px;
    right: -15px;

}
`



const CheckBox = ({ marked }) => {
 
  

     
 
    return <Check  >

        {!marked && <div className="inner"></div>}
    </Check>
}
 

const Main = styled.main`
background: white;
padding: 10px 15px;
border-radius: 5px;
border: 1px solid #cacaca;
margin-bottom:20px;
display:flex;


.info{
    
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 17px;
    letter-spacing: 0.03em;

    color: #AA614D;

}

`


function AddressComponent({ marked, details, setMarked }) {


  

    // alert(`${marked} ----- ${details._id}`)


    return (
        <Main onClick={() => {
            setMarked(details._id)
        }} >

            <CheckBox marked={marked === details._id} />

            <div className="info">


                <p className="address">
                    {details.address}
                </p>



                <p className='name' >
                    {details.state}
                </p>

                <p className="number">
                    {details.phoneNumber}
                </p>

                <p className="number">
                    {details._id}
                </p>
            </div>
        </Main>
    )
}


export default AddressComponent