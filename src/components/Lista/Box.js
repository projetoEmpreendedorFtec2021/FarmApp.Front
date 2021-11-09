import React from 'react';

import Card from '../UI/Card';
import List from './List';
import './Box.css';

const Box = (props) => {

  return (
    <div>
      <Card className='box'>
        <List items={props.items} handleRefresh={props.handleRefresh} />
      </Card>
    </div>
  );
};

export default Box;
