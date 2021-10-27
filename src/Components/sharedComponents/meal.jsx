import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Modal from 'react-modal';
import { Question } from "../../assets/svg";
import CustomizedPlans from "../customizedPlans";
import generalUttil from "../../utils/generalUtils";
import MealPopup from "../mealPopUp";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: 0,
        background: 'transparent',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none'
    },
};

const Component = styled.main`
justify-content: center;
margin-bottom: 20px;
margin: 30px;
width: -webkit-fill-available;
.showbox{
    width: 247px;
    margin: 10px auto;
    display: inherit;
  }

  .box_home{
    display: grid;
   
    grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));
  }
 

.showbox img{
    width: inherit;
    height: 213px;
  }

  .showbox .info{
    display: flex;
    justify-content: space-between;
    padding: 3px 10px;
    background:white;
  }

  .showbox .info button{
    width: 95px;
    height: 38px;
    background: #FF2400;
    border-radius: 5px;
    border:0;
    color :white;
    font-family: Sen;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    margin: auto 0;
    }

    .shadowbox{
        margin: 0 20px;
    }


    .product_info p {
        font-family: Sen;
        font-style: normal;
        font-weight: bold;
        padding: 6px;v 
        font-size: 14px;
        line-height: 22px;
        /* identical to box height */
        color: #10145F;
        margin:0 !important;
    }

    .top_button {
         height: 38px;
        background: #FF2400;
        border-radius: 5px;
        border: 0;
        color: white;
        font-family: Sen;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        color: #FFFFFF;
        margin:10px auto;
      }

      .product_info button{
        background: #FF2400;
        border-radius: 0px 0px 5px 5px;
        color: white;
        width: -webkit-fill-available;
        border: 0;
        height: 48px;
      }

      .product_info{
        background: #fff; 
      }

    .question{
        position: absolute;
        right: 10px;
        top: 22px;
    }
    
    .product_info{
        position: relative;
    }

`

export default function Meal({ category, list }) {
    const history = useHistory();
 

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(component) {
        setIsOpen(component);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    Modal.setAppElement('body');

    console.log({ list })


    return (

        <Component id='meal' >
            {category && <button className='top_button'
                onClick={() => {
                    history.push("/allrecipes");
                }}
            >
                {category.name}{" "}
            </button>}
            <div className='box_home'  >
                {list.map(({ servings, imageMain,  nonView, name, _id, recipeId = { timeTaken: 0 }, ...rest }) => {

                     return <div className="showbox">
                        <img src={imageMain} alt="" />
                        {!nonView && <div className="info">
                            <p>
                                {name}
                            </p>
                            <button>
                                View More
                            </button>
                        </div>}

                        {
                            nonView && <div className="product_info">
                                <div className="text">
                                    <p className="name">
                                        {name}
                                    </p>

                                    <p>
                                        {generalUttil.convertTimeLengthToString(recipeId.timeTaken)}
                                    </p>



                                </div>
                                <Question className='question' onClick={e => {
                                    openModal(<MealPopup recipeId={recipeId._id} recipeName={name} />
                                    )
                                }} />

                                <button onClick={e => {
                                    openModal(<CustomizedPlans closeModal={ openModal } itemObject={{
                                        _id,
                                        name,
                                        servings,
                                        ...rest
                                    }} servings={servings} />)
                                }} >
                                    add to cart
                                </button>
                            </div>
                        }
                    </div>
                })}
            </div>

            <Modal
                isOpen={!!modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
             >

                {modalIsOpen}

            </Modal>
        </Component>
    )
}
