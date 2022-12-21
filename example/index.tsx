import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Print } from '../.';

const App = () => {

  Print('Some log')

  return (
    <div>
      Some content
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
