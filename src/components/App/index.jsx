import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import Reservation from '../Reservation';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

export const App = () => (
  <>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/reservation">
          <Reservation />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </>
);
