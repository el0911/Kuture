/**
 * A collection of classes
 */

import axiosCall from "./axios";
 

class Auth {
    constructor() {

    }


    /**
     * Stores the user data
     * @param {Object} param0 
     */
    registerUser({ accessToken, refreshToken },init) {
         if ((accessToken   ===    localStorage.getItem('accessToken'))) {
            return
        }

        if (init) {
            localStorage.setItem('refreshToken', refreshToken)
             window.location.href = "/"
        }
         localStorage.setItem('accessToken', accessToken)
         
    }


    /**
     * Login user
     */
    async login(loginInfo, { preLoad = () => { }, afterLoad = () => { } }) {
        try {
            preLoad()
            const { data } = await axiosCall.post('/signin', loginInfo);

            const { accessToken, refreshToken } = data.payload;

            this.registerUser({ accessToken, refreshToken },true)
            afterLoad()
        } catch (error) {
            
             

            afterLoad()
        }
    }

    /**
     * @description signs a user up
     * @param {*} signUpInfo 
     * @param {*} param1 
     */
    async signup(signUpInfo, { preLoad = () => { }, afterLoad = () => { } }) {
        try {
            preLoad();

            const { data } = await axiosCall.post('/signup', signUpInfo)

            const { accessToken, refreshToken } = data.payload;

            this.registerUser({ accessToken, refreshToken },true)

            afterLoad();
            
        } catch (error) {
 
           
            afterLoad()
        }
    }

    /**
     * @description a functrion to let the app check if user logged in and return response
     */
    isLogedIn() {
        if (localStorage.getItem('accessToken')) {
            return true
        }
        return false
    }

    /**
     * @description Logout a user
     */
    logout() {
        localStorage.clear()
        window.location.href = "/login"

    }
}

const AuthUtil = new Auth()


export default AuthUtil;