import React from "react";
import styled from "styled-components";
import AllRecipesBack from "../assets/svg/allrecipes_back.svg";
import AllRecipesBackI from "../assets/svg/allrecipes_bacI.svg";
import Header from "../Components/Header";
import LargeBanner from "../assets/images/largebanner.jpg";
import Footer from "../Components/Footer";
import { commerce } from "../lib/Commerce";
import { useHistory, Link } from "react-router-dom";
import Select from 'react-select';
import Meal from "../Components/sharedComponents/meal";

const Main = styled.main`
  font-family: "Sen", sans-serif;
  position: relative;
  top: -95px;
  option {
    font-family: "Sen", sans-serif;
    font-weight: 800;
    font-size: 15px;
  }
  .hidden_Div {
    display: none;
  }
  .each_recipe a {
    text-decoration: none;
  }
 
  .background_div{
    background-image: url(${AllRecipesBackI});
    position:relative;
    min-height:80vh
  }

  .wavesvg{
    position: absolute;
    bottom: 0;
    fill:#fafaef
  }

  .info_{
    margin-top: 200px;
    position: absolute;
    width: 100vw;
    text-align: center;
  }

  .info_ p{
    font-family: Sen;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: #AE5D29;
  }


  .text{
    text-align:left
  }
  
  .text .title{
    font-family: Sen;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 36px;
    /* identical to box height */
    color: #523523;
  }

  .text .alltext{
    font-family: Sen;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #523523;
  }



  .select{

    padding: 0 45.7px;

  }

  .select span{
    display:none
  }

  .all_products{

  }

  .all_products .time{
    font-family: Sen;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 41px;
    text-align: center;
    color: #AA614D;
  }

  @media  (max-width: 500px) {

    .info_{
      margin-top: 122px;
    }

    .select{
      padding: 0 11.7px;
    }

  }
  
`;

export default function OurRecipes() {
  const [products, setProducts] = React.useState([]);
  const [product, setProduct] = React.useState({});
  const [type, setType] = React.useState(false);

  const options = [
    { value: '0', label: 'IGBOCENTRIC' },
    { value: '1', label: 'HAUSACENTRIC' },
    { value: '2', label: 'YUROBACANTRIC' },
  ];


  const data = {
    '0': {
      cuture: 'igbo'
    }, '1': {
      cuture: 'yuruba'
    }, '2': {
      cuture: 'hausa'
    },
  }


  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      width: '250px',

    }),

    menu: () => ({
      width: '250px',
      backgroundColor: 'white'
    }),

    placeholder: styles => ({
      fontFamily: 'sen',
      fonyStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      color: '#10145f'
    }),
    control: (provided) => ({
      ...provided,
      marginTop: "5%",
      width: '250px', backgroundColor: 'white'
    })
  }

  const history = useHistory();
  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
      return;
    } catch (error) {
      return error;
    }
  };
  const addToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    console.log(item, "item");
  };

  React.useEffect(() => {
    fetchProducts();
    console.log(products, "products");
  }, [products]);
  return (
    <Main>
      <div class="custom-shape-divider-bottom-1629899704 background_div">
        <svg className='wavesvg' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>


        <div className="info_">
          <div className="title">
            <p>
              ALL RECIPES
            </p>
          </div>

          <Select styles={customStyles}
            placeholder="SELECT CATEGORY"
            onChange={e => {
              setType(e.value)
            }}
            value={type}
            className="select" options={options} />


          {type && <div className="text select">
            <p className='title' >
              Everything you need for your {data[type].cuture} meals
            </p>

            <p className="alltext">
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets containing.
            </p>
          </div>}




        </div>
      </div>

      <div className="all_products">
        <p className="time">
          Menu for 20th Feb. - 26th Feb. 2021
        </p>

        <div className="products">
          <Meal list={[{ nonView: true }, { nonView: true }, { nonView: true }, { nonView: true }, { nonView: true }]}>
          </Meal>
        </div>
      </div>

      <Footer />
    </Main>
  );
}
