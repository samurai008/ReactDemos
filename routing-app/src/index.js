import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Catalog from './Catalog';
import Contact from './Contact';
import Clients from './Clients';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/catalog" component={Catalog} />
                    <Route path="/contact/:email" component={Contact} />
                    <Route path="/clients" component={Clients} />
                  </Switch>
                </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
