import React from 'react'
import styled from "styled-components";
import RedButton from '../sharedComponents/redButton';
import SideBarHistory from './sideBarHistory';




const Component = styled.main`
  
  background:white;
  height:269px;
  background: #FFFFFF;
  border-radius: 14px;
  display: grid;
  grid-template-rows: 1fr 132px;
    
  .order{
    background-size: cover;
    background-position: center;
    padding:20px;

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
    padding:10px 20px;

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

  .more{
    display:none
    }

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    .more{
        display:block
    }
  }
 
`;
 

export default function BoxHistory({allMeals , boxSize ,mealSize, shortKey , setMoreFunct,price}) {
    const firstMeal = allMeals[0]


    const [show,setShow] = React.useState(false)
    return (
        <Component >

            <div className="order" style={{
                backgroundImage:`url(${firstMeal.imageMain})`
            }} >
                <p>{`Box ${shortKey}`}</p>
            </div>

            <div className="down">
                <p className="title">
                   {firstMeal.name}
                </p>

                <div className="lower">
                    <p className="price">
                        {`$${price}`}
                    </p>

                    <RedButton onClick = {
                        ()=>{
                            setMoreFunct( {allMeals,mealSize,shortKey,price})
                            // setShow(!show)
                        }
                    } title= {'View Details'} />
                </div>
            </div>

            {show && <div className="more">
                <SideBarHistory  itemlist ={{allMeals , boxSize ,mealSize, shortKey }} />
            </div>}
        </Component>
    )
}
