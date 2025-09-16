import React from "react";
import classes from "/home/fred/Projects/First-React-project/react-project-1/src/components/UI/myModal/Modal.module.css"

const Modal = ({children, visible, setVisible}) => {

    const myClasses = [classes.myModal]
    if(visible) {
        myClasses.push(classes.active)
    }

    return(
        <div className={myClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal