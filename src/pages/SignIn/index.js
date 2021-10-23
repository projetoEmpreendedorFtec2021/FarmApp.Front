import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import api from "../../services/api";
import { signin } from "../../services/auth";

import { Form, Container } from "./styles";

class SignIn extends Component {
  state = {
    login: "",
    senha: "",
    error: "",
    click: false
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { login, senha } = this.state;
    if (!login || !senha) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/Login/Farmacia", null,{ params: {login, senha } });
        signin(response.data.token);
        this.props.history.push("/Home");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais."
        });
      }
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
        <p2>Login da Farmácia</p2>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Login"
            onChange={e => this.setState({ login: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ senha: e.target.value })}
          />
          <button type="submit" className={btn_class} onClick={this.changeColor.bind(this)}>
            Entrar
          </button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);