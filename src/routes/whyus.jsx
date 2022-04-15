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
            margin-top: 50px;
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
                    Authentic ethnic food is sometimes hard to cook and even harder to source for
                    ingredients,even still there is just something truly beautiful about tasting foods from other
                    cultures that is truly amazing,so we go out of our way to find it just to have a taste of
                    something different or just to experience a little bit of nostalgia .We created kulturefresh to
                    bring authentic foods from diverse cultures to the homes of the curious and adventurous, to
                    create a fun easy way for our customers to experience great foods from the comfort of their
                    homes and share great experiences with family and friends.
                </p>
            </div>
        </Component>
    )
}
