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
          <Followers
            platform="facebook"
            username="@artemko_m"
            followersTotal="1987"
            followersChange="12"
          />
          <Followers
            platform="twitter"
            username="@_artemko"
            followersTotal="1044"
            followersChange="99"
          />
          <Followers
            platform="instagram"
            username="@artem"
            followersTotal="11k"
            followersChange="1099"
          />
          <Followers
            platform="youtube"
            username="@artemko"
            followersTotal="8239"
            followersChange="-144"
          />
        </div>
        <Overview />
      </div>
    </div>
  );
}

export default App;
