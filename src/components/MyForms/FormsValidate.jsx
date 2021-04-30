import React from 'react'
import './../Profile/MyPost/MyPostFormCss.css'
export  const Textarea = ({input, meta, ...props}) => {
  
  const errorform = meta.error && meta.touched
  
    return (
        <div  >
        <textarea {...input} {...props} className = {(errorform ? "Error" : "")}/>
        <div>{errorform &&<span>Ошибка</span>}</div>
        </div>
        
    )
}
export  const Input = ({input, meta, ...props}) => {

  const errorform = meta.error && meta.touched
  
    return (
        <div  >
        <input {...input} {...props} className = {(errorform ? "Error" : "")}/>
        <div>{errorform &&<span>Ошибка</span>}</div>
        </div>
        
    )
}