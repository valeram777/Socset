import React from 'react'
import './MyPostFormCss'
import { Field, reduxForm } from 'redux-form'
const FormPost = (props)=> {
return (
    <form onSubmit={props.handleSubmit}>
    <div ><Field name={'Text'} component={'textarea'}/></div>
    <div><button>Отправить</button></div>
    </form>
)
}
const FormPostRedux = reduxForm({form: 'post'})(FormPost)
const FormPostOut =(props) => {
    return (
   
    <FormPostRedux onSubmit={props.addPost}/>
    )
}
export default FormPostOut