import React, { Fragment } from 'react';
import { declMod, Bem } from 'bem-react-core';

export default declMod({ type : 'medium' }, {
  block : 'Card',
  content({card: {title, titleColor, image, description}}) {
    return (
      <Fragment>
        {this.__base(...arguments)}
        <Bem elem="title-container" tag="header">
          <Bem elem="title" tag="h2" style={{color: titleColor}}>{title}</Bem>
        </Bem>
        <Bem elem="image-container">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={require(`../../../static/${image.x3}`)}
            />
            <source
              media="(min-width: 512px)"
              srcSet={require(`../../../static/${image.x2}`)}
            />
            <img
              src={require(`../../../static/${image.x2}`)}
              srcSet={require(`../../../static/${image.x2}`)}
              alt={title}
            />
          </picture>
        </Bem>
        <Bem elem="content">
          <Bem elem="description" tag="p">{description}</Bem>
          <Bem elem="feedback">
            <Bem tag="img" src={require(`../../../static/img/Actions.png`)} alt="more" elem="feedback__more" />
            <Bem tag="img" src={require(`../../../static/img/Heart.png`)} alt="like" elem="feedback__like" />
          </Bem>
        </Bem>
      </Fragment>
    )
  }
});
