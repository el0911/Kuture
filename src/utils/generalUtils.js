
/**
 * @description general functions used in the app
 */


class generalUtils{

    /**
     * @description function to convert timestamp to string eg 360 is  2 Minute.
     * @param {Number} timeInSeconds 
     */
    convertTimeLengthToString = (timeInSeconds = 360) =>{
        const minutes  =  ((timeInSeconds%360)) / 60 
        const hours  =    (timeInSeconds - (timeInSeconds%360))/360
        let timeString = '';
        timeString = `${hours>0?`${hours}Hr`:''}  ${minutes>0 ?`${parseInt(minutes)}mins`  :  '' }`;
        return timeString

    }

}

const generalUttil = new generalUtils()


export default generalUttil