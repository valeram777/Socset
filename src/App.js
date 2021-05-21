import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import UsersContainer from './components/Users/UserContainer'
import DialogsContainer from './components/Dialogs/DialogItems/DialogsContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login'
const App = () => {
  
  //console.log()
  return (
    
    <div className="App">
      <div className='header'>
       <HeaderContainer />
      </div>
      <div className='navbar'>
      <Navbar /> 
      </div>
      <div>
    
      <Route path="/dialogs" render={()=><DialogsContainer />}/> 
      <Route path="/profile/:userId" render={()=><ProfileContainer  />}/> 
      <Route path="/users" render={()=><UsersContainer  />}/> 
      <Route path="/login" render={()=><Login  />}/> 
      </div>
      
    </div>
    
  );
}

export default App;
