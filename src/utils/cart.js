
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
    loadCart() {
        this.allCart = [{
            media: require('../assets/images/Egusi.jpg').default,
            name: 'efung',
            price: 400,
            plan: 2,
            servings: 'The Loner'
        }, {
            media: require('../assets/images/Egusi.jpg').default,
            name: 'efung',
            price: 400,
            plan: 2,
            servings: 'The Loner'
        }, {
            media: require('../assets/images/Egusi.jpg').default,
            name: 'efung',
            price: 400,
            plan: 2,
            servings: 'The Loner'
        }, {
            media: require('../assets/images/Egusi.jpg').default,
            name: 'efung',
            price: 400,
            plan: 2,
            servings: 'The Loner'
        }]
    }

}


const cartObject = new Cart()

export default cartObject