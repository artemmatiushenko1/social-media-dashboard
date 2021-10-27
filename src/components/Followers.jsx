import React from 'react';
import SvgIcon from './SvgIcon';
import './Followers.css';

export default function Followers(props) {
  return (
    <div className={'followers__card card followers__card--' + props.platform}>
      <p className="followers__username u-mb--small">
        <span>
          <SvgIcon
            className="followers__social-icon u-mr-small"
            iconName={'icon-' + props.platform}
          ></SvgIcon>
        </span>
        {props.username}
      </p>
      <h2 className="followers__total">{props.followersTotal}</h2>
      <p className="paragraph u-mb--medium">Followers</p>
      <div className="followers__change">
        <SvgIcon
          className="followers__change-icon u-mr-tiny icon--tiny"
          iconName={props.followersChange > 0 ? 'icon-up' : 'icon-down'}
        ></SvgIcon>
        <p
          className={
            props.followersChange > 0
              ? 'followers-change--get'
              : 'followers-change--lost'
          }
        >
          <span>{props.followersChange.replace('-', '')} </span> Today
        </p>
      </div>
    </div>
  );
}
