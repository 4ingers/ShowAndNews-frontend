import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {ApolloProvider} from 'react-apollo'

import client from '../services/client';
import Navigation from './header/Navigation'
import PageRenderer from '../services/page-renderer'


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Navigation/>
          <Switch>
            <Route path="/:page" component={PageRenderer} />
            <Route path="/" render={() => <Redirect to="/home" />} />
            <Route component={() => 404} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
