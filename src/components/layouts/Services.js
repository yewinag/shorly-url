import React from 'react';
import { serviceItems } from '../../constants';
import { Card } from '../common';

function Services() {
  return (
    <article className="article-row">
      <section className="static app-container">
        <header>
          <h4>Advanced Statistics</h4>
          <p>
            Track how your links are performing accross the web with our
            advanced statics dashboard.
          </p>
        </header>
        <section className="service">
          {serviceItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </section>
      </section>
    </article>
  );
}

export default Services;
