import React from 'react';
import '../styles/ErrorPage.css';

function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-page-content">
        <img src="/logo.png" alt="Logo" className="error-page-logo" />
        <h1>Recurso no encontrado</h1>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
      </div>
    </div>
  );
}

export default ErrorPage;




