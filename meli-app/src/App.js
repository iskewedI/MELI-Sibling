import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/blocks/Navbar';
import ProductDetail from './components/pages/ProductDetail';
import SearchResults from './components/pages/SearchResults';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path='/items/:id' component={ProductDetail} />
        <Route path='/items' component={SearchResults} />
        <Redirect to='/' />
      </Switch>
    </React.Fragment>
  );
};

export default App;
