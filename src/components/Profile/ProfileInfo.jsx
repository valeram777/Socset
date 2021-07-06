import React from 'react'
import { Link } from "react-router-dom";
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
      <div>Статус: <ProfileStatusHook {...props} status = {props.status} /></div> 
      <div>Обо мне:  {props.userProfile.aboutMe}</div>
      <div>Описание трудовой деятельности: {props.userProfile.lookingForAJobDescription}</div>
      {props.userProfile.lookingForAJob ?<div>В поиске работы</div>: null}
      <ul>Контакты
      <li>Facebook: <Link to={{ pathname: props.userProfile.contacts.facebook }} target="_blank">{props.userProfile.contacts.facebook}</Link></li>
      <li>Github: <a href={props.userProfile.contacts.github} rel="noreferrer" target="_blank">{props.userProfile.contacts.github}</a></li>
      <li>Instagram: <a href={props.userProfile.contacts.instagram} rel="noreferrer" target="_blank">{props.userProfile.contacts.instagram}</a></li>
      <li>MainLink: <a href={props.userProfile.contacts.mainlink} rel="noreferrer" target="_blank">{props.userProfile.contacts.mainlink}</a></li>
      <li>Twitter: <a href={props.userProfile.contacts.twitter} rel="noreferrer" target="_blank">{props.userProfile.contacts.twitter}</a></li>
      <li>VK: <a href={props.userProfile.contacts.vk} rel="noreferrer" target="_blank">{props.userProfile.contacts.vk}</a></li>
      <li>Website: <a href={props.userProfile.contacts.website} rel="noreferrer" target="_blank">{props.userProfile.contacts.website}</a></li>
      <li>Youtube: <a href={props.userProfile.contacts.youtube} rel="noreferrer" target="_blank">{props.userProfile.contacts.youtube}</a></li>
      </ul>
    </div>
    )
}
export default ProfileInfo