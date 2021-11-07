import React from "react";
import styled from "styled-components";
import AllRecipesBackI from "../assets/svg/allrecipes_bacI.svg";
import Footer from "../Components/Footer";
import { commerce } from "../lib/Commerce";
import Select from 'react-select';
import Meal from "../Components/sharedComponents/meal";
import axiosCall from "../utils/axios";

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
  const [categories, setCategories] = React.useState([]);
  const [type, setType] = React.useState(false);

 

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

  /**
   * @description fetch all the cattetgories available
   * @param {*} category 
   * @returns 
   */
   const fetchCategories = async () => {
    try {
      const { data } = await axiosCall.get('/meals/category')
      // setCategories( data );
      const holdCat = []
      data.payload.data.map((data)=>{
        holdCat.push({
          value:{id:data._id,shortText:data.shortText,name:data.name} ,label:data.name
        })
      })
      console.log({
        holdCat
      })
      setCategories(holdCat)

      return;
    } catch (error) {
      console.log(error)
      return error;
    }
  };

  /**
   * @description gets meals by categories
   * @param {*} categoryId 
   */
  const getAllMealsForCategory = async (categoryId) =>{
    try {
      const { data } = await axiosCall.get('/meals/category/'+categoryId)
       const allMeals = []
       data.payload.data.map(( meal )=>{
        allMeals.push({
          ...meal,
          nonView: true 
        }) 
       })

       setProducts(allMeals)
    } catch (error) {
      console.log(error)
      return error;
    }
  }
 

  React.useEffect(() => {
    fetchCategories();
   }, [ ]);
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
              console.log({d:e.value})
              getAllMealsForCategory(e.value.id)
              setType(e.value)
            }}
            value={type.name}
            className="select" options={categories} />


          {type && <div className="text select">
            <p className='title' >
              Everything you need for your {type.name} meals
            </p>

            <p className="alltext">
             {type.shortText}
            </p>
          </div>}




        </div>
      </div>

      <div className="all_products">
     

        <div className="products">
          <Meal list={products}>
          </Meal>
        </div>
      </div>

      <Footer />
    </Main>
  );
}
