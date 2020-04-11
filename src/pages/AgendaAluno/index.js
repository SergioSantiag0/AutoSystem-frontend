import React, { useEffect, useState } from 'react';
import { parseISO, format } from 'date-fns';
import Swal from 'sweetalert2';
import { AiOutlineSchedule } from 'react-icons/ai';
import { toast } from 'react-toastify';

import Header from '../../components/Header';
import Agenda from '../../components/Agenda';
import AgendarExame from '../../components/AgendarExame';

import api from '../../services/api';

import { Container, Content, Aula, Title } from './styles';

export default function AgendaAluno({ match }) {
  const [aulas, setAulas] = useState([]);
  const aluno = match.params.nome;
  const { instrutor } = match.params;

  // Controladores dos modais de cadastro de aulas e exames
  const [exibir, setExibir] = useState(false);
  const [exibirExam, setExibirExam] = useState(false);

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get(`/aulas/${match.params.id}`);
      setAulas(response.data);
    }
    loadSchedule();
  }, [match.params.id]);

  const { id, nome, instrutor_id } = match.params;

  function handleCancelAula(aulaId) {
    Swal.fire({
      title: 'Deletar agendamento',
      icon: 'warning',
      type: 'warning',
      text: 'Tem cereteza que deseja deletar o agendamento da aula?',
      showConfirmButton: true,
      confirmButtonColor: '#04d361',
      confirmButtonText: 'Sim',
      showCancelButton: true,
      cancelButtonColor: '#f64c75',
      cancelButtonText: 'Não',
    }).then(async result => {
      if (result.value) {
        try {
          await api.delete(`/aulas/${aulaId}`);
          toast.success('Agendamento deletado com sucesso');
          window.location.reload();
        } catch (e) {
          toast.error(
            'Não foi possivel deletar o agendamento, você está a menos de 2 horas'
          );
        }
      }
    });
  }

  function handleClearSchedule(aluno_id) {
    Swal.fire({
      title: 'Limpar agenda',
      icon: 'warning',
      type: 'warning',
      text: 'Tem certeza que deseja limpar a agenda do aluno?',
      showConfirmButton: true,
      confirmButtonColor: '#04d361',
      confirmButtonText: 'Sim',
      showCancelButton: true,
      cancelButtonColor: '#f64c75',
      cancelButtonText: 'Não',
    }).then(async result => {
      if (result.value) {
        try {
          await api.delete(`/agenda/${aluno_id}`);
          toast.success('Agenda limpada com sucesso');
          window.location.reload();
        } catch (e) {
          toast.success('Não foi possível limpar a agenda');
        }
      }
    });
  }

  function handleAddExam() {
    if (aulas.length < 20) {
      toast.error('O aluno ainda não concluiu as 20 aulas.');
    } else {
      setExibirExam(true);
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <Title>
          <div className="title">
            <AiOutlineSchedule color="#00b652" />
            <h1>Agenda de aulas práticas</h1>
          </div>
          <div className="dates">
            <span>Aluno: {aluno}</span>
            <span>Aulas agendadas: {aulas.length}</span>
            <div>
              <button
                className="add"
                type="button"
                onClick={() => {
                  setExibir(true);
                }}
              >
                +
              </button>
              <button className="exam" type="button" onClick={handleAddExam}>
                Agendar exame
              </button>
              <button
                type="button"
                className="clear"
                onClick={() => {
                  handleClearSchedule(id);
                }}
              >
                Limpar agenda
              </button>
            </div>
          </div>
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
      <AgendarExame
        show={exibirExam}
        handleClose={() => setExibirExam(!exibirExam)}
        dados={match.params}
      />
      {/* Modal de agendamento da exame */}
    </Container>
  );
}
