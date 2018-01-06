import React from 'react';
import './Navpills.css';

const Navpills = props =>


  <ul className="nav nav-tabs">
    <li >
      <a>Clicky Game</a>
    </li>
    <li >
      <a>{props.message}</a>
    </li>
    <li >
      <a>{props.currentScore}</a>
    </li>
    <li >
      <a> {props.topScore}</a>
    </li>
  </ul>;



export default Navpills;
