import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Aluno from '../pages/Aluno';
import EditarAluno from '../pages/EditarAluno';
import Instrutor from '../pages/Instrutor';
import Veiculo from '../pages/Veiculo';
import Agenda from '../pages/AgendaAluno';
import Exames from '../pages/Exames';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/aluno" component={Aluno} isPrivate />
      <Route path="/EditarAluno/:cpf" component={EditarAluno} isPrivate />
      <Route path="/instrutores" component={Instrutor} isPrivate />
      <Route path="/veiculos" component={Veiculo} isPrivate />
      <Route
        path="/agendaAluno/:id/:nome/:instrutor_id/:instrutor/:categoria"
        component={Agenda}
        isPrivate
      />
      <Route path="/exames" component={Exames} isPrivate />
    </Switch>
  );
}
