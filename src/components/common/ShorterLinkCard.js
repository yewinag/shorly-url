import React, { useState } from 'react';
import Button from './Button';

function ShorterLinkCard({ item: { result } }) {
  const [copy, setcopy] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(result.full_short_link);
    setcopy(true);
  };
  return (
    <div className="card">
      <a href={result.original_link}>{result.original_link}</a>
      <div className="card-body">
        <p className="res-text">{result.full_short_link}</p>
        <Button
          disabled={copy}
          className="primary"
          label={copy ? 'Copied!' : 'Copy'}
          onClick={() => handleCopy()}
        />
      </div>
    </div>
  );
}

export default ShorterLinkCard;
