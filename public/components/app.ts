import React from '../lib/react.js';
import Calculators from './calculators';
import Box from './box';

function App() {
  return React.createElement(
    'div',
    {
      className: 'app',
    },
    // createElement(type, props, ...children)
    React.createElement(Box, null, '기본 박스'),
    React.createElement(Box, null, '작은 박스'),
    React.createElement(Box, null, '큰 박스')
  );
}

/*
const { createElement: h } = React;

function App() {
  return h(
    'div',
    {
      className: 'app',
    },
    h(Calculators)
  );
}
*/

export default App;
