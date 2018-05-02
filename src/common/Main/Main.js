import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';
import data from '../../static/data';

import Card from 'b:Card m:large m:medium m:small m:text';

const getImage = (path) => {
  if (!path) return;

  const chunks = path.split('.');
  const firstChunk = chunks.shift();

  return {
    x: path,
    x2: [firstChunk + '@2x', ...chunks].join('.'),
    x3: [firstChunk + '@3x', ...chunks].join('.')
  };
};

export default decl({
  block: 'Main',
  tag: 'main',
  content() {
    return (
      <Fragment>
        {data.map((card, i) => {
          card.image = getImage(card.image);
          switch (card.size) {
            case 'l':
              return <Card key={i} card={card} type="large" />;
            case 'm':
              return <Card key={i} card={card} type="medium" />;
            default:
              return <Card key={i} card={card} type={card.image ? 'small' : 'text' } />
          }
        })}
      </Fragment>
    );
  },
});
