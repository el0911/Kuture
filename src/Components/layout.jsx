import React from 'react'
import styled from "styled-components";
 import Header from './Header';

export default function Layout({ children }) {

    const Component = styled.div`
        background:#fafaef;
        min-height: 100vh;


        .content{
            width:90%;
            margin: 20px auto;
            position: relative;
            z-index: 2;
        }

    `

    return (
        <Component>
            <Header/>
            <div className="content">
                {children}
            </div>
            <div style={{
                background:`url(${require('../assets/svg/background.svg').default})`,
                width: '100vw',
                height: '50vh',
                position: 'fixed',
                bottom: '0',
                backgroundSize: 'contain'
            }} ></div>
         </Component>
    )
}
