import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { logout } from "../../services/auth";
import api from "../../services/api";
import Box from '../../components/Lista/Box';

import { Form, Container } from "./styles";

class ProductsWithout extends Component {

  
  state = {
    IdContaFarmacia: localStorage.getItem("USER_ID"),
    IdTipoProduto: "2",
    items: [],
    Busca: ""
  };

  async componentDidMount() {
    const { IdContaFarmacia, IdTipoProduto } = this.state;
    try {
        const response = await api.get("/ItemFarmacia", { params: {IdContaFarmacia, IdTipoProduto} });

        this.setState({
          items: response.data
              });
      } catch (err) {
        this.setState({
          error:
            "Houve um problema, tente novamente mais tarde."
        });
      }
  }

  handleFind = async e => {
    e.preventDefault();
    const { IdContaFarmacia, IdTipoProduto, Busca } = this.state;
    
      try {
        const response = await api.get("/ItemFarmacia", { params: {IdContaFarmacia, IdTipoProduto, Busca} });

        this.setState({
          items: response.data
              });
      } catch (err) {
        this.setState({
          error:
            "Houve um problema, tente novamente mais tarde."
        });
      }
    
  };

  handleHome = async e => {
    e.preventDefault();

    try {
      this.props.history.push("/Home");
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
    const { items } = this.state;

    const ColoredLine = ({ color }) => (
      <hr
          style={{
              color: color,
              backgroundColor: color,
              height: 1,
              width: 800
          }}
      />
  );

    return (
      <Container>
        <Form>
        <h1>FarmApp</h1>
        <button type="submit"  onClick={this.handleHome}>
            Home
        </button>
        <button type="submit" onClick={this.handleLogout}>
            Logout
        </button>
        </Form>
        <ColoredLine color="#52a2d1" />
        <p>Lista de produtos sem receita</p>
        <Form>
        <button type="submit" onClick={this.handleFind}>
            Buscar
        </button>
        <input
            type="text"
            placeholder="Busca"
            onChange={e => this.setState({ Busca: e.target.value })}
        />
        </Form>
        <Box items={items}/>
      </Container>
    );
  }
}

export default withRouter(ProductsWithout);
