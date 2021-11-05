import { toast } from 'react-toastify'
import AuthUtil from './auth'
import axiosCall from './axios'



const groupby =(data,columns)=>{
    const result = {}
    data.forEach((item)=>{
        const key = item[columns]
        if (result[key]) {
            result[key].push(item)
        }
        else{
            result[key] = [
                item
            ]
        }
    })
    return result
}   

/**
 * @description this class handles functions that involve the cart
 */

class Cart {

    constructor() {
        this.allCart = []
        this.boxes = []
    }


    /**
     * @description update function to rerender cart componnet
     * @param {*} func 
     */
    passUpdateFunction(func){
        this.update =  func
    }


    /**
     * @description create a box to caontain cart items
     * @param size the number of items the user orders 
     * @param itemObject the item am about to add to the box
     * @param mealSize the meal plan size
     */
    async createABox(sizeOfBOX, mealSize,itemObject) {
        console.log({sizeOfBOX,mealSize})
        try {
            this.boxID = 'pending'
            const { data } = await axiosCall.get('/cart/box/create?size=' + sizeOfBOX + '&&mealSize=' + mealSize)
            const { boxID, shortKey, size } = data.payload.data;
            this.boxID = boxID;
            this.shortKey = shortKey
            ////just pass the item to the cart no need to wait for it
            this.addItemToBox(itemObject)
            itemObject.boxShort = shortKey
            ///add the box to objecct
            this.boxes.push({
                _id: this.boxID,
                items: [
                    itemObject
                ],
                size:sizeOfBOX,
                boxHash: shortKey
            })

            console.log({ box: this.boxes })
        } catch (error) {
            console.log(error)
            this.boxID = false;
        }
    }

    /**
     * 
     * @returns value indicating if i have an open box or not
     */
    doIHavaABox() {
        return !!this.boxID
    }


    /**
     * @description adds an item to the a box
     * @param itemObject
     * @param boxId
     */
    async addItemToBox(itemObject) {
        try {

            console.log({
                box:this.boxes
            })

            const {boxID,shortKey} = this

            let boxFull = false
            ///add the data to the boxes list
            this.boxes.forEach(function (box) {
                if (box._id === boxID) {

                    if (box.size - 1 === box.items.length  ) {
                        ///check if i am about to fill the box
                        boxFull = true
                    }
                    else if (box.size <= box.items.length) {
                        ///check if box is full then initiate a new box
                         
                        throw 'Break';
                    }
                    itemObject.boxShort = boxID

                    box.items.push({ itemObject })
                     
                    return
                }
            })

            this.allCartRaw.push(itemObject)

           

         try {
            this.allCart = groupby(this.allCartRaw,'boxShort')
         } catch (error) {
             console.log(error)
         }

            console.log({
                kkkk:this.allCart
            })

            const { data } = await axiosCall.post('cart', {
                mealId: itemObject._id,
                boxId: this.boxID
            })

            console.log({data})

            toast("Added item to Box", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            })


            if (boxFull) {
                ///clear current box
                throw 'Break';
             }
        } catch (error) {
            if (error === 'Break') {
                this.boxID = false;
 
                toast("Box Full", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                return
            }
            console.log(error)
            toast("Failed to add item to box", {
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
     * @description load cart items into the app on load
     */
    async loadCart() {
        try {

            ///LOAD CART IF LOGGED IN
            if (!AuthUtil.isLogedIn()) {
                return
            }
            const { data } = await axiosCall.get('cart')
            this.allCartRaw = data.payload.data
            this.allCart = groupby(data.payload.data,'boxShort')
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
    getServingName(servingSize) {
        if (servingSize == 1) {
            return 'Loner'
        }
        else if (servingSize == 2) {
            return 'The Couple'
        }
        else return 'Family'
    }


    /**
     * @description gets the tottal price of every item in cart
     */
    gettTotalPrice() {
        let priceTotal = 0;
        this.allCart.forEach(({ price, plan }) => {
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
    async saveAnIttemToCart(itemObject, servingSize, quantity, servings) {
        try {
            ////save to local
            console.log({
                mealId: itemObject._id,
                plan: itemObject.servings,
                servingSize,
                quantity
            })

            const { data } = await axiosCall.post('cart', {
                mealId: itemObject._id,
                plan: servingSize,
                quantity
            })

            const { id } = data.payload

            this.allCart.push({
                media: itemObject.imageMain,
                name: itemObject.name,
                price: itemObject.servings[servingSize] * quantity,
                plan: quantity,
                servings: this.getServingName(servingSize),
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