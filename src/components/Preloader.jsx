import React from 'react'
import preloaderPic from './Img/Preloader.gif'
import './Preloader.css'
let preloader = ()=>{
return <div>
 <div className='loader'>
    <img src= {preloaderPic} alt = "Preloader"/>
 </div>
</div>
}
export default preloader