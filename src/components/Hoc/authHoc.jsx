import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
//
let mapToState = (state) =>({
    isAuth: state.auth.isAuth
})
const authHocPro =(Component) => {
    class authPrepare extends React.Component {
        render (){
            if (!this.props.isAuth) return <Redirect to = '/login' />
            return <Component {...this.props}/>
        }
    }
   
 
let connectAuth = connect(mapToState)(authHocPro)
return connectAuth
}
