import React from 'react';

import Item from './Item';
import './List.css';

const List = (props) => {
  if (props.items.length === 0) {
    return <h2 className='list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='list'>
      {props.items.map((item) => (
        <Item
          key={item.produtoMarca.idProdutoMarca}
          idItemFarmacia={item.idItemFarmacia}
          idProdutoMarca={item.produtoMarca.idProdutoMarca}
          title={item.produtoMarca.descricao}
          amount={item.preco}
        />
      ))}
    </ul>
  );
};

export default List;
