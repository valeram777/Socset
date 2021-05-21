//import React from 'react'
import MyPost from './MyPost'
import {addPostAC } from './../../Redux/ProfileReducer'
import { connect } from 'react-redux'
import {ProfilePage, NewText} from './../../Redux/PostContainer'
/*const MyPostContainer = (props) => {
   
    let state = props.store.getState();
   
    let onaddPost = () => {
    
        props.store.dispatch(addPostAC())
    }
    let onupdateText = (text) => {
       props.store.dispatch(updateTextAC(text))
    }
return (
    <MyPost onaddPost={onaddPost} onupdateText={onupdateText} state = {state.profilePage} />

)

}*/

let mapToState = (state)=> {
  
    return {
        profilePage: ProfilePage(state),
        newText: NewText(state) 
    } 
}
let dispatchToPost = (dispatch)=> {
    return {
        onaddPost: (Text)=> {
            dispatch(addPostAC(Text))
        }
    }
}
const MyPostContainer = connect(mapToState, dispatchToPost)(MyPost);


export default MyPostContainer