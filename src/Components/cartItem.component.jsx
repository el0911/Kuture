import React from 'react'
import styled from "styled-components";

function CartItem({ item }) {

    const Main = styled.main`
    display: flex;
    margin-bottom: 20px;
     margin-left: auto;
    margin-right: auto;
    border: 1px solid silver;
    border-radius: 5px;
    padding: 5px;

    img{
        width: 90.53px;
        height: 70px;
    }

    p{
        padding:0;
        margin:0
    }



    .name{
        font-family: Sen;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 24px;
        /* identical to box height */
        color: #0E1260;
    }


    .type{
        font-family: Sen;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        /* identical to box height */
        color: #999999;
    }
  

    .price{
        font-family: Sen;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 24px;
        /* identical to box height */
        color: #31769B;
        position: absolute;
        bottom: 0px;
        left: 0px;
    }

    .text_div{
        display: flex;
        position: relative;
        margin-left:15px;
        padding-top:7px;
        width: -webkit-fill-available;
    }

    .servings{
        position: absolute;
        bottom: 10px;
        font-family: Sen;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 24px;
        color: #999999;
     }

     .price_home{
        position: absolute;
        right: 23px;
        height: 100%;
     }


     .quatity{
        background: #FFFFFF;
        border: 0.3px solid #000000;
        box-sizing: border-box;
        border-radius: 5px;
        color:black;
        padding: 10px;
     }

 
`;
    return (
        <Main>
            <img src={item.media} alt="each" />
            <div className="text_div">
                <div className="left_info">
                    <p className='name' >{item.name} </p>
                    <p className="servings">
                        {item.servings}
                    </p>
                </div>
                <div className="price_home">

                    <p className="quatity">
                        {item.plan}
                    </p>
                    <p className="price">
                        ${item.price}
                    </p>
                </div>
            </div>
        </Main>
    )
}

export default CartItem
