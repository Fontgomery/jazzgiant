import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const DOM =
        <html>
          <head>
            <link rel="stylesheet"
                  href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
          </head>
          <body>
            <App />
          </body>
        </html>

ReactDOM.render(DOM, document.getElementById('root'));
registerServiceWorker();
