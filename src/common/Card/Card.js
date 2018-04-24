import { decl } from 'bem-react-core';

export default decl({
  block: 'Card',
  tag: 'article',
  mods({ type }) {
    return { type };
  },
});
