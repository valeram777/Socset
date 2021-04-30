
import React from 'react'
import { NavLink } from 'react-router-dom'
const DialogItems =(props) => {
    //console.log(props)
    
    return (<div className="item">
    <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
    </div>)
}
export default DialogItems