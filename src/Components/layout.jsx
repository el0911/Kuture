import React from 'react'
import styled from "styled-components";
import Header from './Header';

export default function Layout({ children }) {

    const Component = styled.div`
        background:#fafaef;

    min-height: 100vh;

    `

    return (
        <Component>
            <Header/>
            <div className="content">
                {children}
            </div>
        </Component>
    )
}
