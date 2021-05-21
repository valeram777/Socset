import React from 'react'
import { connect } from 'react-redux'
//import preloader from './../Img/Preloader.gif'
//import * as axios from 'axios'
import Header from './Header'
import {setLogin, logout} from './../Redux/AuthReducer'
import { Api } from '../Api/Api'
import {toggleFatchingAc} from './../Redux/userReducer'
import {Login, Auth} from './../Redux/HeaderSelector'
class HeaderContainer extends React.Component {

    componentDidMount () {
        // this.props.toggleFatchingAc (true);
            Api.Header()
            .then(res =>{
          //  this.props.toggleFatchingAc (false);
    
            if (res.data.resultCode === 0){
             
                let  {email, id, login} = res.data.data  
     
                this.props.setLogin( id, email,login, true) 
            }
            }
      )}
      render () {
        return <Header {...this.props}/>
    
      } 
}
let mapToState = (state) => ({
    login: Login(state), 
    isAuth: Auth(state)
})
export default connect(mapToState,{setLogin, toggleFatchingAc, logout})(HeaderContainer)