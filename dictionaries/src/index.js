import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from "./store/index.js";

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
