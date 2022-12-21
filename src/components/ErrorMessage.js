import React from 'react';

function ErrorMessage({ error }) {
  return (
    <div>
      <p>
        Ocurrió un error al intentar cargar las noticias: {error.message}.
      </p>
    </div>
  );
}

export default ErrorMessage;
