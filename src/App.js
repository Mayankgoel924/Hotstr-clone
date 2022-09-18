import React from 'react';
import './App.css';
import Header from './components/Header.js/Header';
import Home from './components/Header.js/Home';
import Detail from './components/Detail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/login' element={[<Login/>]}></Route> 
          <Route path='/detail/:id' element={[<Detail/>]}></Route>
          <Route path='/' element={[<Home/>]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
