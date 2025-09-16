import React from "react";
import classes from "/home/fred/Projects/First-React-project/react-project-1/src/components/UI/input/Inp.module.css"

const Inp = (props) => {
    return(<input {...props} className={classes.myInp}>
    </input>)
}
export default Inp


