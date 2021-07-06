import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/app';
import GettingStarted from './components/getting-started'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.scss'

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route path="/" component={GettingStarted} />
      </Switch>
    </App>
  </BrowserRouter>, document.getElementById('root')
);
