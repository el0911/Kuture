import React from 'react'
import styled from "styled-components";
import RedButton from '../sharedComponents/redButton';
import SideBarHistoryContent from './sideBarHistornContent';




const Component = styled.main`
 
background:white;
height: max-content;
padding:30px 15px;
border-radius: 10px;

 
 


.menu-history-content{
    display:grid;
    grid-row-gap:20px;
}

.order p{
    font-weight: bold;
    font-size: 22px;
    line-height: 23px;
    color: #121212;
}
 

.bottom-content-history-age{
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    margin-top: 26px;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #121212;
}
`;




export default function SideBarHistory({ itemlist,className }) {

    let [price , setPrice] = React.useState(0)
    React.useEffect(()=>{
        itemlist.allMeals.map((data)=>{
            price  = price + data.servings[itemlist.mealSize]
        })

        setPrice(price)
    },[])

    return (
        <Component className={className}>

            <div className="order">
                <p>{`#Box ${itemlist.shortKey} Content`}</p>
            </div>

            <div className="menu-history-content">
                {itemlist.allMeals.map((data) => {
                    data.mealSize = itemlist.mealSize
                    return <SideBarHistoryContent   {...data} />
                })}
            </div>

            <div className="bottom-content-history-age">
                <p>Total</p>
                <p>${price}</p>
            </div>


        </Component>
    )
}
