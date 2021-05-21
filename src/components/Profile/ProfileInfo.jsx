import React from 'react'

//import ProfileStatus from './ProfileStatus'
import ProfileStatusHook from './ProfileStatusHook'
let ProfileInfo =(props) => {  
    
  const PhotoSelected =(e) => {

props.setPhoto(e.target.files[0])
  }
 
  return (
   
   <div key = {props.userProfile.userId}>
   <img src = {props.userProfile.photos.large} alt='Фото'/> 
   <div>{Number(props.authId) === Number(props.match.params.userId) && <input type={"file"} onChange={PhotoSelected}></input>}</div>
    <div>Имя:  {props.userProfile.fullName}</div>
    <div>Обо мне:  {props.userProfile.aboutMe}</div>
    <div>Статус</div> 
    <div><ProfileStatusHook {...props} status = {props.status} /></div>
        </div>
    )
}
export default ProfileInfo