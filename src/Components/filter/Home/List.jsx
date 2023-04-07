import React from 'react';
import ListItem from './ListItem/ListItem';
import './list.css';

const List = ({ list }) => (
  <div className='list-wrap'>
    {list.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </div>
);

export default List;
