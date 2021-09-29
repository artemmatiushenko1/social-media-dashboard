import React from 'react';
import SvgIcon from './SvgIcon';
import './Followers.css';

export default function Followers() {
  return (
    <div className="followers__card">
      <p className="followers__username">
        <span>
          {/* <svg>
              <use xlinkHref={sprite + '#icon-facebook'}></use>
            </svg> */}
          <SvgIcon
            className="followers__social-icon"
            iconName="icon-facebook"
          ></SvgIcon>
        </span>
        @artemko_m
      </p>
      <h2 className="followers__total">1987</h2>
      <p className="paragraph">Followers</p>
      <div className="followers__change">
        <SvgIcon className="icon-up" iconName="icon-up"></SvgIcon>
        <span>12</span>
        Today
      </div>
    </div>
  );
}