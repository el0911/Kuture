import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import Header from './Header';

const Component = styled.div`
 background:#fafaef;
 min-height: 100vh;


 .content{
     // width:90%;
     // margin: 20px auto;
     position: relative;
     z-index: 2;
 }

`

export default function Layout({ children }) {

    console.useHistory = useHistory()

    return (
        <Component>
            <Header />
            <div className="content">
            {children}
            </div>
            <div style={{
                background: `url(${require('../assets/svg/background.svg').default})`,
                width: '100vw',
                height: '50vh',
                position: 'fixed',
                bottom: '0',
                backgroundSize: 'contain'
            }} ></div>
        </Component>
    )
}
