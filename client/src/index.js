import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'typeface-roboto';
import 'normalize.css';
import './simple-grid.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import './index.css';
import './normalize.css';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
