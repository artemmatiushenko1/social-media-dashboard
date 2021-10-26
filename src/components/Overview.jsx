import React from 'react';
import Activity from './Activity';
import './Overview.css';

export default function Overview() {
  return (
    <div>
      <h2 className="overview__heading u-mb--small">Overview - Today</h2>
      <div className="overview__items-container">
        <Activity
          activityName="Page views"
          total="87"
          rate="3"
          platform="facebook"
        />
        <Activity
          activityName="Likes"
          total="52"
          rate="-2"
          platform="facebook"
        />
        <Activity
          activityName="Likes"
          total="5462"
          rate="2257"
          platform="instagram"
        />
        <Activity
          activityName="Profile views"
          total="52k"
          rate="1375"
          platform="instagram"
        />
        <Activity
          activityName="Retweets"
          total="117"
          rate="303"
          platform="twitter"
        />
        <Activity
          activityName="Likes"
          total="507"
          rate="553"
          platform="twitter"
        />
        <Activity
          activityName="Likes"
          total="107"
          rate="-19"
          platform="youtube"
        />
        <Activity
          activityName="Total views"
          total="1407"
          rate="-12"
          platform="youtube"
        />
      </div>
    </div>
  );
}
