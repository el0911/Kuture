import React from 'react'
import styled from "styled-components";
import Recipe from './Recipe';

export default function MealPopup() {

const ModalComponent = styled.div`
width: 70vw;
max-height: 70vh;
background-size: cover;
background:white;


.background{
    background-image:url("${Recipe.image}");
    height:200px;
    width:100%
}

img{
    width: 100%;
    height: 320px;
}

.info {
    padding: 10px 16px;
    background:white
}

.info .title{
        font-family: Sen;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 48px;
        color: #EE4E2F;
}

.info .recipe_title{

font-family: Sen;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 36px;

}

.info .reciiope_text{

font-family: Sen;
font-style: normal;
font-weight: normal;
font-size: 12.5px;
line-height: 28px;

}

hr{
    border: 0.1px solid #cacaca;
}

.info ul{
    list-style: none;
    padding:0
}

.info li{
    padding: 0 10px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    /* font-family: Sen; */
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
}

.info li .number{
    margin-right: 10px;
}

.footer{
    position: sticky;
    bottom: 0;
    width: 100%;
    background: white;
    text-align: center;
    padding: 20px 0;
}

.footer button{
    width: 80%;
    background: #FF2400;
    border: 0;
    color: white;
    height: 39px;
    border-radius: 5px;
    font-family: Sen;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    text-transform: capitalize;
}



`
    return (
        <ModalComponent>
        <div className="background"></div>

            <div className="info">
                <p className="title">
                    EGUSI SOUP WITH GOAT  MEAT
                </p>

                <p className="recipe_title">
                    Recipe Details
                </p>

                <p className="reciiope_text">
                    Egusi is a West African name for the seeds of plants like squash, melons,
                    and gourds that, when dried and ground become a staple ingredient
                    in many West African dishes.  Particularly, in Nigerian culture,
                    egusi is a popular with pounded yam. These seeds are rich in fat
                    and protein, and add these essential nutrients into West African Cuisine.
                </p>

                <hr />

                <div className="ingredients">
                    <p className="reciiope_text">
                        What you’ll need: Maggi, Salt.
                    </p>

                    <div className="list">
                        <ul>
                            <li>
                                <p className="number">1</p> <p className="text">piece of onion</p>
                            </li>

                            <li>
                                <p className="number">3</p> <p className="text">tablespoons of bitter leaf</p>
                            </li>

                            <li>
                                <p className="number">6</p> <p className="text">pieces of smoked Meat & fish</p>
                            </li>

                            <li>
                                <p className="number">10</p> <p className="text">grams of waterleaf</p>
                            </li>

                            <li>
                                <p className="number">15</p> <p className="text">grams of cut pumpkin leaves</p>
                            </li>

                            <li>
                                <p className="number">3</p> <p className="text">pieces of fresh chilies</p>
                            </li>

                            <li>
                                <p className="number">4</p> <p className="text">teaspoons of ground crayfish</p>
                            </li>

                            <li>
                                <p className="number">40</p> <p className="text">grams of ground melon seeds (egusi)</p>
                            </li>
                        </ul>

                        <hr />

                    </div>


                    <div className="steps">
                        <p className="recipe_title">
                            Recipe Steps
                            <ul className="list">
                                {Recipe.prepare_steps.map((text) => {
                                    return <li>
                                        {text}
                                    </li>
                                })}
                            </ul>
                        </p>
                    </div>
                </div>


            </div>
            <div className="footer">
                <button>
                    Add Recipe
                </button>
            </div>
        </ModalComponent>
    )
}
