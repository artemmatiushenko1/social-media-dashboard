import React from 'react';
import Activity from './Activity';
import './Overview.css';
import activityData from '../data/data-activity.json';

export default function Overview() {
  return (
    <div>
      <h2 className="overview__heading u-mb--small">Overview - Today</h2>
      <div className="overview__items-container">
        {activityData.map((item) => {
          return (
            <Activity
              activityName={item.activityName}
              total={item.total}
              rate={item.rate}
              platform={item.platform}
            />
          );
        })}
      </div>
    </div>
  );
}
