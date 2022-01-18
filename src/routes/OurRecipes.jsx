import React from "react";
import styled from "styled-components";
import AllRecipesBackI from "../assets/svg/allrecipes_bacI.svg";
import Footer from "../Components/Footer";
import { commerce } from "../lib/Commerce";
import Select from 'react-select';
import Meal from "../Components/sharedComponents/meal";
import axiosCall from "../utils/axios";
import Loader from "react-loader-spinner";

const Main = styled.main`
  

  width:80vw;
  margin:40px auto;

  option {
    
    font-weight: 800;
    font-size: 15px;
  }
  .hidden_Div {
    display: none;
  }
  .each_recipe a {
    text-decoration: none;
  }
 
    d

  .wavesvg{
     bottom: 0;
    fill:#fafaef
  }

  .info_{
    display: grid;
    grid-template-columns: 1fr 250px;
  }

  .info_ header{
    font-family: Ubuntu;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
/* identical to box height */


color: #4E4E4F;
    
  }


  .text{
    text-align:left
  }
  
  .text .title{
    
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 36px;
    /* identical to box height */
    color: #523523;
  }

  .text .alltext{
    
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #523523;
  }

  .select{
    display: grid;
    align-items: flex-end;
  }


  .select svg{

    color: #FF785B !important

  }

  .select span{
    display:none
  }

  .all_products{

  }

  .category{
    width: 159.38px;
    height: 50px;
    /* left: 305px; */
    /* top: 286px; */
    border: 1px solid #E89528;
    box-sizing: border-box;
    border-radius: 10px;
    text-align: center;
    display: grid;
    font-size: 16px;
    line-height: 18px;
    align-items: center;
    color: #000;
    cursor:pointer;
  }

  .category:hover{
    background: #E89528;
    color:white
  }

  .row_categories{
    display: grid;
    grid-template-columns: repeat(3, 170px);
  }

  .all_products .time{
    
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 41px;
    text-align: center;
    color: #AA614D;
  }

  @media  (max-width: 500px) {

    /**background:#ffc850;
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
  const [popular, setPopular] = React.useState([]);
  const [type, setType] = React.useState(false);
  const [loadinMeals, setLoadingMeals] = React.useState(false);


  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      width: '250px',

    }),

    indicatorContainer: () => ({
      color: '#FF785B !important'
    }),

    menu: () => ({
      width: '250px',
      backgroundColor: 'white'
    }),

    placeholder: styles => ({
      fontFamily: 'Sen',
      fonyStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
      color: '#10145f'
    }),
    control: (provided) => ({
      ...provided,
      marginTop: "5%",
      height:'50px',
      width: '250px', backgroundColor: 'white',
      borderColor: '#FFC850'
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
      data.payload.data.map((data) => {
        holdCat.push({
          value: { id: data._id, shortText: data.shortText, name: data.name }, label: data.name
        })
      })
      console.log({
        holdCat
      })
      setPopular(holdCat)

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
  const getAllMealsForCategory = async (categoryId) => {
    try {
      setLoadingMeals(true)
      const { data } = await axiosCall.get('/meals/category/' + categoryId)
      const allMeals = []
      data.payload.data.map((meal) => {
        allMeals.push({
          ...meal,
          nonView: true
        })
      })
      setProducts(allMeals)

     } catch (error) {
      console.log(error)
    }
    setLoadingMeals(false)
  }


  React.useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <Main>
      <div class="custom-shape-divider-bottom-1629899704 background_div">
        {/* <svg className='wavesvg' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg> */}


        <div className="info_">

          <div>
            <p className="header">
              Popular Cuisines
            </p>

            <div className="row_categories">
              {popular.map(({label,value}) => {
                return <div className="category" onClick={e=>{
                  getAllMealsForCategory(value.id)
                }} >
                  {label}
                </div>
              })}
            </div>
          </div>

          <Select styles={customStyles}
            placeholder={categories.length ? "SELECT CATEGORY" : "Loading Categories..."}
            onChange={e => {
              console.log({ d: e.value })
              getAllMealsForCategory(e.value.id)
              setType(e.value)
            }}
            value={type.name}
            className="select" options={categories} />






        </div>
      </div>

      <div className="all_products">



        <div className="products">
          <div style={{
            textAlign: 'center'
          }}>
            {loadinMeals && <Loader
              type="ThreeDots"
              color="#FFC850"
              height={100}
              width={100}
            />}
          </div>
          <Meal list={products}>
          </Meal>
        </div>
      </div>

    </Main>
  );
}
