import React from 'react';
import sprite from '../assets/images/sprite.svg';

export default function SvgIcon(props) {
  return (
    <svg className={props.className + ' svg-icon'}>
      <use xlinkHref={sprite + '#' + props.iconName}></use>
    </svg>
  );
}
