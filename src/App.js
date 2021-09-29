import React from 'react';
import './App.css';
import Followers from './components/Followers';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <div className="followers-wrapper">
          <Followers></Followers>
          <Followers></Followers>
          <Followers></Followers>
          <Followers></Followers>
        </div>
      </div>
    </div>
  );
}

export default App;
