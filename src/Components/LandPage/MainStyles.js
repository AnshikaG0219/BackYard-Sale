import { makeStyles } from "@material-ui/core";
import bg from "../assests/bg.jpg";
// https://unsplash.com/photos/bhBONc07WsI

export default makeStyles((theme) => ({
    root:{
        minHeight: '100vh',
        // backgroundImage: `url(${bg}), linear-gradient(
        //     rgba(46, 54, 61, 0.685),
        //     rgba(46, 54, 61, 0.699)
        //   )`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: '0.8'
    }
}))