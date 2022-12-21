import React from 'react';
import '../styles/Pagination.css';

function Pagination({ totalResults, pageNumber, onChange }) {
  const pageCount = Math.ceil(totalResults / 10);

  return (
    <div className="container padding-bottom">
      {pageNumber > 1 && (
        <button onClick={() => onChange(pageNumber - 1)}>Anterior</button>
      )}
      {pageNumber} de {pageCount}
      {pageNumber < pageCount && (
        <button onClick={() => onChange(pageNumber + 1)}>Siguiente</button>
      )}
    </div>
  );
}

export default Pagination;
