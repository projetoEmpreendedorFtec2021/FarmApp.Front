import React from 'react';

import Card from '../UI/Card';
import './Item.css';
import api from "../../services/api";

import IntlCurrencyInput from "react-intl-currency-input"

const Item =  (props) => {

  var preco = props.amount;

  const  updateInput = (event, value, maskedValue) => {

    preco= value
  
  };

  const  handleExcluir = async (event) => {
    const idItemFarmacia = props.idItemFarmacia;
    if(idItemFarmacia)
    {
      try {

        await api.delete("/ItemFarmacia/Delete", { params: {idItemFarmacia } });

        props.handleRefresh();
      } catch (err) {
        this.setState({
          error:
            "Houve um problema, tente novamente mais tarde."
        });
      }
    }
        
    };

  const  handleSalvar= async (event) => {
    const idProdutoMarca = props.idProdutoMarca;
    const idContaFarmacia= Number(localStorage.getItem("@farmapp-userid"));
    const idItemFarmacia = props.idItemFarmacia;
    const codigoItemFarmacia = null;
    
    if(preco)
    {
      try {
        await api.post("/ItemFarmacia/AddOrUpdate",  [{idProdutoMarca, idContaFarmacia, idItemFarmacia, codigoItemFarmacia, preco }] );
        props.handleRefresh();
      } catch (err) {
        this.setState({
          error:
            "Houve um problema, tente novamente mais tarde."
        });
      }
    }
        
    };

    const currencyConfig = {
      locale: "pt-BR",
      formats: {
        number: {
          BRL: {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          },
        },
      },
    };

  return (
    <li>
      <Card className='item'>
        <div className='item__description'>
          <h2>{props.title}</h2>
          <IntlCurrencyInput currency="BRL" config={currencyConfig} className='item__price'
          defaultValue={props.amount ? props.amount : ""}
          onChange={updateInput}
          max='999.99'/>
          <button type='submit' onClick={handleSalvar}>Salvar Preço</button>
          <button type='submit' onClick={handleExcluir}>Excluir Preço</button>
        </div>
      </Card>
    </li>
  );
};

export default Item;
