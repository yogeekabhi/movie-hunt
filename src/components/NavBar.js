import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
             <h1 style={{fontFamily : "sans-serif", color: "sienna"}}>Movie Hunter</h1>
          </div>
        </nav>
      </div>
    );
  }
}
