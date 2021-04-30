import { stopSubmit } from 'redux-form';
import {Api} from './../Api/Api'
let init ={
    id: null,
    email:null,
    login: null,
    isAuth: false
}


const AuthReducer = (state = init, action) => {
    let newState;
    if(action.type === 'SETLOGIN'){
        
        newState = {
            ...state, 
            ...action.data, 
            isAuth: action.data.isAuth
        }
        return newState;
    }
    return state

}
export let setLogin =(id, email, login, isAuth) => { return {type: 'SETLOGIN', data: {id, email, login, isAuth}}}
//export const setLog = () => (dispatch) => {
  //  Api.Header()
  //  .then(res =>{
  //  this.props.toggleFatchingAc (false);
   
  //  if (res.data.resultCode === 0){
  //      let  {email, id, login} = res.data.data  
  //      this.props.setLogin(email, id, login, true) 
   // }
   
  //  }
//}
export const LoginPost = (email, password, rememberMe)  => (dispatch) => {
    dispatch(stopSubmit("login", {_error:"Какая-то ошибка"}))
    
        Api.Login(email, password, rememberMe)
.then(res =>{
    if (res.data.resultCode === 0){

    
        dispatch (setLogin(res.data.data.userId, email, email, true))
    }else {
        let message = res.data.messages[0]
        dispatch(stopSubmit("login", {_error:message}))
    }
    
})
    

}
export const logout = () => {
    return (dispatch) => {
        Api.LogOut()
        .then (res=> {
            if (res.data.resultCode === 0){
                dispatch (setLogin(null, null, null, null, false))  
            }
        })
    }
}

export default AuthReducer