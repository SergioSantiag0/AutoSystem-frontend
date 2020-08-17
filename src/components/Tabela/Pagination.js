import React from 'react';

import { Lista, Numbers, Link } from './styles';

// Paginação
const Pagination = ({ alunosPorPagina, totalAlunos, paginate, theme }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAlunos / alunosPorPagina); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Lista className="pagination" theme={theme}>
        <p>
          Total de alunos: <span>{totalAlunos}</span>
        </p>
        {pageNumbers.map(number => (
          <Numbers key={number}>
            <Link onClick={() => paginate(number)} href="#">
              {number}
            </Link>
          </Numbers>
        ))}
      </Lista>
    </nav>
  );
};

export default Pagination;
