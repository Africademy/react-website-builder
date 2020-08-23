import React from "react";
import "./logo.css";
function Logo(props) {
  return <div className="logo">{props.title}</div>;
}
export default Logo;