import profileReducer  from './ProfileReducer'
import dialogReducer  from './DialogReducer'
let store = {
 _renderTree: {

 },
  _state: {
     profilePage:{
        PostData:[ {id: 1, message: "Привет!"},
        {id: 1, message:"Как житуха?"},
        {id: 1, message: "Я готовил пирог"},
        {id: 1, message:"Я сделал торт"}],
        newText: ""
     },
     messagesPage:{
        dialogData: [
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
     },
     
  },
  getState(){
    return this._state;
  },
  dispatch (action){

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
    this._renderTree(this._state);
  },
   subsribe (observer) {
  
    this._renderTree = observer
  }
}

 export default store
 window.store = store