import React from "react";
import { isMobile, isTablet } from 'react-mobile-app'
import styled from "styled-components";
import axiosCall from "../utils/axios";
import html2canvas from "html2canvas"
import jsPDF from 'jspdf'
import cartObject from "../utils/cart";
import { Image, Transformation } from 'cloudinary-react';
// import {Cloudinary} from "@cloudinary/url-gen";

const mobileMode = isMobile() || isTablet()


const Main = styled.main`

    .recipe_body{
        width: ${mobileMode ? '90vw' : '80vw'} ;
        margin: auto;
        position: relative;
        top: -120px;
        padding: ${mobileMode ? '0' : ' 27px'} ;
        border-radius: 13px;
    }

    .recipe_body_top{
        display: grid;
        grid-template-columns: ${mobileMode ? '1fr' : ' 0.7fr 0.35fr'} ;
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
        line-height: 40px;
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
        grid-template-columns: ${mobileMode ? '1fr' : '0.7fr 0.35fr'};
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
        ${mobileMode ? `display: flex;
        overflow: scroll;
        max-width: 90vw;`: ''}  
    }

    .backdrop{
        position: absolute;
        width: 100vw;
        height: 50px;
        background: white;
        opacity: 0.6;
    }
`;



function RecipeItem(props) {

    const recipeId = props.match.params.id
    const [data, setData] = React.useState(false)
    const [index, setIndex] = React.useState('1')
    const [loadMessage, setLoadMessage] = React.useState('........Loading')

    React.useEffect(() => {
        ///////
        setIndex(cartObject.mealSize || '1')
    }, [cartObject.mealSize])

    const load = async () => {
        try {
            const { data } = await axiosCall.get(`meals/getmeal/${recipeId}`);
            setData(data.payload.data)
        } catch (error) {
            setLoadMessage(`Can't load Meal Page 😔`)
        }
    }

    React.useEffect(() => {
        load()
    }, [])


    if (!data) {
        return <p style={{
            width:'100vw',
            textAlign:'center',
            paddingTop:"100px"
        }} >{loadMessage}</p>
    }


    const printDocument = () => {
        const input = document.getElementById('divToPrint')

        html2canvas(input, {
            scale: 3, // use the desired scale
            allowTaint: true,
            useCORS: true
        }).then(canvas => {

            // Your IMAGE_DATA_URI
            var imgData = canvas.toDataURL('image/jpeg');

            const pdf = new jsPDF();
            pdf.addImage(imgData, "JPEG", 40, 0, 280, 280);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");

            // document.body.appendChild(canvas)

            // // Make pdf
            // var doc = new jsPDF();

            // // add image
            // doc.addImage(imgData, 'JPEG');

            // // Save document
            // doc.save('charts.pdf'); 
        })


    }

    return (
        <Main  >
            {mobileMode && <div className="backdrop">

            </div>}
            <div className="background" style={{
                background: `url(${`http://res.cloudinary.com/immotal/image/upload/${data.recipeId.recipeImg}.jpg`})`,
                height: '356px',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                width: '100vw',
            }}  >

            </div>
            {/* <Image cloud_name='immotal' publicId="dnlaktlmojono70v1iai.jpg" signUrl="true">
            <Transformation angle="90" />
            </Image> */}
            <div className="recipe_body" >
                <div className="recipe_body_top">
                    <div className="left_recipe">
                        <div className="info">
                            <div className="short-details">
                                <h3 className="name">
                                    {data.name}
                                </h3>

                                <h4 className="price" >
                                    ${data.servings[index] || data.servings[2]}
                                </h4>
                            </div>

                            {/* <div onClick={printDocument} className="download-button">
                                <p>
                                    Download Recipe
                                </p>
                            </div> */}
                        </div>

                        <div className="extra-info">
                            <p>
                                {data.recipeId.textDetails}
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
                                    {data.servings[index] ? index : 2}  {/* tthis logic here checks if this recipe has a serrviing for a siingle person else it falls back to 2 */}
                                </p>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="recipe_bottom" id="divToPrint"   >
                    <div className="left_below">
                        <ul className="steps-list">
                            {data.recipeId.steps.map((step) => {
                                return <li className="list_item">
                                    <p>
                                        {step}
                                    </p>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="rght_below">
                        <div className="ingredient-list">


                            {data.recipeId.ingredients.map(({ name,imageId }) => {
                                return <div className="ingredient">
                                    <img src={`${`http://res.cloudinary.com/immotal/image/upload/${imageId}.jpg`}`} alt="" />
                                    <div className="details">
                                        <p className="name">{name}</p>
                                        <p className="size">
                                            {/* 700ml */}
                                        </p>
                                    </div>
                                </div>
                            })}


                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
}



export default RecipeItem