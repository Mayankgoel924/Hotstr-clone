import React from 'react';
import './App.css';
import Header from './components/Header.js/Header';
import Home from './components/Header.js/Home';
import Detail from './components/Detail';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/detail' element={[<Detail/>]}></Route>
          <Route path='/' element={[<Home/>]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
