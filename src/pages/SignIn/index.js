import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';

import logo from '../../assets/logo3.png';

import { Container, Content } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O seu e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    try {
      await api.post(`/session`, { email, password });
      await localStorage.setItem('signed', true);
      history.push('dashboard');
    } catch (error) {
      toast.error('Falha na autenticação, verifique seus dados.');
    }
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="AutoSystem" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Acessar</button>
        </Form>
        <Link to="/dashboard">Entre em contato conosco</Link>
      </Content>
    </Container>
  );
}
