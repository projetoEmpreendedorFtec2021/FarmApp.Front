import React from 'react';

import Card from '../UI/Card';
import './Item.css';
import api from "../../services/api";



const Item = (props) => {

  var preco = props.amount;

  const  updateInput = (event) => {

    preco= event.target.value
  
  };

  const  handleExcluir = (event) => {
    const idItemFarmacia = props.idItemFarmacia;
    if(idItemFarmacia)
    {
      try {

        api.delete("/ItemFarmacia/Delete", { params: {idItemFarmacia } });
      } catch (err) {
        this.setState({
          error:
            "Houve um problema, tente novamente mais tarde."
        });
      }
    }
        
    };

  const  handleSalvar= (event) => {
    const idProdutoMarca = props.idProdutoMarca;
    const idContaFarmacia= Number(localStorage.getItem("@farmapp-userid"));
    const idItemFarmacia = props.idItemFarmacia;
    const codigoItemFarmacia = null;
    
    try {
      api.post("/ItemFarmacia/AddOrUpdate",  [{idProdutoMarca, idContaFarmacia, idItemFarmacia, codigoItemFarmacia, preco }] );
    } catch (err) {
      this.setState({
        error:
          "Houve um problema, tente novamente mais tarde."
      });
    }
        
    };

  return (
    <li>
      <Card className='item'>
        <div className='item__description'>
          <h2>{props.title}</h2>
          <input className='item__price'
          Value={props.amount}
          onChange={updateInput}/>
          <button type='submit' onClick={handleSalvar}>Salvar Preço</button>
          <button type='submit' onClick={handleExcluir}>Excluir Preço</button>
        </div>
      </Card>
    </li>
  );
};

export default Item;
