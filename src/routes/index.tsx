import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
/*
  "repositories/:repository+" -> o sinal de + no final do parametro da url
  serve para indicar que tudo que vier depois dos ":" é um parametro
  por exemplo:
  "repositories/facebook/react" => "facebook/react" é o parametro,
  sem o "+" o router pensaria que era uma rota diferente
*/
