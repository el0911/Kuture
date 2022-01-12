import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Modal from 'react-modal';
import { Question } from "../../assets/svg";
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
margin: 30px;
width: -webkit-fill-available;
.showbox{
    height: 400px3
    border-radius: 20px;
  }

  .box_home{
    display: grid;
    width: 80VW;
    margin: auto;
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

`


const MealComponent = ({data,history}) => {
    const { servings, imageMain, nonView, name, _id, recipeId = { timeTaken: 0 }, openModal, ...rest } = data
    const convertToTTimeString = () => {
        let result = ''
        try {
            result = generalUttil.convertTimeLengthToString(recipeId.timeTaken)
        } catch (error) {
            console.log(error)
        }

        return '30mins'
    }

    return <div className="showbox">
          <div  style={{
              background:'black',
              borderTopRightRadius: '20px',
              borderTopLeftRadius: '20px',
              height:nonView? '141px':'280px' ,
              backgroundImage:`url(${imageMain})`,
              backgroundSize:'cover',
              backgroundPosition:'center',
              backgroundRepeat:'no-repeat'
          }} ></div>
       {!nonView && <div className="info">
            <p>
                {name}
            </p>
            <button   onClick={() => {
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
                        ${servings[2]}
                    </p>
                </div>
                {/* <Question className='question' onClick={e => {
                    openModal(<MealPopup recipeId={recipeId._id} recipeName={name} />
                    )
                }} /> */}

                {/* <button onClick={e => {
                     if (cartObject.doIHavaABox()  ) {
                        cartObject.addItemToBox({
                            _id,
                            name,
                            servings,
                            plan:1,
                            imageMain,
                            ...rest
                        })
                    }
                    else{
                        openModal(<CustomizedPlans closeModal={openModal} itemObject={{
                            _id,
                            name,
                            servings,
                            plan:1,////change the wordings for this quick it can confuse someone
                            imageMain,
                            ...rest
                        }
                    } servings={servings} />)
                    }
                }} >
                    Add
                </button> */}

                <div className="bar"></div>
                <p className="details">
                    {recipeId.textDetails}
                </p>
                <CustomDropDown   onClick={e => {
                     if (cartObject.doIHavaABox()  ) {
                        cartObject.addItemToBox({
                            _id,
                            name,
                            servings,
                            plan:1,
                            imageMain,
                            ...rest
                        })
                    }
                    else{
                        openModal(<CustomizedPlans closeModal={openModal} itemObject={{
                            _id,
                            name,
                            servings,
                            plan:1,////change the wordings for this quick it can confuse someone
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
