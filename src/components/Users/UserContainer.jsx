import React from 'react'
import { connect } from 'react-redux'
import {followAC, unfollowAC, setUsersAC, setTotalPageAC, serPageAC, toggleFatchingAc,getUsers} from './../Redux/userReducer'
import Users from  './Users'
//import * as axios from 'axios'
import preloader from './../Img/Preloader.gif'
import {Api} from './../Api/Api'
//import { Redirect } from 'react-router-dom'
import {Users2, PageSize, TotalUsers, ISFetching, GetUsers,ISAuth } from './../Redux/UsersSelector'
import {authHocPro} from './../Hoc/authHoc'
class UsersContainer extends React.Component {
    
    componentDidMount () {
       
        this.props.getUsers(); 
    }
      onChange = (page) =>{
         this.props.toggleFatchingAc (true);
          this.props.serPageAC(page);//currenPage
          Api.getUsers(page, this.props.pageSize)
         .then(res =>{this.props.setUsersAC(res.data.items  );
          this.props.toggleFatchingAc (false)})
      }
      render() {  
       // if (!this.props.isAuth) return <Redirect to = '/login' />
        return   <div>
        
        {this.props.isFetching ? <img className='preloader' src =  {preloader} alt="preloader"/>  : null }
        <Users  
            Users = {this.props.Users}
            pageSize= {this.props.pageSize}
            totalUsers = {this.props.totalUsers}
            currentPage = {this.props.currentPage} 
            onChange = {this.onChange}
            followAC = {this.props.followAC}
            unfollowAC = {this.props.unfollowAC}
             />
         </div> 
      }
}


let AuthComplete = authHocPro(UsersContainer)
let mapToState = (state) => ({
   Users: Users2(state),
   pageSize: PageSize(state),
   totalUsers: TotalUsers(state),
   isFetching: ISFetching(state),
   getUsers: GetUsers(state),
   isAuth: ISAuth(state)
})
export default connect(mapToState,{followAC, unfollowAC, setUsersAC, setTotalPageAC, serPageAC, toggleFatchingAc, getUsers} )(AuthComplete)//export default connect(mapToState,dispatchToState)(UsersContainer)