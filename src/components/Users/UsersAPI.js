import React from 'react'
import * as axios from 'axios'
import Users from './Users'
import { Api } from '../Api/Api'
class UsersAPI extends React.Component {
    componentDidMount () {
      if (this.props.Users.length === 0){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
        .then(res =>{this.props.setUsers(res.data.items); this.props.setTotalPage(res.data.totalCount)})
    }
  }
    onChange = (page) =>{
  this.props.currenPage(page);
      Api.UsersApi
      .then(res =>{this.props.setUsers(res.data.items )})
    }
  
    render() {
      return   <div>{console.log(this.props)}
            
      <Users  
           Users = {this.props.Users}
           pageSize = {this.props.pageSize}
        totalUsers = {this.props.totalUsers}
          currentPage = {this.props.currentPage} 
          onChange = {this.onChange}
           />
       </div> 
       
    }
}


export default UsersAPI 