import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import {LoginPost} from './../Redux/AuthReducer'
import {Api} from './../Api/Api'
import { Redirect } from 'react-router-dom'
import {recuiared, lenght} from './../MyForms/validate'
import {Input} from './../MyForms/FormsValidate'
import './login.css'
const lenght10 = lenght(20)
const Login =(props) => {
    
    
    return (
    <form onSubmit={props.handleSubmit}>
    <div><Field name={"email"} placeholder={"Логин"} component={Input} validate = {[recuiared, lenght10]}/></div>
    <div><Field name={"password"} placeholder={"Пароль"} component={Input} type="password" validate = {[recuiared, lenght10]}/></div>
    <div><Field name={"rememberme"} component={'input'} type="checkbox"/></div>
    <div>{props.error && <div className="AnyError">{props.error}</div>}</div>
    <div><button>Submit</button></div>
    </form>
    )
}
const LoginResux = reduxForm({form: 'login'})(Login)
const LoginForm = (props) => {
    const MySubmit =(data) => {
        props.LoginPost(data.email, data.password, data.rememberMe);
        Api.Header().then(res=>{
            if (res.data.data === 0) {
                <Redirect to = '/profile' />
            }
        })  
    }
    if (props.isAuth) {
        return <Redirect to = '/profile' />
    }
    return (
        <div className="item">
        <h1>LOGIN</h1>
        <LoginResux onSubmit={MySubmit}/>
        </div>)
}
const mapToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect (mapToProps, {LoginPost})(LoginForm)