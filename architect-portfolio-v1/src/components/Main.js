import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Contact from './Contact';
import Home from './Home';
import DesignDetails from './DesignDetails';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/designs' component={Home}></Route>
      <Route exact path='/designs_details' component={DesignDetails}></Route>
    </Switch>
  );
}

export default Main;