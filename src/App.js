import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Counter from './components/counter/counter.components';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/counter/0" />
        <Route exact path="/counter/:id" component={Counter} />
      </Switch>
    </div>
  );
};

export default App;
