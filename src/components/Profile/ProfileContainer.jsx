import React from 'react'
import { connect } from 'react-redux'
import preloader from './../Img/Preloader.gif'
//import * as axios from 'axios'
import Profile from './Profile'
//import { toggleFatchingAc} from './../Redux/userReducer'
import {fProfile, getStatusApi,updateStatus, setPhoto } from './../Redux/ProfileReducer'
import {  withRouter } from 'react-router-dom'
import { Auth, UserProfile, TProfile, Status,  UpdateStatus, AuthId, SetPhoto } from '../Redux/ProfileSelector'
import {authHocPro} from './../Hoc/authHoc'
//import { Api } from './../Api/Api'
class ProfileContainer extends React.Component {
updateprofile = ()=>{
    let  userId = this.props.match.params.userId
   
        if (userId === 0){
            userId = this.props.authId
        }
     this.props.fProfile(userId);
     this.props.getStatusApi(userId)
}
    componentDidMount () {
        this.updateprofile();
    
    }
    componentDidUpdate(prevProps, prevState) {
        
       if (this.props.match.params.userId !== prevProps.match.params.userId){
      //  let  userId = this.props.match.params.userId
      this.updateprofile();
       // if (userId === 0){
        //    userId = this.props.authId
       // }
     //this.props.fProfile(userId);
     //this.props.getStatusApi(userId)
       }
    
    }

   
    render () {
       
      if (!this.props.userProfile){ 
          return <img src =  {preloader} alt="preloader"/>
      }else{
        
        return (   
            <Profile {...this.props} userProfile = {this.props.userProfile} setPhoto = {this.props.setPhoto}/>
        )}
    }
}

let AuthComplete = authHocPro(ProfileContainer)
let mapToProps = (state) => ({
   
    isAuth: Auth(state),
    userProfile: UserProfile(state),
    fProfile: TProfile(state),
    status: Status(state),
    updateStatus: UpdateStatus(state),
    authId: AuthId(state),
    setPhoto: SetPhoto(state)
});

let withLink = withRouter(AuthComplete)
export default connect(mapToProps,{fProfile, getStatusApi, updateStatus, setPhoto} )(withLink)//updateProfileAC}
