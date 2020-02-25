import React from 'react';
import { Link } from 'react-router-dom';

import { Head, Title, List } from './styles';

import logo from '../../assets/logo3.png';

import history from '../../services/history';

export default function Header() {
  return (
    <Head>
      <Title>
        <Link to="/dashboard">
          <img src={logo} alt="AutoSystem" />
        </Link>
      </Title>
      <List>
        <li id="br">
          <Link to="/dashboard">Alunos</Link>
        </li>
        <li id="br">
          <Link to="/instrutores">Instrutores</Link>
        </li>
        <li id="br">
          <Link to="/veiculos">Veículos</Link>
        </li>
        <li id="br">
          <Link to="/">Exames</Link>
        </li>
        <button
          type="button"
          onClick={() => {
            localStorage.removeItem('signed');
            history.push('/');
          }}
        >
          Logout
        </button>
      </List>
    </Head>
  );
}
