import React, { useState } from 'react';
import formImage from '../../assets/icons/bg-shorten-desktop.svg';
import { API_URL } from '../../utils/config';
import { Button, ShorterLinkCard } from '../common';

const INITIAL = [];

function ShorterLink() {
  const [result, setResult] = useState(INITIAL);
  const [value, setvalue] = useState('');

  const handlFetch = () => {
    fetch(`${API_URL}/shorten?url=${value}`)
      .then((res) => res.json())
      .then((json) => {
        setResult([json, ...result]);
        setvalue('');
      })
      .catch((e) => {
        setvalue('');
        console.error(e);
      });
  };

  const isError = result.length > 0 ? result[0].ok === false : false;
  const errorMsg = isError && result[0].error;
  const shorterList = result.filter((item) => item.ok === true);
  return (
    <article className="article-row">
      <section className="article-search-form">
        <form
          style={{
            backgroundImage: `url(${formImage})`,
          }}
        >
          <div className="form-group">
            <input
              placeholder="shorten a link here..."
              className={isError ? 'error' : ''}
              value={value}
              onChange={(e) => setvalue(e.target.value)}
            />
            <Button
              className="primary"
              label="Shorten it!"
              onClick={() => handlFetch()}
            />
          </div>
          <small className="error">{errorMsg}</small>
        </form>

        <section className="result-section">
          {shorterList.map((item) => (
            <ShorterLinkCard key={item.result.full_short_link} item={item} />
          ))}
        </section>
      </section>
    </article>
  );
}

export default ShorterLink;
