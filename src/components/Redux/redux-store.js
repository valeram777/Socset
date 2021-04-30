import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import profileReducer from './ProfileReducer';
import dialogReducer from './DialogReducer';
import userReducer from './userReducer'
import authReducer from './AuthReducer'
import thunkMiddle from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
let reducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    userPage: userReducer,
    auth: authReducer,
    form: formReducer
})
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddle)
  ));
//let store = createStore(reducer, applyMiddleware(thunkMiddle));
window.store = store;
export default store;