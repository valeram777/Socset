import React from 'react'
import { NavLink } from 'react-router-dom'
import  './Navbar.css'
const Navbar = () => {
    return (<nav className='menu'>
    <div><NavLink to="/profile" activeClassName={"activelink"}>Profile</NavLink></div>
    <div><NavLink to="/dialogs" activeClassName={"activelink"}>Messages</NavLink></div>
    <div><NavLink to="/users" activeClassName={"activelink"}>Users</NavLink></div>
    <div><NavLink to="/chat" activeClassName={"activelink"}>Chat</NavLink></div>
    <div>News</div>
    
    </nav>);
}
export default Navbar