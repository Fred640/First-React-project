import React from "react";
import classes from "/home/fred/Projects/example-projects/react-exaple-projects/New Folder/react-project-1/src/components/UI/button/Btn.module.css"

const Btn = ({children, ...props}) => {
    return(
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )
}

export default Btn