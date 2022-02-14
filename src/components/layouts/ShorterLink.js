import React from 'react';
import formImage from '../../assets/icons/bg-shorten-desktop.svg';
import { Button, ShorterLinkCard } from '../common';

function ShorterLink() {
  return (
    <article className="article-row">
      <section className="article-search-form">
        <form
          style={{
            backgroundImage: `url(${formImage})`,
          }}
        >
          <input placeholder="shorten a link here..." />
          <Button className="primary" label="Shorten it!" />
        </form>
        <section className="result-section">
          <ShorterLinkCard />
        </section>
      </section>
    </article>
  );
}

export default ShorterLink;
