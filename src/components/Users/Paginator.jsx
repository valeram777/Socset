import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import preloader from './../Img/Preloader.gif'
import foto from './123.jpg'
import { Api } from '../Api/Api'
let Paginator =(props) => {

    let pagesTotal = Math.ceil(props.totalUsers/props.pageSize);
    let pages = [];
    //let test = 50
    for (let i=1; i <= pagesTotal; i++){
      pages.push(i);
    }
    
   let [indexPage, setIndex] = useState(1);
   let leftIndex = (indexPage -1)*10+1;
   let rightIndex = indexPage*10;
  return <div>
   <div className='Users'> 
   {props.isFetching ? <img className='preloader' src =  {preloader} alt="preloader"/>  : null } 
   <div className="pagination"> {pages.filter(p => p >=leftIndex && p <= rightIndex).map( p => {return <div className='pageRomb pageHover' onClick = {(e)=>{props.onChange(p)}}> {p}</div>})}
   {indexPage >1 && <button onClick={()=>{setIndex(indexPage-1)}}>Назад</button>}
   {indexPage && <button onClick={()=>{setIndex(indexPage+1)}}>Вперёд</button>}
   </div>
  {
    props.Users.map( u=> <div  className="Users_columns">   
          <div className="Users_foto">
          <NavLink to={'/profile/' + u.id}>
          <img src={u.photos.small !=null  ? u.photos.small : foto } className="foto" alt='foto' />
          </NavLink>
          <div className="Users_button">
          {u.followed 
            ? <button onClick ={() =>{Api.usersFollowDelete(u.id)
            .then(res =>{if(res.data.resultCode === 0){props.unfollowAC(u.id)}})}}>Unfollow</button> : 
            <button onClick ={() =>{Api.usersFollowPost(u.id)
            .then(res =>{if(res.data.resultCode === 0){props.followAC(u.id)}})}}>Follow</button>} 
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
export default Paginator