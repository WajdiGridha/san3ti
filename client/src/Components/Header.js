import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <Jumbotron
          style={{
            backgroundImage: `url(https://www.apizee.com/wp-content/uploads/2022/03/relation-client-industrie.jpg)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <br></br>
          <br></br>
          <br></br> <br></br>
          <div className="row">
            <div
              className="conatiner-fluid col-sm-7 "
              style={{
                color: "white",
                backgroundColor: "rgba(20, 39, 78, 0.)",
                marginLeft: "20%",
              }}
            >
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
