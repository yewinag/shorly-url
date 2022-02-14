import React from 'react';

function List({ listElements }) {
  return (
    <ul>
      {listElements.map((item) => (
        <li key={item.link}>
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default List;
