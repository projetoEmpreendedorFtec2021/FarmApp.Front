import React from 'react';

import Card from '../UI/Card';
import List from './List';
import './Box.css';

const Box = (props) => {

  return (
    <div>
      <Card className='box'>
        <List items={props.items} />
      </Card>
    </div>
  );
};

export default Box;
