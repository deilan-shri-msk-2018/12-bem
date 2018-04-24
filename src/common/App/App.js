import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Header from 'b:Header';
import Main from 'b:Main';

export default decl({
  block: 'App',
  content() {
    return (
      <Fragment>
        <Header/>
        <Main/>
      </Fragment>
    );
  }
});
