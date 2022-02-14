import React from 'react';
import Button from './Button';

function ShorterLinkCard() {
  return (
    <div className="card">
      <a href="https://www.frontendmentor.io">https://www.frontendmentor.io</a>
      <div className="card-body">
        <p className="res-text" href="https://relink/k4lKyk">
          https://relink/k4lKyk
        </p>
        <Button className="primary" label="Copy" />
      </div>
    </div>
  );
}

export default ShorterLinkCard;
