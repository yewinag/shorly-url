import React from 'react';
import boostLayoutImage from '../../assets/icons/bg-boost-desktop.svg';
import { Button } from '../common';

function Boost() {
  return (
    <article
      className="boost-article"
      style={{ backgroundImage: `url(${boostLayoutImage})` }}
    >
      <section className="boost app-container">
        <h4>Boost your links today</h4>
        <Button className="primary" label="Get Started" />
      </section>
    </article>
  );
}

export default Boost;
