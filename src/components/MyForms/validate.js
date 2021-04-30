//import React from 'react'
export const recuiared = value => {
     // return console.log('recuiared')
     if (!value)  return "Error" ;
     return undefined
}
  

export const lenght = (max) => (value) => {
  
    if (value.length > max) return  `Длина строки больше ${max}` ;
   return  undefined
}
//export const lenght =max => value => value && value.lenght ? "Error2": undefined
 