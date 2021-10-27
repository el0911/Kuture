import React from 'react'
import styled from "styled-components";
import Recipe from './Recipe';
import Loader from "react-loader-spinner";
import axiosCall from '../utils/axios';

const ModalComponent = styled.div`
width: 70vw;
max-height: 70vh;
background-size: cover;
background:white;


.background{
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

export default function MealPopup({ recipeId,recipeName }) {

    const [info, setInfo] = React.useState({ ingredients:[],steps:[] })


    React.useEffect(() => {

        loadData()

    }, [])


    const loadData = async () => {
        setInfo(false)

        try {
            const { data } = await axiosCall.get('/meals/recipe/' + recipeId)
            // setCategories( data );

            setInfo(data.payload.data)

        } catch (error) {
            setInfo({})
        }
    }


    if (!info) {
        return <div>
            <Loader
                type="ThreeDots"
                color="#FFC850"
                height={100}
                width={100}
            />
        </div>
    }

    return (
        <ModalComponent>
            <div className="background" style={{
                    backgroundImage:'url('+info.recipeImg+")"

            }}  ></div>

            <div className="info">
                <p className="title">
                   {recipeName}
                </p>

                <p className="recipe_title">
                    Recipe Details
                </p>

                <p className="reciiope_text">
                    {info.textDetails}
                </p>

                <hr />

                <div className="ingredients">
                    <p className="reciiope_text">
                        What you’ll need: {info.ingredients.map((ingredient) => {
                            return ingredient + ' '
                        })}.
                    </p>

                 


                    <div className="steps">
                        <p className="recipe_title">
                            Recipe Steps
                            <ul className="list">
                                {info.steps.map(({ text }, index) => {
                                    return <li>
                                         <p className="number">{index + 1}</p> <p className="text">{text}</p>
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
