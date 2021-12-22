import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import Footer from './Footer';
import Header from './Header';
import HeeaderMobile from './HeeaderMobile';
import { isMobile, isTablet } from 'react-mobile-app'

const Component = styled.div`
 min-height: 100vh;
 display: flex;


 .content{
    position: relative;
    z-index: 2;
    overflow: overlay;
 }


 .website{
    width: 100vw;
     display: grid;
 }

`

export default function Layout({ children }) {

    console.useHistory = useHistory()///dont remove abeg junior engineer
    const mobileMode = isMobile()  || isTablet()
 
        
    return (
        <Component>

            <div className='website' style={{
                    gridTemplateRows:mobileMode? '1fr 60px':'90px 1fr',

            }} >   
                    { ! (mobileMode) &&  <Header />}
                    <div className="content" style={{
                            maxHeight :mobileMode? 'calc(100vh - 60px)' : 'calc(100vh - 90px)'

                    }} >
                        {children}
                    </div>
                    { !! (mobileMode) &&   <HeeaderMobile/>}
            </div>
        </Component>
    )
}

 {/* <div style={{
                        background: `url(${require('../assets/svg/background.svg').default})`,
                        width: '100vw',
                        height: '50vh',
                        position: 'fixed',
                        bottom: '0',
                        backgroundSize: 'contain'
                    }} ></div>  */}