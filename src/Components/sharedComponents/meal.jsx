import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Component = styled.main`
justify-content: center;
margin-bottom: 20px;
margin: 30px;
width: -webkit-fill-available;
.showbox{
    width: 247px;
    margin-right: auto;
    height: 277px;
    margin: auto;
  }

  .box_home{
    display: grid;
   
    grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));
  }
 

.showbox img{
    width: 241px;
    height: 213px;
  }

  .showbox .info{
    display: flex;
    justify-content: space-between;
    padding: 3px 10px;
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
    }

    .shadowbox{
        margin: 0 20px;
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

`

export default function Meal({ category }) {
    const history = useHistory();

    return (

        <Component>
          { category &&  <button className='top_button'
                onClick={() => {
                    history.push("/allrecipes");
                }}
            >
                {  category.name}{" "}
            </button>}
            <div className='box_home'  >
                {[{}, {}, {}, {}, {}].map(() => {
                    return <div className="showbox">
                        <img src={`${require('../images/southy.jpg').default}`} alt="" />
                        <div className="info">
                            <p>
                                {'Igbocentric'}
                            </p>
                            <button>
                                view
                            </button>
                        </div>
                    </div>
                })}
            </div>
        </Component>
    )
}
