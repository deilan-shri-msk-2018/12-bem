import React from 'react';
import { declMod, Bem } from 'bem-react-core';

export default declMod(
  { type: 'text' },
  {
    block: 'Card',
    content({ card: { title, titleColor, image, description } }) {
      return (
        <Bem elem="content">
          <Bem elem="title-container" tag="header">
            <Bem elem="title" tag="h2" style={{ color: titleColor }}>
              {title}
            </Bem>
          </Bem>
          <Bem elem="description" tag="p">{description}</Bem>
          <Bem elem="feedback">
            <Bem tag="img" src={require(`../../../static/img/Actions.png`)} alt="more" elem="feedback__more" />
            <Bem tag="img" src={require(`../../../static/img/Heart.png`)} alt="like" elem="feedback__like" />
          </Bem>
        </Bem>
      );
    },
  },
);
