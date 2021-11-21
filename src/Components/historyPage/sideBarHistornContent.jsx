import React from 'react'
import styled from "styled-components";
import RedButton from '../sharedComponents/redButton';




const Component = styled.main`
display: grid;
grid-template-columns: 74px 2fr 0.7fr;

p{
    margin:0
}
  
    .price .price{
        font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */


    color: #000000;

    }

    .price .sub{
        font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    /* identical to box height */


    color: #AAAAAA;

    }

    .info p{
        font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */


    color: #000000;
    }


    .image img{
        width: 60px;
        height: 60px;
        

        background: #AAAAAA;
        border-radius: 12px;
    }

   

`;

 


export default function SideBarHistoryContent(props) {
    const { index } = props;
    return (
        <Component className={''}>

            <div className="image"><img src="" alt="" /></div>
            <div className="info">
                <p>
                Spicy rice ball with seafood noodles
                </p>
            </div>
            <div className="price">
                <p className="price">
                    {`$${5000}`}
                </p>

                <p className="sub">
                    Couple
                </p>
            </div>
             

        </Component>
    )
}
