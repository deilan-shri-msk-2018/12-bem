import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';
import data from '../../static/data';

import LargeCard from 'b:Card m:large';
import MediumCard from 'b:Card m:medium';
import SmallCard from 'b:Card m:small';
import TextCard from 'b:Card m:text';

const getXImage = (path, multiplier) => {
  const arr = path.split('.');
  arr[0] = arr[0] + `@${multiplier}x`;
  return arr.join('.');
};

export default decl({
  block: 'Main',
  tag: 'main',
  content() {
    return (
      <Fragment>
        {data.map((card, i) => {
          if(card.image) {
            card.image = {
              x: card.image,
              x2: getXImage(card.image, 2),
              x3: getXImage(card.image, 3)
            }
          }
          switch (card.size) {
            case 'l':
              return <LargeCard key={i} card={card} type="large" />;
            case 'm':
              return <MediumCard key={i} card={card} type="medium" />;
            default:
              return card.image ? (
                <SmallCard key={i} card={card} type="small" />
              ) : (
                <TextCard key={i} card={card} type="text" />
              );
          }
        })}
      </Fragment>
    );
  },
});
