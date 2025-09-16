import React from "react";
import classes from "/home/fred/Projects/First-React-project/react-project-2/src/components/UI/button/Btn.module.css"

const Btn = ({children, ...props}) => {
    return(
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )
}

export default Btn