import {Api} from './../Api/Api'
export let addPostAC = (Text) => {
    return {type:'ADD-POST', Text}
}

export let updateProfileAC = (profile) => {
    return {
        type:'PROFILE', profile
    }
}
export let getStatusAC = (status) => {
    return {
        type: 'GET-STATUS', status
    }
}
let init = {
    PostData:[ {id: 1, message: "Привет!"},
    {id: 1, message:"Как житуха?"},
    {id: 1, message: "Я готовил пирог"},
    {id: 1, message:"Я сделал торт"}],
    newText: "",
    userProfile: null,
    isFetching: false,
    status: ''
 }
const profileReducer = (state = init,action) => {
    let newState;
    if (action.type === 'ADD-POST'){
        let p = {
            id: 5,
            message: action.Text
        }
newState = {...state, PostData: [...state.PostData, p], newText: ""}//state.PostData.push(p); state.newText = ''; 
          
        return newState 
      }else if (action.type === 'PROFILE') {
          newState = {...state, userProfile: action.profile }
          return newState
      }else if (action.type === 'GET-STATUS'){
        newState = {...state, status: action.status}
        return newState
      }
      return state
}
export const fProfile = (userId) =>{
   // let userId = `123000`;
return (dispatch) => {
    Api.Profile(userId)
    .then(res=>{
        dispatch(updateProfileAC(res.data))
    })
          
}

}
export const getStatusApi = (userId) => {
    return (dispatch) => {
        Api.GetStatus(userId)
        .then (res=>{
            dispatch(getStatusAC(res.data));
            
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        Api.PostStatus(status)
    }
}
export default profileReducer