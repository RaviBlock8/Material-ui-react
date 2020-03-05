import React from 'react';
import Navbar from './components/navbar/Navbar'
import Login from './components/login/Login'
import Layoutg from './components/Layoutg/Layoutg'
import FormComp from './components/FormComp/FormComp'
import SignIn from './components/Signin/SignIn'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar>
      <Layoutg/>
      <FormComp></FormComp> */}
      <SignIn></SignIn>
    </div>
  );
}

export default App;
