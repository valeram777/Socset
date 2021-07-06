import React, {useState, useEffect} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import preloader from './../Img/Preloader.gif'
import foto from './123.jpg'
import { Api } from '../Api/Api'
import MySearchForm from './MySearchForm'
import {useDispatch, useSelector} from 'react-redux'
import {Users2, PageSize, TotalUsers, ISFetching, GetUsers,ISAuth, Term, IsFrends, FilterState, SelectorState } from './../Redux/UsersSelector'
import {followAC, unfollowAC, setUsersAC, setTotalPageAC, serPageAC, toggleFatchingAc,getUsers,filterAC} from './../Redux/userReducer'
import queryString from 'query-string'
let Paginator =(props) => {
 const dispatch = useDispatch();
 const Psize = useSelector(PageSize)
 const TUser = useSelector(TotalUsers)
 const follow = (id) => {dispatch(followAC(id))} 
 const unfollow = (id) => {dispatch(unfollowAC(id))}
 const Users=useSelector(Users2)
 const changeFilter = (values) => {dispatch(filterAC(values))}
 const selectorState =  useSelector(SelectorState)
 const history = useHistory();
 const filter = useSelector(FilterState)
 let search = history.location.search;
 const ws = new WebSocket(`wss://social-network.samuraijs.com/handlers/ChatHandler.ashx`)
 console.log(ws)
 useEffect (() => {
  //console.log(`filter`)
  dispatch(getUsers(1, Psize, filter))
 }, [])

 useEffect (()=> {
  //console.log(filter)
history.push({
  pathname:"/users",
  search:`?term=${filter.term}&${filter.isFrends}`
})
 }, [filter]
 )
 const onFilterChange = (page,filter) =>{
  
  dispatch(toggleFatchingAc (true));
  dispatch(filterAC(filter))
 
  dispatch(getUsers(page, Psize, filter))
  dispatch(toggleFatchingAc (false));


}

 const onChange = (page) =>{
  dispatch(toggleFatchingAc (true));
  dispatch(serPageAC(page));//currenPage
  dispatch(getUsers(page, Psize, filter))
  dispatch(toggleFatchingAc (false));

}
    

    let pagesTotal = Math.ceil(TUser/Psize);
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
   <MySearchForm onFilterChange = {onFilterChange} changeFilter={changeFilter} />
  
   {props.isFetching ? <img className='preloader' src =  {preloader} alt="preloader"/>  : null } 
   <div className="pagination"> {pages.filter(p => p >=leftIndex && p <= rightIndex).map( p => {return <div className='pageRomb pageHover' onClick = {(e)=>{onChange(p)}}> {p}</div>})}
   {indexPage >1 && <button onClick={()=>{setIndex(indexPage-1)}}>Назад</button>}
   {indexPage && <button onClick={()=>{setIndex(indexPage+1)}}>Вперёд</button>}
   </div>
  {
    Users.map( u=> <div  className="Users_columns">   
          <div className="Users_foto">
          <NavLink to={'/profile/' + u.id}>
          <img src={u.photos.small !=null  ? u.photos.small : foto } className="foto" alt='foto' />
          </NavLink>
          <div className="Users_button">
          {u.followed 
            ? <button onClick ={() =>{Api.usersFollowDelete(u.id)
            .then(res =>{if(res.data.resultCode === 0){unfollow(u.id)}})}}>Unfollow</button> : 
            <button onClick ={() =>{Api.usersFollowPost(u.id)
            .then(res =>{if(res.data.resultCode === 0){follow(u.id)}})}}>Follow</button>} 
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