import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import store from './components/Redux/redux-store';
import { Provider } from 'react-redux';


let renderTree = () => {
  ReactDOM.render(
      <BrowserRouter>
      <Provider store={store}>
        <App />
        </Provider>
       </BrowserRouter>,
      document.getElementById('root')
    );
}

renderTree();
store.subscribe(() => {
  //let state = store.getState();
  renderTree();
});
