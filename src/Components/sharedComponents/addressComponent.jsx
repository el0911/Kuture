import React from 'react'
import styled from "styled-components";

const CheckBox = ({ marked }) => {

    const Main = styled.main`
            min-width:30px;
            height:30px;
            border-radius:50%;
            background: #FF2400;
            margin-top: 30px;
            margin-right: 18px;
            position: relative;



            .inner{
             
                min-width: 25px;
                height: 25px;
                border-radius: 50%;
                background: #fff;
                margin-top: 30px;
                position: absolute;
                top: -28px;
                margin-right: 18px;
                right: -15px;

            }
    `

    const [marked_, setMarked] = React.useState(marked)
    return <Main onClick={() => {
            setMarked(!marked_)
        }} >

           {!marked_ && <div className="inner"></div>}
    </Main>
}

function AddressComponent({ marked }) {

    const Main = styled.main`
    background: white;
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid #cacaca;
    margin-bottom:20px;
    display:flex;
    
    
    .info{
        font-family: Sen;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 17px;
        letter-spacing: 0.03em;

        color: #AA614D;

    }
    
    `

    return (
        <Main>

            <CheckBox marked={marked} />

            <div className="info">
                <p className='name' >
                    Anika Ross
                </p>

                <p className="address">
                    2307 Oak Street , Old Forge NY 13420
                </p>

                <p className="number">
                    (315) -36-9-5970
                </p>
            </div>
        </Main>
    )
}


export default AddressComponent