import React from 'react'
import MyPostContainer from './MyPost/MyPostContainer'
import ProfileInfo from './ProfileInfo'

const Profile = (props) => {

    return (
        <div className='content'>
        
        <ProfileInfo  userProfile={props.userProfile} status = {props.status} setPhoto={props.setPhoto} {...props}/>
        <div>
        <MyPostContainer />
        </div>
      </div>
    )
}
export default Profile