"use strict";
import React from "react";
import ReactDOM from "react-dom";

import logo from "./webpack.jpg";
import "./search.less";
class Search extends React.Component {
  render() {
    return (
      <div className="search-test">
        search page
        <img src={logo} alt="hello" />
      </div>
    );
  }
}
ReactDOM.render(<Search />, document.getElementById("root"));
