import { toast } from 'react-toastify'
import AuthUtil from './auth'
import axiosCall from './axios'

/**
 * @description this class handles functions that involve the cart
 */
class Cart {

    constructor() {
        this.allCart = []
    }

    /**
     * @description load cart items into the app on load
     */
    async loadCart() {
        try {

            ///LOAD CART IF LOGGED IN
            if (!AuthUtil.isLogedIn()) {
                return
            }
            const {data} = await axiosCall.get('cart')
            this.allCart  =  data.payload.data;
        } catch (error) {
            console.log(error)
            toast("Failed to load cart", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            }) 
        }
    }


       /**
     * @description get the name of the servings eg lonner is for 1 person
     * @param {*} servingSize 
     */
       getServingName (servingSize) {
            if (servingSize==1) {
                return 'Loner'
            }
            else if(servingSize==2){
                return 'The Couple'
            }
            else return 'Family'
        }


        /**
         * @description gets the tottal price of every item in cart
         */
        gettTotalPrice(){
            let priceTotal= 0;
            this.allCart.forEach(({price,plan})=>{
                priceTotal = priceTotal + (price * plan)
            })
            return priceTotal
        }

    /**
     * @description function to save the item to cart localStorage and also the database
     * @param {*} itemObject  contains info about the item
     * @param {*} servingSize how many people the serving  an satisy
     * @param {*} quantity how many servings 
     * @param {*} servings the name of the serving
     */
     async saveAnIttemToCart(itemObject,servingSize,quantity,servings) {
       try {
            ////save to local
            console.log({
                mealId :itemObject._id ,
                plan : itemObject.servings ,
                servingSize,
                quantity
            })

        const {data} = await  axiosCall.post('cart',{
            mealId :itemObject._id ,
            plan : servingSize ,
            quantity
        })

        const {id} = data.payload

        this.allCart.push({
            media:itemObject.imageMain,
            name:itemObject.name,
            price:itemObject.servings[servingSize] * quantity,
            plan:quantity,
            servings : this.getServingName(servingSize),
            id
        })

        toast("Added to cart", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            })
       } catch (error) {
           console.log(error)
        toast("Cant add element to cart", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        }) 
       }
    }

}


const cartObject = new Cart()

export default cartObject