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

 


export default function SideBarHistory(props) {
    const { index } = props;
    return (
        <Component className={``}>

            <div className="order">
                <p>{`#Box ${351} Content`}</p>
            </div>

            <div className="menu-history-content">
                {[{},{},{},{},{},{}].map(()=>{
                    return <SideBarHistoryContent/>
                })}
            </div>

                <div className="bottom-content-history-age">
                    <p>Total</p>
                    <p>${1500}</p>
                </div>


        </Component>
    )
}
