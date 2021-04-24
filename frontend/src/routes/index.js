import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';

import Clients from '../pages/Clients';
import RegisterClient from '../pages/Clients/_registerClient';
import EditClient from '../pages/Clients/_editClient';

import Citys from '../pages/Citys';
import RegisterCity from '../pages/Citys/_registerCity';
import EditCity from '../pages/Citys/_editCity';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/clients" component={Clients} />
      <Route path="/client/register" component={RegisterClient} />
      <Route path="/client/edit" component={EditClient} />
      <Route path="/citys" component={Citys} />
      <Route path="/city/register" component={RegisterCity} />
      <Route path="/city/edit" component={EditCity} />
    </Switch>
  );
}
