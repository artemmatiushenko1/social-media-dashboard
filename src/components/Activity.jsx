import React from 'react';
import SvgIcon from './SvgIcon';
import './Activity.css';

export default function Activity(props) {
  return (
    <div className="activity">
      <div className="activity__header">
        <h2 className="activity__header-title">{props.activityName}</h2>
        <SvgIcon
          className="activity__social-icon"
          iconName={'icon-' + props.platform}
        />
      </div>
      <div className="activity__details">
        <h2 className="activity__total">{props.total}</h2>
        <div className="activity__rate">
          <SvgIcon className="activity__rate-icon" iconName="icon-up" />
          <p className="activity__rate-number">{props.rate}%</p>
        </div>
      </div>
    </div>
  );
}
