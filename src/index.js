import React from 'react';
import ReactDOM from 'react-dom';

import Calculator from './Calculator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Calculator />, document.getElementById('root'));
serviceWorker.unregister();
