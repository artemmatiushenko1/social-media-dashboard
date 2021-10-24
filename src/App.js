import React from 'react';
import './App.css';
import Followers from './components/Followers';
import Header from './components/Header';
import Overview from './components/Overview';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="followers-wrapper">
          <Followers />
          <Followers />
          <Followers />
          <Followers />
        </div>
        <Overview />
      </div>
    </div>
  );
}

export default App;
