import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import Footer from './Footer';
import Header from './Header';
import HeeaderMobile from './HeeaderMobile';
import { isMobile, isTablet } from 'react-mobile-app'
import { LogoSVG } from '../assets/svg';

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

    @media screen and (max-width: 767px) {
        _::-webkit-full-page-media, _:future, :root .safari_only {
            padding-bottom: 65px; //resize 
        }
    }

`

export default function Layout({ children }) {

    console.useHistory = useHistory()///dont remove abeg junior engineer
    const mobileMode = isMobile() || isTablet()
    const history = useHistory()


    return (
        <Component>

            <div className='website' style={{
                gridTemplateRows: mobileMode ? '1fr 60px' : '90px 1fr',
                maxHeight: '100vh'

            }} >

                {!(mobileMode) && <Header />}
                <div className="content" style={{
                    maxHeight: mobileMode ? 'calc(100vh - 60px)' : 'calc(100vh - 90px)',
                }} >
                    {!!(mobileMode) && <div style={{
                        textAlign:'center',
                        marginTop:20,
                        position: 'absolute',
                        zIndex: 20,
                        width: '100%',
                    }}  onClick={()=>{
                        history.push('./')
                      }} >
                          
                        <LogoSVG />
                    </div>}

                    {children}
                </div>
                {!!(mobileMode) && <HeeaderMobile />}
                <div class='safari_only'>      </div>

            </div>
        </Component>
    )
}

