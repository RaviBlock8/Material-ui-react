import React from 'react';
import Navbar from './components/navbar/Navbar'
import Login from './components/login/Login'
import Layoutg from './components/Layoutg/Layoutg'
import FormComp from './components/FormComp/FormComp'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Layoutg/>
      <FormComp></FormComp>
    </div>
  );
}

export default App;
