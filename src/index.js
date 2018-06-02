import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Routes from './Router/Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
