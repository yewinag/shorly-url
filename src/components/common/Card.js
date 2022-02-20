import React from 'react';

const images = require.context('../../assets/icons', true);

function Card({ item: { img, title, desc } }) {
  return (
    <div className="service-card">
      <picture>
        <img src={images(`./${img}.svg`)} alt={img} />
      </picture>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

export default Card;
