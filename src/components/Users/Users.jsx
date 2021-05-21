import React, {useState} from 'react'
import './Users.css'

import foto from './123.jpg'
//import * as axios from 'axios'
import preloader from './../Img/Preloader.gif'
import { NavLink } from 'react-router-dom'
import { Api } from '../Api/Api'
import Paginator from './Paginator'
class Users extends React.Component {
  render () {
        
    return <Paginator {...this.props}/>    // props = {this.props}
  }
 //render () {
  /*let pagesTotal = Math.ceil(this.props.totalUsers/this.props.pageSize);
  let pages = [];
  //let test = 50
  for (let i=1; i <= pagesTotal; i++){
    pages.push(i);
  }
 
return <div>

 <div className='Users'> 
 {this.props.isFetching ? <img className='preloader' src =  {preloader} alt="preloader"/>  : null }
 <div className="pagination"> {pages.map( p => {return <div className='pageHover' onClick = {(e)=>{this.props.onChange(p)}}> {p}</div>})}</div>


 {
    this.props.Users.map( u=> <div  className="Users_columns">
    
        <div className="Users_foto">
   
     
        <NavLink to={'/profile/' + u.id}>
        <img src={u.photos.small !=null  ? u.photos.small : foto } className="foto" alt='foto' />
        </NavLink>
        <div className="Users_button">
        
        {u.followed 
          ? <button onClick ={() =>{Api.usersFollowDelete(u.id)
          .then(res =>{if(res.data.resultCode === 0){this.props.unfollowAC(u.id)}})}}>Unfollow</button> : 
          <button onClick ={() =>{Api.usersFollowPost(u.id)
          .then(res =>{if(res.data.resultCode === 0){this.props.followAC(u.id)}})}}>Follow</button>} 
        </div>
        </div>
        <div className="Users_column">
        <div className="Users_column-left">
        <div>{u.name}</div>
        <div>{u.status}</div>
        </div>
        <div className="Users_column-right">*/
      //  <div>{/*u.location.city*/}</div>
       // <div>{/*u.location.country*/}</div>
       // </div>
      // </div>
     //  </div>
      
      //    )
    //  render () {
        
      //  return <Paginator {...this.props}/>    // props = {this.props}
     // }
// </div>
 // </div>
  //  }
  }
export default Users