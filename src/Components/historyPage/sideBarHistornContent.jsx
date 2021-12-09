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
        
        background-size: cover;
        background-position: center;

        background: #AAAAAA;
        border-radius: 12px;
    }
`;




export default function SideBarHistoryContent(props) {
    const { name, imageMain, servings, mealSize,className } = props;
    return (
        <Component className={''}>

            <div className="image"><img style={{
                backgroundImage: `url(${imageMain})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} alt="" /></div>
            <div className="info">
                <p>
                    {name}
                </p>
            </div>
            <div className="price">
                <p className="price">
                    {`$${servings[mealSize]}`}
                </p>

                <p className="sub">
                    {mealSize === 2 ? 'Couple' : mealSize === 4 ? 'Group' : 'Single'}
                </p>
            </div>


        </Component>
    )
}
