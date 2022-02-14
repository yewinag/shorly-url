import React from 'react';

const images = require.context('../../assets/icons', true);

function SocialLink({ item: { link, icon } }) {
  return (
    <a href={link}>
      <div
        className="icon"
        style={{ backgroundImage: `url(${images(`./${icon}.svg`)})` }}
      />
    </a>
  );
}

export default SocialLink;
