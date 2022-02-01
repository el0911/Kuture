import React from 'react'
import styled from "styled-components";
import cartObject from '../../utils/cart';


const Component = styled.main`
display: flex;
justify-content: space-between;
background: #45CD63;
border-radius:26px;
height:50px;
overflow: hidden;


.dropdown{
    display: grid;
    text-align: center;
    width: -webkit-fill-available;
    align-content: center;
    grid-template-columns: 1fr 25px;
}

.meal-button{
    width: 80px;   
    display: grid;
    text-align: center;
    background: #29AB45;
    align-content: center;
}

p{
    color: white !important;
}

svg{
    margin-top: 12px;
}
 

`

export default function CustomDropDown({onClick}) {
    const states = {
        '1': {
            name: "Single - 1 Person"
        },
        '2': {
            name: "Double - 2 Person"
        },
        '4': {
            name: "Family - 4 Person"
        }
    }

    React.useEffect(()=>{
        ///////
        setIndex(cartObject.mealSize || '1')
    },[cartObject.mealSize])

    const [index, setIndex] = React.useState('1')
    return (
        <Component onClick={onClick} >
            <div className="dropdown">
                <p>
                    {states[`${index}`].name}
                </p>
                {/* <ArrowDown /> */}
            </div>
            <div className="meal-button">
                <p>
                    Add
                </p>
            </div>
        </Component>
    )
}
