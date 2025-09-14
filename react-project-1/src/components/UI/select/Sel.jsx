import React from "react";
import classes from "/home/fred/Projects/First-React-project/react-project-1/src/components/UI/select/Sel.module.css"

const Sel = ({props, options, defaultValue, value, onChange}) => {

    return(
    <div>
        <select value={value} className={classes.mySel} onChange={event => onChange(event.target.value)}>
            <option disabled>{defaultValue}</option>
            {options.map(o => <option className={classes.mySel} key={o.value} value={o.value}>{o.name}</option>)}
        </select>
    </div>
    )
}

export default Sel