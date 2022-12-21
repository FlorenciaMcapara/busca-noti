import React from 'react';
import '../styles/Spinner.css';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';


function Spinner() {
  return (
    <div className="d-flex justify-content-center mt-5 spinner-container">
      <BootstrapSpinner
        animation="border"
        role="status"
        size="lg"
        variant="primary"
        style={{ color: 'var(--color-accent)' }}
      />
    </div>
  );
}

export default Spinner;









