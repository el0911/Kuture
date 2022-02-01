import React from 'react'
import styled from "styled-components";

const Main = styled.main`

.page_title{
    
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 42px;
    letter-spacing: 0.03em;
    color: #AA614D;
}

`

function DeliveryPage() {
    return (
        <Main>
            <p className='page_title' >
                Delivery Information
            </p>

            <div className="form">
                <div className="column">
                    <div className="row">
                        <input type="text" /> <input type="text" /> <input type="text" />
                    </div>

                    <div className="row">
                        <input type="text" /> <input type="text" /> <input type="text" />
                    </div>

                    <button>
                        PROCEED TO BILLING
                    </button>
                </div>
            </div>
        </Main>
    )
}


export default DeliveryPage