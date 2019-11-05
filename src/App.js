import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Counter from './components/counter/counter.components';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Counter} />
      </Switch>
    </div>
  );
};

export default App;
