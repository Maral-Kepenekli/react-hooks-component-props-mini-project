import React from "react";
import blogData from "../data/blog";

function Header({ contentPosition = "left", direction = "horizontal", }) {
 const { name } = blogData;
 return (
  <header>
   <div className={`container-children ${direction} ${contentPosition}`}>
    <h1>{name}</h1>
   </div>
  </header>
 );
}

export default Header;
