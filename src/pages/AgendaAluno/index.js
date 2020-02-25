import React, { useEffect, useState } from 'react';
import { parseISO, format } from 'date-fns';
import { AiOutlineSchedule } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';

import Header from '../../components/Header';
import Agenda from '../../components/Agenda';
import api from '../../services/api';

import { Container, Content, Aula, Title } from './styles';

export default function AgendaAluno({ match }) {
  const [aulas, setAulas] = useState([]);
  const aluno = match.params.nome;
  const { instrutor } = match.params;

  const [exibir, setExibir] = useState(false);

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get(`/aulas/${match.params.id}`);
      setAulas(response.data);
    }
    loadSchedule();
  }, [match.params.id]);

  const { id, nome, instrutor_id } = match.params;

  function handleCancelAula(aulaId) {
    confirmAlert({
      title: 'Deletar agendamento',
      message: `Tem cereteza que deseja deletar o agendamento da aula?`,
      buttons: [
        {
          label: 'Sim',
          onClick: () =>
            api
              .delete(`/aulas/${aulaId}`)
              .then(window.location.reload())
              .catch(error => {
                toast.error(
                  'Não foi possivel cancelar a aula, voce está a menos de 2 horas'
                );
              }),
        },
        {
          label: 'Não',
          onClick: () => window.location.reload(),
        },
      ],
    });
  }

  return (
    <Container>
      <Header />
      <Content>
        <Title>
          <div>
            <AiOutlineSchedule color="#00b652" />
            <h1>Agenda de aulas Práticas</h1>
          </div>
          <span>Aluno: {aluno}</span>
          <span>Instrutor: {instrutor}</span>
          <span>Aulas agendadas: {aulas.length}</span>
          <button
            type="button"
            onClick={() => {
              setExibir(true);
            }}
          >
            +
          </button>
        </Title>
        <ul>
          {aulas.map(aula => (
            <Aula key={aula.id} past={aula.past}>
              <strong>{format(parseISO(aula.date), 'dd/MM/yyyy')}</strong>
              <span>{format(parseISO(aula.date), 'HH:mm')}</span>
              <button
                onClick={() => {
                  handleCancelAula(aula.id);
                }}
                type="button"
              >
                Cancelar
              </button>
            </Aula>
          ))}
        </ul>
      </Content>

      {/* Modal de cadastro da aula */}
      <Agenda
        show={exibir}
        handleClose={() => {
          setExibir(!exibir);
          window.location.reload();
        }}
        aluno_id={id}
        aluno_nome={nome}
        instrutor_nome={instrutor}
        instrutor_id={instrutor_id}
      />
      {/* *********************************** */}
    </Container>
  );
}
