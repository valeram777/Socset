import React from 'react'
import { connect } from 'react-redux'
import preloader from './../Img/Preloader.gif'
//import * as axios from 'axios'
import Profile from './Profile'
//import { toggleFatchingAc} from './../Redux/userReducer'
import {fProfile, getStatusApi,updateStatus } from './../Redux/ProfileReducer'
import { Redirect, withRouter } from 'react-router-dom'
import { Auth, UserProfile, TProfile, Status,  UpdateStatus } from '../Redux/ProfileSelector'
//import { Api } from './../Api/Api'
class ProfileContainer extends React.Component {

    componentDidMount () {
        let  userId = this.props.match.params.userId
        
        if (userId === 0){
            userId = 13147
        }
     this.props.fProfile(userId);
     this.props.getStatusApi(userId)
    }
    render () {
       
      if (!this.props.userProfile){ 
          return <img src =  {preloader} alt="preloader"/>
      }else{
        if (!this.props.isAuth) return <Redirect to = '/login' />
        return (   
            <Profile {...this.props} userProfile = {this.props.userProfile}/>
        )}
    }
}

let mapToProps = (state) => ({
    
    isAuth: Auth(state),//state.auth.isAuth,
    userProfile: UserProfile(state),//state.profilePage.userProfile,
    fProfile: TProfile(state),//state.fProfile,
    status: Status(state),//state.profilePage.status,
    updateStatus: UpdateStatus(state)//state.updateStatus
});

let withLink = withRouter(ProfileContainer)
export default connect(mapToProps,{fProfile, getStatusApi, updateStatus} )(withLink)//updateProfileAC}
