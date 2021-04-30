
export let addMessageAC = (TextArea)=> {
    return {type:'ADD-MESSAGE', TextArea}
}
let init = {dialogData: [
    {id:1, name: 'Петя'},
    {id:2, name: 'Вася'},
    {id:3, name: 'Андрей'},
    {id:4, name: 'Иван'},
    {id:5, name: 'Сергей'}
  ],
  messagesData : [
    {message: 'Привет'},
    {message: 'Как дела?'},
    {message: 'Чем занят?'},
    {message: 'Доброго дня'},
    ],
    messagePost: ""
}
//let newState;
const dialogReducer = (state = init,action) => {
    let newState;
    if (action.type === 'ADD-MESSAGE') {
      /*state.messagesData.push({message: state.messagePost})
    state.messagePost="";*/
    newState = {...state, 
        messagesData: [...state.messagesData, {message: action.TextArea}]}

    return newState;
    }
return state
}
export default dialogReducer
