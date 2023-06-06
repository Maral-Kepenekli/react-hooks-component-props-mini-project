import React from "react";

function MinutesToRead(props) {
 let cupsOrBoxes = "";
 if (props.minutes < 30) {
  const cupsCount = Math.ceil(props.minutes / 5);
  cupsOrBoxes = "☕️".repeat(cupsCount);
 } else {
  const boxesCount = Math.ceil(props.minutes / 10);
  cupsOrBoxes = "🍱".repeat(boxesCount);
 }
 return (
  <small>{`${cupsOrBoxes} ${props.minutes} min read`}</small>
 )
}

export default MinutesToRead;