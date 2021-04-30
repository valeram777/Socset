import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './Dialogs.css'
import DialogItems from './DialogItems/DialogItems'
import Message from './Messages/Messages'
import { Redirect } from 'react-router-dom'

//import {updateMessageAC,addMessageAC} from './../Redux/DialogReducer'
const Dialogs = (props) => {

   let dialogs = props.messagesPage.dialogData.map(d => <DialogItems name={d.name} id={d.id}/>)
   let messages = props.messagesPage.messagesData.map(m => <Message message={m.message}/>)
 
   let addMessage = (values)=> {
   props.addMessageAC(values.TextArea);
   }
   //console.log(props)
   if (!props.isAuth) return <Redirect to = '/login' />
return (
    <div className="dialogs">
      <div className="dialog-items">
        {dialogs}
        </div>
      <div className="messages">
      {messages}
      <div>
     {/*<textarea onChange={updateMessage} value ={props.messagePost}></textarea>
      <button onClick = {addMessage}>Добавить сообщение</button> */} 
      <FormDialogRedax onSubmit={addMessage}/>

      </div>
      </div>
     
     </div>)
}
const DialogForm = (props ) => {
  
return (
  <form onSubmit={props.handleSubmit}>
  <div><Field name={"TextArea"} component={'textarea'} /></div>
  <div><button>Отправить</button></div>
  </form>
)

}
const FormDialogRedax = reduxForm({form:'DialogForm'})(DialogForm)
export default Dialogs