import React from 'react';
import working from '../../assets/icons/illustration-working.svg';
import { Button } from '../common';

function HeaderDesc() {
  return (
    <article className="article">
      <header className="article-header">
        <section>
          <h1>More than just shorter links</h1>
          <h2>
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing
          </h2>
          <Button className="primary" label="Get Started" />
        </section>
        <section>
          <img src={working} alt="illustration working" />
        </section>
      </header>
    </article>
  );
}

export default HeaderDesc;
