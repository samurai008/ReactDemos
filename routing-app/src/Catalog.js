import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom';
import Header from './Header';
import CatalogList from './CatalogList';

export default class Catalog extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3>Catalog</h3>        
        <div>
          <p><Link to="/catalog/list">Product list</Link></p>
        </div>
        <div>
          <h4>Routes go here</h4>
          <Route path="/catalog/list" component={CatalogList} />
        </div>
      </div>
    )
  }
}
