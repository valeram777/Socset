import { stopSubmit } from 'redux-form';
import {Api} from './../Api/Api'
let init ={
    id: null,
    email:null,
    login: null,
    isAuth: false,
    captchaUrl: null
}


const AuthReducer = (state = init, action) => {
    let newState;
    if(action.type === 'SETLOGIN'){
        
        newState = {
            ...state, 
            ...action.data, 
            isAuth: action.data.isAuth,
            id: action.data.id
        }
        return newState;
    }else if (action.type === 'SETCAPTCHA'){
        newState = {
            ...state,
            ...action.data,
            captchaUrl: action.data.captchaUrl
        }
        return newState
    }
    return state

}
export let setLogin =(id, email, login, isAuth) => { return {type: 'SETLOGIN', data: {id, email, login, isAuth}}}
const setCaptcha = (captchaUrl) => {return {type: 'SETCAPTCHA', data: {captchaUrl}}}
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
export const LoginPost = (email, password, rememberMe, captcha)  => async (dispatch) => {
   // dispatch(stopSubmit("login", {_error:"Какая-то ошибка"}))
       let res =  await Api.Login(email, password, rememberMe,captcha)
    if (res.data.resultCode === 0){
        dispatch (setLogin(res.data.data.userId, email, email, true))
    }else {
        if(res.data.resultCode === 10){
            dispatch(getCaptchaUrl())
        }
        let message = res.data.messages[0]
        dispatch(stopSubmit("login", {_error:message}))
    } 
}
export const logout = () => {
    return async (dispatch) => {
        let res = await Api.LogOut()
            if (res.data.resultCode === 0){
                dispatch (setLogin(null, null, null, false))  
            }
    }
}
export const getCaptchaUrl = () => {
    return async (dispatch) => {
        let res = await Api.getCaptcha()
            dispatch(setCaptcha(res.data.url))
        
    }
}
export default AuthReducer