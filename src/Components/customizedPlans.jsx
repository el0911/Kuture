import React from 'react'
import styled from "styled-components";
import { FamilyTable, SinglePerson, TwoPeople } from '../assets/svg';
import cartObject from '../utils/cart';
import RedButton from './sharedComponents/redButton';

const ModalComponent = styled.div`
            width: 90vw;
            max-height: 90vh;
            background-size: cover;
            background:white;
            text-align: center;
            max-width: 600px;

            .top{
                display: inline-flex;
                margin: auto;
                margin-top: 40px;
            }

            .top svg{
                width:100 !important
            }


            .meals{
                padding: 20px 54px;
            }

            .counter {
                padding-bottom: 60px;
            }


            .top p{
                font-family: Sen;
                font-style: normal;
                font-weight: bold;
                font-size: 23px;
                line-height: 42px;
                padding: 0;
                color: #FF4128;
                margin: 0;
                margin-right: 25px;
            }

            .meal_plans{
                display: flex;
            }

            .meal_plans p{

                
                font-family: Sen;
                font-style: normal;
                font-weight: bold;
                font-size: 15px;
                line-height: 30px;
                color: #EE4E2F;
                margin-left: 37px;


            }


            @media     (max-width: 960px) {
             .top p{
                font-size: 15px;
             }

             .count p{
                width: 50px;
                height: 50px;
                margin: 10px auto;
                font-size: 43px;
                padding: 17px 30px;
                border: 1px solid silver;
                border-radius: 10px;
                color: silver;
             }
         }


         .total{

        font-family: Sen;
        font-style: normal;
        font-weight: bold;
        font-size: 50px;
        line-height: 120px;
        border: 1px solid #CCCCCC;
        box-sizing: border-box;
         color: #000000;
        max-width:70%;
        margin:auto
                }

`


export default function CustomizedPlans({ itemObject, servings = {}, closeModal = ((e) => { }) }) {
    const [stage, setStage] = React.useState(0)
    const [count, setCount] = React.useState(1)




    return (
        <ModalComponent>

            <div className="top">
                <p>
                    {stage === 0 ? 'Choose your customised plan' : 'How big do you want the box'}
                </p>

                <svg width="40" height="49" viewBox="0 0 40 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.3509 23.2536L27.8683 9.1875H27.9886C28.8863 9.1875 29.6148 8.5015 29.6148 7.65625V1.53125C29.6148 0.686 28.8863 0 27.9886 0H1.969C1.07132 0 0.342773 0.686 0.342773 1.53125V7.65625C0.342773 8.5015 1.07132 9.1875 1.969 9.1875H2.00803C0.977002 10.4707 0.342773 12.0509 0.342773 13.7812V29.0938C0.342773 31.6264 2.53167 33.6875 5.22145 33.6875C6.09636 33.6875 6.90297 33.4517 7.612 33.0719C8.48041 34.3582 9.9928 35.2188 11.7264 35.2188C12.6013 35.2188 13.4079 34.9829 14.1169 34.6032C14.9853 35.8894 16.4977 36.75 18.2313 36.75C18.8037 36.75 19.3468 36.6397 19.8575 36.4682V44.4062C19.8575 46.9389 22.0464 49 24.7362 49C27.4259 49 29.6148 46.9389 29.6148 44.4062V27.6268L30.6621 28.8671C31.4655 29.8441 32.6233 30.4627 33.9243 30.6005C35.2188 30.7414 36.5068 30.3922 37.4955 29.6327C38.5363 28.8763 39.19 27.783 39.3397 26.5611C39.4893 25.333 39.1152 24.1264 38.3509 23.2536ZM3.59522 3.0625H26.3624V6.125H23.0449H8.4739H3.59522V3.0625ZM36.11 26.2089C36.0612 26.6039 35.8465 26.9592 35.4757 27.2318C35.1375 27.4859 34.7212 27.6023 34.2984 27.5564C33.8755 27.5104 33.5015 27.3114 33.2251 26.9745L29.2636 22.2889C29.2408 22.2674 29.2115 22.2552 29.192 22.2338C29.1172 22.1541 29.0294 22.0959 28.9383 22.0316C28.8538 21.9765 28.779 21.9153 28.6879 21.8754C28.6001 21.8356 28.5057 21.8173 28.4082 21.7928C28.2976 21.7652 28.1903 21.7346 28.0764 21.7284C28.0439 21.7284 28.0179 21.7131 27.9886 21.7131C27.9171 21.7131 27.8553 21.7438 27.787 21.7499C27.6731 21.7652 27.5658 21.7774 27.4552 21.8142C27.3511 21.8479 27.2601 21.8999 27.169 21.952C27.1039 21.9888 27.0324 22.001 26.9738 22.0439C26.9511 22.0622 26.9381 22.0929 26.9153 22.1112C26.8307 22.1817 26.7689 22.2644 26.7039 22.3501C26.6421 22.4267 26.577 22.5002 26.5348 22.5859C26.4925 22.6656 26.473 22.7574 26.4469 22.8463C26.4177 22.9504 26.3851 23.0514 26.3786 23.1617C26.3786 23.1893 26.3624 23.2138 26.3624 23.2444V44.4062C26.3624 45.2484 25.6306 45.9375 24.7362 45.9375C23.8417 45.9375 23.1099 45.2484 23.1099 44.4062V26.0312C23.1099 25.186 22.3814 24.5 21.4837 24.5C20.586 24.5 19.8575 25.186 19.8575 26.0312V32.1562C19.8575 32.9984 19.1257 33.6875 18.2313 33.6875C17.3368 33.6875 16.605 32.9984 16.605 32.1562V27.5625C16.605 26.7173 15.8765 26.0312 14.9788 26.0312C14.0811 26.0312 13.3526 26.7173 13.3526 27.5625V30.625C13.3526 31.4672 12.6208 32.1562 11.7264 32.1562C10.8319 32.1562 10.1001 31.4672 10.1001 30.625V26.0312C10.1001 25.186 9.37158 24.5 8.4739 24.5C7.57622 24.5 6.84768 25.186 6.84768 26.0312V29.0938C6.84768 29.9359 6.11587 30.625 5.22145 30.625C4.32703 30.625 3.59522 29.9359 3.59522 29.0938V13.7812C3.59522 11.2486 5.78412 9.1875 8.4739 9.1875H23.0449C23.5783 9.1875 24.0727 9.42944 24.3784 9.83675L35.762 25.1003C36.0352 25.4157 36.1588 25.8077 36.11 26.2089Z" fill="#FF4128" />
                </svg>



            </div>

            {stage === 0 && <div className="meals"  >

                {servings['4'] && <div onClick={() => {
                    setStage('4')
                }}
                    className="meal_plans">
                    <FamilyTable />

                    <p>
                        4 da family - 4 Servings
                    </p>
                </div>}

                {servings['2'] && <div onClick={() => {
                    setStage('2')
                }} className="meal_plans">
                    <TwoPeople />

                    <p>
                        The couple - 2 Servings
                    </p>
                </div>}


                {servings['1'] && <div onClick={() => {
                    setStage('1')
                }} className="meal_plans">
                    <SinglePerson />

                    <p>
                        The Loner - 1 Serving
                    </p>
                </div>}
            </div>}


            {stage && <div className="second_part" style={{
                position: 'relative',
                background: 'white'
            }}  >
                <div className="meals" onClick={() => {
                }} >

                    <div className="meal_plans">
                        <FamilyTable />

                        <p>
                            4 da family - 4 Servings
                        </p>
                    </div>


                </div>

                <div className="counter">
                    <svg onClick={e => {
                        setCount(count + 1)
                    }} width="50" height="73" viewBox="0 0 106 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="105" height="72" rx="9.5" fill="white" stroke="#CCCCCC" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.5272 31.8018C52.3408 31.3069 53.6599 31.3069 54.4735 31.8018L66.9735 39.406C67.7871 39.9009 67.7871 40.7034 66.9735 41.1983C66.1599 41.6932 64.8408 41.6932 64.0272 41.1983L53.0003 34.4903L41.9735 41.1983C41.1599 41.6932 39.8408 41.6932 39.0272 41.1983C38.2136 40.7034 38.2136 39.9009 39.0272 39.406L51.5272 31.8018Z" fill="black" />
                    </svg>
                    <div className="count"><p>
                        {count}
                    </p></div>

                    <svg onClick={e => {
                        setCount(count > 1 ? count - 1 : 1)
                    }} width="50" height="73" viewBox="0 0 106 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="105.5" y="72.5" width="105" height="72" rx="9.5" transform="rotate(-180 105.5 72.5)" fill="white" stroke="#CCCCCC" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M54.4728 41.1983C53.6592 41.6932 52.3401 41.6932 51.5265 41.1983L39.0265 33.5941C38.2129 33.0992 38.2129 32.2967 39.0265 31.8018C39.8401 31.3068 41.1592 31.3068 41.9728 31.8018L52.9997 38.5098L64.0265 31.8018C64.8401 31.3068 66.1592 31.3068 66.9728 31.8018C67.7864 32.2967 67.7864 33.0992 66.9728 33.5941L54.4728 41.1983Z" fill="black" />
                    </svg>


                    {/* <div className="total">
                        ${servings[stage] * count}
                    </div> */}



                </div>


                <RedButton onClick={e => {
                    // cartObject.saveAnIttemToCart(itemObject,stage,count)
                    cartObject.createABox(count, stage, itemObject)
                    closeModal(false)
                }} style={{
                    width: '100%',
                    // position: 'absolute',
                    // bottom: '0',
                    // right: '0'
                }} title='Create a Box' />
            </div>
            }

        </ModalComponent>
    )
}
