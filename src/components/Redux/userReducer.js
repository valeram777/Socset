import {Api} from './../Api/Api'
let init = {
    Users:[ ],
    pageSize: 10,
    totalUsers: 10,
    currentPage: 1,
    isFetching: false
}

const userReducer =(state = init, action) =>{
    
let newState;


  if (action.type === 'FOLLOW')  {
    newState = {...state, Users: state.Users.map(u => {if (u.id === action.userId){return {...u, followed: true}}return u})}
    return newState;
}else if (action.type === 'UNFOLLOW')  {
    newState = {...state, Users: state.Users.map(u => {if (u.id === action.userId){return {...u, followed: false}}return u})}
    
    return newState;
}else if (action.type === 'SETUSERS') {
    newState = {...state, Users: action.users}
    return newState;
}else if (action.type === 'TOTALPAGES') {
    newState = {...state, totalUsers: action.pages}
    return newState
}else if (action.type === 'NUMBERPAGE') {
newState = {...state, currentPage: action.page};
return newState
}else if (action.type === 'FETCHING'){
    newState = {...state, isFetching: action.isFetching}
    return newState
}
return state
}
export let followAC= (userId) => {
    return{type: 'FOLLOW', userId}
}
export let unfollowAC= (userId) => {
    return{type: 'UNFOLLOW', userId}
}
export let setUsersAC = (users) => {
    return{type: 'SETUSERS', users}
}
export let setTotalPageAC = (pages) => {
    return {type: 'TOTALPAGES', pages}
}
export let serPageAC = (page) =>{
    return{type:'NUMBERPAGE', page}
}
export let toggleFatchingAc = (isFetching) => {
    return{type:'FETCHING', isFetching}
}
export const getUsers = () => {
        return async (dispatch) => {
            dispatch(toggleFatchingAc (true));
          let res = await Api.getUsers();
          dispatch(toggleFatchingAc (false));
          dispatch(setUsersAC(res.data.items)); 
          dispatch(setTotalPageAC(res.data.totalCount))
        }  
}
export default userReducer