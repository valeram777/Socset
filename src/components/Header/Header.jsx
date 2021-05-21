import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = (props) => {
  
return (
    <div>
    <div>HEADER</div>
    {props.isAuth ? <div><NavLink to  ={"/profile/" + 13147}>{props.login}</NavLink><button onClick = {props.logout}>Выход</button></div> : <NavLink to = "/login">Login</NavLink>}
    </div>
)
    


}
export default Header;

