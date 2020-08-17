import React, { useState, useEffect, useContext } from 'react';
import { ThemeSwitcher } from '../../context/ThemeSwitcher';
import Swal from 'sweetalert2';
import { parseISO, format } from 'date-fns';

import { IoMdClose } from 'react-icons/io';
import { toast } from 'react-toastify';
import Header from '../../components/Header';

import { Container, Content, Title } from './styles';

import api from '../../services/api';

export default function Exames() {
  const [exames, setExames] = useState([]);
  const theme = useContext(ThemeSwitcher);

  useEffect(() => {
    async function loadExams() {
      const response = await api.get('/exames');
      setExames(response.data);
    }
    loadExams();
  }, []);

  async function handleFilterByCategory(categoria) {
    try {
      const response = await api.get(`/exames/${categoria}`);
      setExames(response.data);
    } catch (e) {
      toast.error(e.message);
    }
  }

  async function handleApproved(id) {
    Swal.fire({
      title: 'Aviso',
      icon: 'question',
      type: 'question',
      text: 'Tem certeza que o aluno foi aprovado?',
      showConfirmButton: true,
      confirmButtonColor: '#04d361',
      confirmButtonText: 'Sim',
      showCancelButton: true,
      cancelButtonColor: '#f64c75',
      cancelButtonText: 'Não',
    }).then(async result => {
      if (result.value) {
        const response = await api.put(`/exames/${id}`, {
          resultado: 'aprovado',
        });
        window.location.reload();
      }
    });
  }

  function handleDisapproved(id) {
    Swal.fire({
      title: 'Aviso',
      icon: 'question',
      type: 'question',
      text: 'Tem certeza que o aluno foi reprovado?',
      showConfirmButton: true,
      confirmButtonColor: '#04d361',
      confirmButtonText: 'Sim',
      showCancelButton: true,
      cancelButtonColor: '#f64c75',
      cancelButtonText: 'Não',
    }).then(async result => {
      if (result.value) {
        await api.put(`/exames/${id}`, {
          resultado: 'reprovado',
        });
        window.location.reload();
      }
    });
  }

  function handleDelete(id) {
    Swal.fire({
      title: 'Aviso',
      icon: 'warning',
      type: 'warning',
      text: 'Tem certeza que deseja cancelar o agendamento?',
      showConfirmButton: true,
      confirmButtonColor: '#04d361',
      confirmButtonText: 'Sim',
      showCancelButton: true,
      cancelButtonColor: '#f64c75',
      cancelButtonText: 'Não',
    }).then(async result => {
      if (result.value) {
        await api.delete(`/exames/${id}`);
        window.location.reload();
      }
    });
  }

  return (
    <Container theme={theme.theme}>
      <Header />
      <Content theme={theme.theme}>
        <Title theme={theme.theme}>
          <h1>Exames de direção agendados</h1>
          <select
            onChange={e => {
              handleFilterByCategory(e.target.value);
            }}
          >
            <option>Filtrar por categoria</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
          </select>
          <button
            type="button"
            onClick={() => {
              window.location.reload();
            }}
          >
            Exibir todos
          </button>
        </Title>
        <table>
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Instrutor</th>
              <th>Resultado</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {exames.map(exame =>
              exame.aluno !== null ? (
                <tr key={exame.id}>
                  <td>{exame.aluno.nome}</td>
                  <td>{exame.categoria}</td>
                  <td>{format(parseISO(exame.date), "dd'/'MM'/'yyyy")}</td>
                  <td>{exame.instrutor.nome}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleApproved(exame.id);
                      }}
                      className="approved"
                      type="button"
                    >
                      Aprovado
                    </button>
                    <button
                      onClick={() => {
                        handleDisapproved(exame.id);
                      }}
                      className="disapproved"
                      type="button"
                    >
                      Reprovado
                    </button>
                  </td>
                  <td className="delete_button">
                    <IoMdClose
                      onClick={() => {
                        handleDelete(exame.id);
                      }}
                    />
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
