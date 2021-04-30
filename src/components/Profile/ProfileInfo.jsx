import React from 'react'
//import ProfileStatus from './ProfileStatus'
import ProfileStatusHook from './ProfileStatusHook'
let ProfileInfo =(props) => {  
  return (
   <div key = {props.userProfile.userId}>
   <img src = {props.userProfile.photos.large} alt='Фото'/>
    <div>Имя:  {props.userProfile.fullName}</div>
    <div>Обо мне:  {props.userProfile.aboutMe}</div>
    <div>Статус</div> 
    <div><ProfileStatusHook {...props} status = {props.status} /></div>
        </div>
    )
}
export default ProfileInfo