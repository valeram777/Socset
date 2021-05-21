import React from 'react'
import Post from './Post/Post'
//import PostDialog from './PostForm'
import { Field, reduxForm } from 'redux-form'
import {Textarea} from './../../MyForms/FormsValidate'
import {recuiared, lenght} from './../../MyForms/validate'
import './MyPostFormCss.css'
const MyPost = (props) => {
 
   //let refUrl= React.createRef();
    let post = props.profilePage.PostData.map(p =>  <Post message={p.message} />)
    let addPost = (values) => {
      
    props.onaddPost(values.Text);
       
    }
  
return (
    <div>
         {/*<textarea ref={refUrl} onChange = {updateText} value={props.newText}></textarea>
         <button onClick = {addPost}>Добавить</button> */}
         <FormPostRedux onSubmit={addPost}/>
         <div>{post}</div>
    </div>
   

)

}
 
const lenght10 = lenght(15)
const FormPost = (props)=> {
  return (
      <form onSubmit={props.handleSubmit}>
      <div ><Field name={'Text'} component={Textarea} placeholder = {"Сообщение"} validate = {[recuiared, lenght10] }/></div>
      <div><button>Отправить</button></div>
      </form>
  )
  }
  const FormPostRedux = reduxForm({form: 'post'})(FormPost)

export default MyPost