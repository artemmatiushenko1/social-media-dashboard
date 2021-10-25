import React from 'react';
import SvgIcon from './SvgIcon';
import './Followers.css';

export default function Followers(props) {
  return (
    <div className={'followers__card followers__card--' + props.platform}>
      <p className="followers__username">
        <span>
          <SvgIcon
            className="followers__social-icon"
            iconName={'icon-' + props.platform}
          ></SvgIcon>
        </span>
        {props.username}
      </p>
      <h2 className="followers__total">{props.followersTotal}</h2>
      <p className="paragraph">Followers</p>
      <div className="followers__change">
        <SvgIcon
          className="icon-up"
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
