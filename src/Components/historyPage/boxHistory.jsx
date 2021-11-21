import React from 'react'
import styled from "styled-components";
import RedButton from '../sharedComponents/redButton';




const Component = styled.main`
  font-family: "Sen", sans-serif;
  background:white;
  height:269px;
  padding:20px;
  background: #FFFFFF;
  border-radius: 14px;
  display: grid;
  grid-template-rows: 1fr 132px;
    
  .order{
  
  }

  .order p {
      margin:0;
      font-size: 14px;
      border-radius: 6px;
      background: #4E4E4F;
      border-radius: 6px;
      color:white;
      padding:3px 6px;
      width: max-content;
  }

  .down{
    display: grid;
    height: -webkit-fill-available;
    grid-template-rows: 1fr 70px;
  }


  .lower{
    display: grid;
    grid-template-columns:30% 70%
  }

  .price{
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 150% */
    text-align: left;
    color: #000000;
  }
 
`;
 

export default function BoxHistory(props) {
    const { index } = props;
    return (
        <Component className={`item level-${index}`}>

            <div className="order">
                <p>{`Box ${351}`}</p>
            </div>

            <div className="down">
                <p className="title">
                    Beef dumpling in hot and sour soup
                </p>

                <div className="lower">
                    <p className="price">
                        {`$${250.00}`}
                    </p>

                    <RedButton title="View More" />
                </div>
            </div>

        </Component>
    )
}
