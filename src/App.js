import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShopePage from './pages/shop/Shop';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import SignInAndSignUpPage from './pages/signin-and-signup/SignInandSignUp';
import { auth } from './firebase/firebase.utils';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div >
      <Header currentUser={this.state.currentUser} />
  
      <Routes>
        <Route  path='/' element={<HomePage />} />
        <Route path='/signin' element={<SignInAndSignUpPage />} />
        <Route  path='/shop' element={<ShopePage />} />
      </Routes>  
      </div>
    );
  }   

}

export default App;
