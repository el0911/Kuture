import React from "react";
import { isMobile, isTablet } from 'react-mobile-app'
import styled from "styled-components";
const mobileMode = isMobile() || isTablet()


const Main = styled.main`

    .recipe_body{
        width: ${mobileMode?'90vw':'80vw'} ;
        margin: auto;
        position: relative;
        top: -120px;
        padding: ${mobileMode ? '0':' 27px'} ;
        border-radius: 13px;
    }

    .recipe_body_top{
        display: grid;
        grid-template-columns: ${mobileMode ? '1fr':' 0.7fr 0.35fr'} ;
        column-gap: 20px;
    }

    .left_recipe{
        background:white;
        padding: 6px 15px;
        border-radius: 9px;
    }

    .right_recipe{
        background: white;
        padding: 6px 15px;
        border-radius: 9px;
    }

    .short-details .name{

        font-family: Ubuntu;
        font-style: normal;
        font-weight: bold;
        font-size: 35px;
        line-height: 21px;
        /* or 53% */


        color: #333333;

    }

    .short-details .price{
        font-style: normal;
        font-weight: 100;
        font-size: 20px;
        line-height: 20px;
        color: #E89528;
    }

    .info{
        display: grid;
        grid-template-columns: 1fr 175px;
        align-items: center;
    }

    .download-button{
        font-weight: 700;
        text-align: center;
        border: 1px solid #c2cbd4;
        height: 51px;
        display: grid;
        align-items: center;
        border-radius: 7px;
    }

    .extra-info{
       
        color: #9095a1;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 24px;
        text-transform: capitalize;
        font-feature-settings: 'kern' off;
        border-top: 0.1px solid rgba(0 ,0,0,0.1);
        padding: 20px 0;
    }

    .item{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        text-align: center;
    }

    .recipe_bottom{
        background: white;
        display: grid;
        margin-top: 25px;
        grid-template-columns: ${mobileMode?'1fr':'0.7fr 0.35fr'};
        gap: 20px;
    }

    .ingredient img{
        width: 90px;
        height: 90px;
        border-radius: 10px;
    }

    .ingredient {
        display: grid;
        grid-template-columns: 120px 1fr;
        padding: 20px;
    }

    .ingredient .details .name{
        font-weight: bolder;
    }

    .ingredient .details .size{
        font-weight: 200;
        color: silver;
        font-size: 15px;
    }

    .steps-list{
        padding: 20px 50px;
        gap: 7px;
        display: grid;
    }

    .ingredient-list{
        ${mobileMode?`display: flex;
        overflow: scroll;
        max-width: 90vw;`:''}  
    }
`;



function RecipeItem() {



    return (
        <Main>
            <div className="background" style={{
                background: `url(${`https://cdn.shopify.com/s/files/1/0070/7032/files/food_photography_hero.jpg?v=1504106067`})`,
                height: '356px',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                width: '100vw',
            }}  >

            </div>

            <div className="recipe_body">
                <div className="recipe_body_top">
                    <div className="left_recipe">
                        <div className="info">
                            <div className="short-details">
                                <h3 className="name">
                                    Egusi Soup
                                </h3>

                                <h4 className="price" >
                                    $300
                                </h4>
                            </div>

                            <div className="download-button">
                                <p>
                                    Download Recipe
                                </p>
                            </div>
                        </div>

                        <div className="extra-info">
                            <p>
                                Our fried rice is made from the finest ingredients and veggies. single dish is made with fresh vegetables,
                                rescued.Our fried rice is made from the finest ingredients and veggies.
                                single dish is made with fresh vegetables, rescued.
                            </p>
                        </div>
                    </div>

                  <div className="right_recipe">
                        <div className="list-item">
                            <div className="item">
                                <p className="item-header">
                                    Servings
                                </p>
                                <p className="item-count">
                                    4
                                </p>
                            </div>

                            <div className="item">
                                <p className="item-header">
                                    Servings
                                </p>
                                <p className="item-count">
                                    4
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="recipe_bottom">
                    <div className="left_below">
                        <ul className="steps-list">
                            <li className="list-item">
                                <p>
                                    Fried Rice Is Made From The Finest Ingredients And Veggies. Single Dish Is Made With Fresh Vegetables, Rescued.
                                </p>
                            </li>

                            <li className="list_item">
                                <p>
                                    Fried Rice Is Made From The Finest Ingredients And Veggies. Single Dish Is Made With Fresh Vegetables, Rescued.
                                </p>
                            </li>

                            <li className="list_item">
                                <p>
                                    Fried Rice Is Made From The Finest Ingredients And Veggies. Single Dish Is Made With Fresh Vegetables, Rescued.
                                </p>
                            </li>

                            <li className="list_item">
                                <p>
                                    Fried Rice Is Made From The Finest Ingredients And Veggies. Single Dish Is Made With Fresh Vegetables, Rescued.
                                </p>
                            </li>

                            <li className="list_item">
                                <p>
                                    Fried Rice Is Made From The Finest Ingredients And Veggies. Single Dish Is Made With Fresh Vegetables, Rescued.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="rght_below">
                        <div className="ingredient-list">
                            <div className="ingredient">
                                <img src="https://static.toiimg.com/photo/68483689.cms" alt="" />
                                <div className="details">
                                    <p className="name">name</p>
                                    <p className="size">
                                        700ml
                                    </p>
                                </div>
                            </div>


                            <div className="ingredient">
                                <img src="https://static.toiimg.com/photo/68483689.cms" alt="" />
                                <div className="details">
                                    <p className="name">name</p>
                                    <p className="size">
                                        700ml
                                    </p>
                                </div>
                            </div>



                            <div className="ingredient">
                                <img src="https://static.toiimg.com/photo/68483689.cms" alt="" />
                                <div className="details">
                                    <p className="name">name</p>
                                    <p className="size">
                                        700ml
                                    </p>
                                </div>
                            </div>



                            <div className="ingredient">
                                <img src="https://static.toiimg.com/photo/68483689.cms" alt="" />
                                <div className="details">
                                    <p className="name">name</p>
                                    <p className="size">
                                        700ml
                                    </p>
                                </div>
                            </div>

                            <div className="ingredient">
                                <img src="https://static.toiimg.com/photo/68483689.cms" alt="" />
                                <div className="details">
                                    <p className="name">name</p>
                                    <p className="size">
                                        700ml
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
}



export default RecipeItem