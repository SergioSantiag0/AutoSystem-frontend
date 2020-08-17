import React, { useEffect, useState, useContext } from 'react';
import { ThemeSwitcher } from '../../context/ThemeSwitcher';
import Swal from 'sweetalert2';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { parseISO, format } from 'date-fns';

import { toast } from 'react-toastify';
import history from '../../services/history';
import api from '../../services/api';

import Pagination from './Pagination';

import { Container } from './styles';

export default function Tabela({ aluno_ }) {
  const [alunos, setAlunos] = useState([]);
  const theme = useContext(ThemeSwitcher);

  useEffect(() => {
    api.get('/alunos').then(res => {
      setAlunos(res.data);
    });
  }, []);

  function handleDelete(id, nome) {
    Swal.fire({
      title: 'Deletar cadastro',
      icon: 'warning',
      type: 'warning',
      text: `Tem cereteza que deseja deletar o cadastro do aluno ${nome}?`,
      showConfirmButton: true,
      confirmButtonColor: '#04d361',
      confirmButtonText: 'Sim',
      showCancelButton: true,
      cancelButtonColor: '#f64c75',
      cancelButtonText: 'Não',
    }).then(async result => {
      if (result.value) {
        await api.delete(`/alunos/${id}`);
        toast.success('Cadastro deletado com sucesso');
        window.location.reload();
      }
    });
  }

  // Paginação
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [alunosPorPagina] = useState(6);

  const indexOfLastAluno = paginaAtual * alunosPorPagina;
  const indexOfFirstAluno = indexOfLastAluno - alunosPorPagina;
  const currentAlunos = alunos.slice(indexOfFirstAluno, indexOfLastAluno);

  const paginate = pageNumber => setPaginaAtual(pageNumber);

  return (
    <Container theme={theme.theme}>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Categoria</th>
            <th>Instrutor</th>
            <th>Data de matrícula</th>
            <th>Ações</th>
          </tr>
        </thead>
        {aluno_ ? (
          <tbody>
            {[aluno_].map(aluno => {
              const data_matric = parseISO(aluno.data_matric);
              const formatted = format(data_matric, "dd'/'MM'/'yyyy", {
                timeZone: 'America/Sao_Paulo',
              });

              function cpf(v) {
                v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
                v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
                v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
                // de novo (para o segundo bloco de números)
                v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen entre o terceiro e o quarto dígitos
                return v;
              }

              return (
                <tr key={aluno.id}>
                  <td>{aluno.nome}</td>
                  <td>{cpf(aluno.cpf)}</td>
                  <td>{aluno.categoria}</td>
                  <td>{aluno.instrutor.nome}</td>
                  <td>{formatted}</td>
                  <td>
                    <button
                      className="agendar"
                      type="button"
                      onClick={() => {
                        history.push(
                          `agendaAluno/${aluno.id}/${aluno.nome}/${aluno.instrutor_id}/${aluno.instrutor.nome}/${aluno.categoria}`
                        );
                      }}
                    >
                      Agenda
                    </button>
                    <button
                      onClick={() => {
                        history.push(`EditarAluno/${aluno.cpf}`);
                      }}
                      className="editar"
                      type="button"
                    >
                      Editar
                    </button>
                    <button
                      className="inativar"
                      type="button"
                      onClick={() => {
                        handleDelete(aluno.id, aluno.nome);
                      }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            {currentAlunos.map(aluno => {
              const data_matric = parseISO(aluno.data_matric);
              const formatted = format(data_matric, "dd'/'MM'/'yyyy", {
                timeZone: 'America/Sao_Paulo',
              });

              function cpf(v) {
                v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
                v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
                v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
                // de novo (para o segundo bloco de números)
                v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen entre o terceiro e o quarto dígitos
                return v;
              }

              return (
                <tr key={aluno.id}>
                  <td>{aluno.nome}</td>
                  <td>{cpf(aluno.cpf)}</td>
                  <td>{aluno.categoria}</td>
                  <td>{aluno.instrutor.nome}</td>
                  <td>{formatted}</td>
                  <td>
                    <button
                      className="agendar"
                      type="button"
                      onClick={() => {
                        history.push(
                          `agendaAluno/${aluno.id}/${aluno.nome}/${aluno.instrutor.id}/${aluno.instrutor.nome}/${aluno.categoria}`
                        );
                      }}
                    >
                      Agenda
                    </button>
                    <button
                      onClick={() => {
                        history.push(`EditarAluno/${aluno.cpf}`);
                      }}
                      className="editar"
                      type="button"
                    >
                      Editar
                    </button>
                    <button
                      className="inativar"
                      type="button"
                      onClick={() => {
                        handleDelete(aluno.id, aluno.nome);
                      }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      <Pagination
        alunosPorPagina={alunosPorPagina}
        totalAlunos={alunos.length}
        paginate={paginate}
        theme={theme.theme}
      />
    </Container>
  );
}
