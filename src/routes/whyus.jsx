import React from 'react'
import styled from "styled-components";
import { LeftDecoration } from '../assets/svg';

export default function Whyus() {

    const Component = styled.div`

    svg{
        position: absolute;
        left: 0;
        top: 0;
    }

    .words{
        right: 50px;
        max-width: 540px;
        margin-left: 30vw;
        padding-right: 20px;
        margin-top: 64px;
    }

    .words .title{
        
        font-style: normal;
        font-weight: bold;
        font-size: 35px;
        line-height: 42px;
        color: #AA614D;
    }

    .words .content{
        
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 30px;
        color: #AA614D;  
    }

    @media (max-width: 960px){
        .words{
            position :relative;
            right: 0;
            max-width: 540px;
            margin: auto;
            padding:0 20px;
        }

        .words .title{
            margin:0
        }

        svg{
            display:none
        }
    }
    
    `

    return (
        <Component>
            <div className="words">
                <p className="title">why kulturefresh</p>
                <p className="content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </Component>
    )
}
