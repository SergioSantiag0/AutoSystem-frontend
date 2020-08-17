import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiAlertCircle } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Tooltip from '../../components/Tooltip';

import api from '../../services/api';
import history from '../../services/history';

import logo from '../../assets/logo3.png';

import { Container, Content, InputContainer } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required(
      <>
        <FiAlertCircle color="#c53030" size={18} />
        <Tooltip description="E-mail obrigatório" />
      </>
    ),
  password: Yup.string().min(
    6,
    <>
      <FiAlertCircle color="#c53030" size={18} />
      <Tooltip description="No mínimo 6 digítos" />
    </>
  ),
});

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPass, setIsFocusedPass] = useState(false);

  async function handleSubmit(data) {
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
          <InputContainer isFocused={isFocusedEmail}>
            <div>
              <FiMail />
            </div>
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              onChange={e => setEmail(e.target.value)}
              onFocus={() => setIsFocusedEmail(true)}
              onBlur={() => setIsFocusedEmail(false)}
            />
          </InputContainer>
          <InputContainer isFocused={isFocusedPass}>
            <div>
              <FiLock />
            </div>
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              onChange={e => setPassword(e.target.value)}
              onFocus={() => setIsFocusedPass(true)}
              onBlur={() => setIsFocusedPass(false)}
            />
          </InputContainer>
          <button type="submit">Acessar</button>
        </Form>
        <Link to="/dashboard">Entre em contato conosco</Link>
      </Content>
    </Container>
  );
}
