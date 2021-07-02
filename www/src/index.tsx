import React from 'react'
import ReactDOM from 'react-dom'
import { Home, GettingStarted } from './pages'
import { Layout } from './components';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.scss'

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/getting-started" component={()=> <>Рудд</>} />
      </Switch>
    </Layout>
  </BrowserRouter>, document.getElementById('root'));
