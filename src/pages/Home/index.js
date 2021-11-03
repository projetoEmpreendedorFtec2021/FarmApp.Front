import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { logout } from "../../services/auth";

import { Form, Container } from "./styles";

class Home extends Component {
  state = {
    click: false
  };

  handleSignIn = async e => {
    e.preventDefault();

    try {
      logout();
      this.props.history.push("/");
    } catch (err) {
      this.setState({
        error:
          "Houve um problema com o logout, tente novamente mais tarde."
      });
    }
  };

  changeColor(){
    this.setState({click: !this.state.click})
  }

  render() {
    let btn_class = this.state.click ? "btn_click" : "btn_unlick";

    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
        <h1>FarmApp</h1>
        <p>Bem vindo Farmácia</p>
        <button type="submit" className={btn_class} onClick={this.changeColor.bind(this)}>
            Logout
        </button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Home);
