import React from "react";
import "./CharCard.css";

const CharCard = props => (
  <div className="card">
    <div className="img-container">
      <a onClick={()=>props.clicked(props.id)}>
      <img alt={props.name} src={props.url} />
      </a>
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>{props.name}</strong> 
        </li>
      </ul>
    </div>
  </div>
);

export default CharCard;
