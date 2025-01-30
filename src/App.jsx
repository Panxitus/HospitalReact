import React from 'react';
import Button from './components/atoms/button/Button';

const App = () => {
  const handleClick = () => {
    alert('¡Botón clicado!');
  };

  return (
    <div>
      <Button label="Clic aquí" onClick={handleClick} />
    </div>
  );
};

export default App;