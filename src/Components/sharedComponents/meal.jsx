import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Modal from 'react-modal';
import { ClockSvg, Question } from "../../assets/svg";
import CustomizedPlans from "../customizedPlans";
import generalUttil from "../../utils/generalUtils";
import MealPopup from "../mealPopUp";
import cartObject from '../../utils/cart';
import CustomDropDown from './customDropDown'

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
margin-top: 20px;
width: -webkit-fill-available;
.showbox{
        box-shadow: 0px 0px 10px 6px rgba(98, 98, 98, 0.1);
border-radius: 13.3056px;
cursor:pointer;
  }

  .box_home{
    display: grid;
    gap:24px;
    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
}

 .showbox{
     border-radius:15px
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

  .showbox .info p{
    font-weight: bold;
    text-transform: capitalize;
  }

  .showbox .info button{
    width: 95px;
    height: 38px;
    background: #FF2400;
    border-radius: 5px;
    border:0;
    color :white;
    
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

    .name{
        font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 17.2972px;
line-height: 21px;
/* identical to box height, or 123% */

padding:0;

color: #333333;

    }

    .product_info p {
        font-style: normal;
        padding: 6px;
        line-height: 22px;
        /* identical to box height */
        margin:0 !important;
    }

    .top_button {
         height: 38px;
        background: #FF2400;
        border-radius: 5px;
        border: 0;
        color: white;
        
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
        background: #fff;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .details{
        color:#A7A7A7;
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 100;
        font-size: 11px;
        text-overflow: ellipsis;
        font-style: normal;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
    }

    .bar{
        width: -webkit-fill-available;
        border: 1px solid #EDEDED;
    }

    .price{
        font-size: 18.6278px;
        line-height: 20px;
        color: #E89528;
    }

    .info_section{
        width: 95%;
        padding: 7px;
        padding-bottom: 15px;
    }

    .timer{
        display: grid;
        grid-template-columns: 20px 1fr;
        align-items: center;
        width: 80px;
        background: white;
        padding: 5px 3px;
        text-align: center;
        border-radius: 12px;
        top: 100px;
        right: -7px;
        font-size: 12px;
        position: relative;
    }

    .timer p{
        margin:0
    }

`


const MealComponent = ({ data, history }) => {
    const { servings, imageMain, nonView, name, _id, recipeId = { timeTaken: 0 }, openModal, ...rest } = data
    const convertToTTimeString = () => {
        let result = ''
        try {
            result = generalUttil.convertTimeLengthToString(recipeId.timeTaken)
        } catch (error) {
            console.log(error)
        }

        return '1hr'
    }

    React.useEffect(() => {
        ///////
        setIndex(cartObject.mealSize || '1')
    }, [cartObject.mealSize])

    const [index, setIndex] = React.useState('1')

    return <div className="showbox" onClick={e => {
        ///
        history.push(`/recipe/${_id}`)
    }} >
        <div style={{
            background: 'black',
            borderTopRightRadius: '20px',
            borderTopLeftRadius: '20px',
            height: nonView ? '141px' : '280px',
            backgroundImage: `url(${`http://res.cloudinary.com/immotal/image/upload/${imageMain}.jpg`})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }} >    <div className="timer">
                <ClockSvg />  <p>{convertToTTimeString(recipeId.timeTaken)}</p>
            </div> </div>
        {!nonView && <div className="info">
            <p>
                {name}
            </p>
            <button onClick={() => {
                history.push("/allrecipes");
            }} >
                View More
            </button>
        </div>}

        {
            nonView && <div className="product_info">
                <div className="info_section" >
                    <div className="text">
                        <p className="name">
                            {name}
                        </p>

                        <p className="price">
                            ${servings[index] || servings[2]}  {/* tthis logic here checks if this recipe has a serrviing for a siingle person else it falls back to 2 */}
                        </p>
                    </div>
                    {/* <Question className='question' onClick={e => {
                    openModal(<MealPopup recipeId={recipeId._id} recipeName={name} />
                    )
                }} /> */}



                    <div className="bar"></div>
                    <p className="details">
                        {recipeId.textDetails}
                    </p>
                    <CustomDropDown onClick={e => {
                        if (cartObject.doIHavaABox()) {
                            cartObject.addItemToBox({
                                _id,
                                name,
                                servings,
                                plan: 1,
                                imageMain,
                                ...rest
                            })
                        }
                        else {
                            openModal(<CustomizedPlans closeModal={openModal} itemObject={{
                                _id,
                                name,
                                servings,
                                plan: 1,////change the wordings for this quick it can confuse someone
                                imageMain,
                                ...rest
                            }
                            } servings={servings} />)
                        }
                    }} />
                </div>
            </div>
        }
    </div>
}

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
                {list.map(({ ...data }) => {

                    return <MealComponent history={history} data={{ ...data, openModal }} />
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



     ///recipe 
        ///steps
        ///ingredients
          /// name
          /// picture
          /// price
      ///images
        /// itemimage
        /// cartimage
        /// banner image