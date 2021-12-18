import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import Footer from './Footer';
import Header from './Header';

const Component = styled.div`
 min-height: 100vh;
 display: flex;


 .content{
     // width:90%;
     // margin: 20px auto;
     position: relative;
     z-index: 2;
 }


 .website{
    width: 100vw;
 }

`

export default function Layout({ children }) {

    console.useHistory = useHistory()

    return (
        <Component>

            <div className='website' >   
            <Header />
                <div className="content">
                    {children}
                </div>
                {/* <div style={{
                    background: `url(${require('../assets/svg/background.svg').default})`,
                    width: '100vw',
                    height: '50vh',
                    position: 'fixed',
                    bottom: '0',
                    backgroundSize: 'contain'
                }} ></div>  */}
                 </div>

 
        </Component>
    )
}
