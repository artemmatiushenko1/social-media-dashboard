import React from 'react';
import SvgIcon from './SvgIcon';
import './Activity.css';

export default function Activity(props) {
  return (
    <div className="activity card">
      <div className="activity__header u-mb--small">
        <h2 className="activity__header-title">{props.activityName}</h2>
        <SvgIcon
          className="activity__social-icon"
          iconName={'icon-' + props.platform}
        />
      </div>
      <div className="activity__details">
        <h2 className="activity__total">{props.total}</h2>
        <div
          className={
            'activity__rate ' +
            (props.rate > 0 ? 'activity-change--get' : 'activity-change--lost')
          }
        >
          <SvgIcon
            className="activity__rate-icon u-mr-tiny icon--tiny"
            iconName={props.rate > 0 ? 'icon-up' : 'icon-down'}
          />
          <p className="activity__rate-number">
            {props.rate.replace('-', '')}%
          </p>
        </div>
      </div>
    </div>
  );
}
