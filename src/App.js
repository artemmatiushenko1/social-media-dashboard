import React from 'react';
import './App.css';
import Followers from './components/Followers';
import Header from './components/Header';
import Overview from './components/Overview';
import followersData from './data/data-followers.json';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header className="u-mb--big" />
        <div className="followers-wrapper u-mb--big">
          {followersData.map((item) => {
            return (
              <Followers
                platform={item.platform}
                username={item.username}
                followersTotal={item.followersTotal}
                followersChange={item.followersChange}
              />
            );
          })}
        </div>
        <Overview />
      </div>
    </div>
  );
}

export default App;
