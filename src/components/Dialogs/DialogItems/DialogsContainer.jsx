//import React from 'react'
import Dialogs from './../Dialogs'
import {addMessageAC} from './../../Redux/DialogReducer'
import { connect } from 'react-redux'
import  {MessagesPage, MessagePost,Auth } from './../../Redux/DialogSelector'
/*const DialogsContainer = () => {
 
  let state = props.store.getState();
   
   let onupdateMessage =(text) => {
   
      props.store.dispatch(updateMessageAC(text));
   }
   let onaddMessage = ()=> {
   
props.store.dispatch(addMessageAC())
   }
return (
    <Dialogs onupdateMessage= {onupdateMessage} onaddMessage={onaddMessage} state={state.messagesPage}/>
)
}*/
let mapToState = (state)=>{
return {
   messagesPage: MessagesPage(state),
   messagePost: MessagePost(state),
   isAuth: Auth(state)
}
}

   const DialogsContainer = connect(mapToState, {addMessageAC})(Dialogs)//connect(mapToState, dispathToDialogs)(Dialogs)
export default DialogsContainer