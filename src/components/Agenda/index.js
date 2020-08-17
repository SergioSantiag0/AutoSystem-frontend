import React, { useState, useContext, useMemo, useEffect } from 'react';
import { ThemeSwitcher } from '../../context/ThemeSwitcher';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '../../services/api';

import { ModalStyled, ModalBody, ModalHeader, Aula, Button } from './styles';

const range = [7, 8, 9, 10, 11, 15, 16, 17, 18, 19];

export default function Agenda({
  show,
  handleClose,
  aluno_id,
  aluno_nome,
  instrutor_id,
  instrutor_nome,
}) {
  const theme = useContext(ThemeSwitcher);
  const [agenda, setAgenda] = useState([]);
  const [date, setDate] = useState(new Date());

  const [clicked, setClicked] = useState([]);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      setClicked('');
      const response = await api.get(`agenda/${instrutor_id}`, {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const checkDate = setMilliseconds(
          setSeconds(setMinutes(setHours(date, hour), 0), 0),
          0
        );
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          aula: response.data.find(a => isEqual(parseISO(a.date), compareDate)),
        };
      });
      setAgenda(data);
    }
    loadSchedule();
  }, [date, instrutor_id]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  async function handleAddAula(time, day, past) {
    if (past) {
      toast.error('O horário requisitado já passou');
    } else {
      const [hour, minutes] = time.split(':');
      const dataAula = setMilliseconds(
        setSeconds(setMinutes(setHours(day, hour), 0), 0),
        0
      );
      setClicked([...clicked, time]);

      await api.post('/aulas', {
        date: dataAula,
        aluno_id,
        instrutor_id,
      });
      toast.success('Aula agendada com sucesso');
    }
  }

  return (
    <ModalStyled show={show} size="lg">
      <ModalHeader theme={theme.theme}>
        <h5>Agendar aula</h5>
        <div>
          <span>Aluno: {aluno_nome}</span>
          <span>Instrutor: {instrutor_nome}</span>
        </div>
      </ModalHeader>

      <Modal.Body
        style={{
          background:
            theme.theme === 'dark'
              ? 'var(--darkBackground)'
              : 'var(--lightBackground)',
        }}
      >
        <ModalBody theme={theme.theme}>
          <header>
            <button type="button" onClick={handlePrevDay}>
              <MdChevronLeft
                size={36}
                color={
                  theme.theme === 'dark'
                    ? 'var(--darkTextColor)'
                    : 'var(--lightTextColor)'
                }
              />
            </button>
            <strong>{dateFormatted}</strong>
            <button type="button" onClick={handleNextDay}>
              <MdChevronRight
                size={36}
                color={
                  theme.theme === 'dark'
                    ? 'var(--darkTextColor)'
                    : 'var(--lightTextColor)'
                }
              />
            </button>
          </header>

          <ul>
            {agenda.map(time => (
              <Aula
                onClick={() => {
                  handleAddAula(time.time, date, time.past);
                }}
                past={time.past}
                key={time.time}
                available={!time.aula}
                className={clicked.includes(time.time) ? 'selected' : ''}
              >
                <strong>{time.time}</strong>
                <span>{time.aula ? time.aula.aluno.nome : 'Em aberto'}</span>
              </Aula>
            ))}
          </ul>
        </ModalBody>
      </Modal.Body>

      <Modal.Footer
        style={{
          background:
            theme.theme === 'dark'
              ? 'var(--darkTitleBackground)'
              : 'var(--lightTitleBackground)',
        }}
      >
        <Button close onClick={handleClose}>
          Fechar
        </Button>
        <Button onClick={handleClose}>Salvar</Button>
      </Modal.Footer>
    </ModalStyled>
  );
}
