import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './components/Profile';
import ProfileInfo from './components/ProfileInfo';



class App extends Component{



  render(){
    return <div className='container'>
      <Profile/>
      <div className='main-functionality'>
        <ProfileInfo/>
      </div>
    </div>
  }
}









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);


