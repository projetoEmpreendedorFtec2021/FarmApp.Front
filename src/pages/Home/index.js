import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Container } from "./styles";

class Home extends Component {
  render() {
    return (
      <Container>
        <h1>FarmApp</h1>
        <p>Bem vindo</p>
      </Container>
    );
  }
}

export default withRouter(Home);
