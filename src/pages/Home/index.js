import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { logout } from "../../services/auth";

import { Form, Container } from "./styles";

class Home extends Component {

  handleProdWith = async e => {
    e.preventDefault();

    try {
      this.props.history.push("/ProductsWith");
    } catch (err) {
      this.setState({
        error:
          "Houve um problema, tente novamente mais tarde."
      });
    }
  };

  handleProdWithout = async e => {
    e.preventDefault();

    try {
      this.props.history.push("/ProductsWithout");
    } catch (err) {
      this.setState({
        error:
          "Houve um problema, tente novamente mais tarde."
      });
    }
  };
  
  handleLogout = async e => {
    e.preventDefault();

    try {
      logout();
      this.props.history.push("/");
    } catch (err) {
      this.setState({
        error:
          "Houve um problema, tente novamente mais tarde."
      });
    }
  };

  render() {

    return (
      <Container>
        <Form>
        <h1>FarmApp</h1>
        <p>Bem vindo Farmácia</p>
        <button type="submit"  onClick={this.handleProdWith}>
            Produtos com receita
        </button>
        <button type="submit"  onClick={this.handleProdWithout}>
          Produtos sem receita
        </button>
        <button type="submit" onClick={this.handleLogout}>
            Logout
        </button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Home);
