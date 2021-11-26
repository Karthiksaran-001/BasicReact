import React from "react";
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // ADD extra class name for expenceitem after "card " give some extra space

  return <div className={classes}>{props.children}</div>; // helps to load the card tag
}

export default Card;
