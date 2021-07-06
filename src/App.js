import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'
//import UsersContainer from './components/Users/UserContainer'
import DialogsContainer from './components/Dialogs/DialogItems/DialogsContainer'
//import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login'
//import Chat from './components/Chat/MyChat'
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UserContainer'));
const Chat = React.lazy(() => import('./components/Chat/MyChat'));
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
      
      <Route path="/profile/:userId" render={()=>{ 
        return <React.Suspense fallback={<div>Загрузка...</div>}>
      <ProfileContainer  />
      </React.Suspense>}}/> 
      <Route path="/users" render={()=>{return <React.Suspense fallback={<div>Загрузка...</div>}>
      <UsersContainer  />
      </React.Suspense>}}/> 
      <Route path="/login" render={()=><Login  />}/> 
      <Route path="/chat" render={()=>{return <React.Suspense fallback={<div>Загрузка...</div>}>
      <Chat  />
      </React.Suspense>}}/> 
      </div>
      
    </div>
    
  );
}

export default App;
