import React from 'react'
import './Users.css'

import foto from './123.jpg'
//import * as axios from 'axios'
import preloader from './../Img/Preloader.gif'
import { NavLink } from 'react-router-dom'
import { Api } from '../Api/Api'
class Users extends React.Component {
/*
  componentDidMount () {
    this.props.toggleFetching (true);
  
      axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
      .then(res =>{
      this.props.toggleFetching (false);
      this.props.setUsers(res.data.items); 
      this.props.setTotalPage(res.data.totalCount)})
    
 
}
 
  onChange = (page) =>{
    this.props.toggleFetching (true);
this.props.currenPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count${this.props.pageSize}`)
    .then(res =>{this.props.setUsers(res.data.items  );
      this.props.toggleFetching (false)})
  }

  render () {
    let pagesTotal = Math.ceil(this.props.totalUsers/this.props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesTotal; i++){
      pages.push(i);
    }
   
  return <div>

   <div className='Users'> 
   {this.props.isFetching ? <img className='preloader' src =  {preloader} alt="preloader"/>  : null }
   <div className="pagination"> {pages.map( p => {return <div className='pageHover' onClick = {(e)=>{this.onChange(p)}}>{p}</div>})}</div>
  {
      this.props.Users.map( u=> <div key={u.id} className="Users_columns">
          <div className="Users_foto">
          <img src={u.photos.small !=null  ? u.photos.small : foto } className="foto" alt='foto' />
          <div className="Users_button">{ u.follow ?<button onClick ={() =>{this.props.follow(u.id)}}>Follow</button> : 
          <button onClick ={() =>{this.props.unfollow(u.id)}}>Unfollow</button>} </div>
          </div>
          <div className="Users_column">
          <div className="Users_column-left">
          <div>{u.name}</div>
          <div>{u.status}</div>
          </div>
          <div className="Users_column-right">*/
        //  <div>{/*u.location.city*/}</div>
        //  <div>{/*u.location.country*/}</div>
         // </div>
      //   </div>
      //   </div>
          
     //     )
         
    //  }
// </div>
//  </div>
  //  }
 // }
 render () {
  let pagesTotal = Math.ceil(this.props.totalUsers/this.props.pageSize);
  let pages = [];
  let test = 50
  for (let i=1; i <= test; i++){
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
        <div className="Users_column-right">
        <div>{/*u.location.city*/}</div>
        <div>{/*u.location.country*/}</div>
        </div>
       </div>
       </div>
      
          )
         
      }
 </div>
  </div>
    }
  }
export default Users