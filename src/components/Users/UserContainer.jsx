import React from 'react'
import { connect } from 'react-redux'
import {followAC, unfollowAC, setUsersAC, setTotalPageAC, serPageAC, toggleFatchingAc,getUsers,filterAC} from './../Redux/userReducer'
import Users from  './Users'
//import * as axios from 'axios'
import preloader from './../Img/Preloader.gif'
import {Api} from './../Api/Api'
//import { Redirect } from 'react-router-dom'
import {Users2, PageSize, TotalUsers, ISFetching, GetUsers,ISAuth, Term, IsFrends, FilterState } from './../Redux/UsersSelector'
import {authHocPro} from './../Hoc/authHoc'
class UsersContainer extends React.Component {
    
   // componentDidMount () {
       
    //    this.props.getUsers(); 
   // }
    /*  onChange = (page) =>{
         this.props.toggleFatchingAc (true);
          this.props.serPageAC(page);//currenPage
          Api.getUsers(page, this.props.pageSize, "")
         .then(res =>{this.props.setUsersAC(res.data.items  );
          this.props.toggleFatchingAc (false)})
      }
      */
      render() {  
       // if (!this.props.isAuth) return <Redirect to = '/login' />
        return   <div>
        
        {this.props.isFetching ? <img className='preloader' src =  {preloader} alt="preloader"/>  : null }
        <Users  />
         </div> 
      }
}


let AuthComplete = authHocPro(UsersContainer)
let mapToState = (state) => ({
   Users: Users2(state),
   
   totalUsers: TotalUsers(state),
   isFetching: ISFetching(state),
   getUsers: GetUsers(state),
   isAuth: ISAuth(state),
   term: Term(state),
   isFrends: IsFrends(state)
})
export default connect(mapToState,{ setUsersAC, setTotalPageAC, serPageAC, toggleFatchingAc, getUsers,filterAC} )(AuthComplete)