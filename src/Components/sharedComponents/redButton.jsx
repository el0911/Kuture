import React from 'react'
import styled from "styled-components";

export default function RedButton({title,onClick,style}) {

    const Button = styled.button`
    height: 60px;
    
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 32px;
    letter-spacing: 0.03em;
    border:none;
    color: #FFFFFF;
    background: #FF2400;
    border-radius: 5px;
`
    return (
        <Button style={{...style}} onClick ={(e)=>{
            e.preventDefault()
            onClick(e)
        }} >
            {title}
        </Button>
    )
}
