import React from 'react';
import Button from './components/atoms/Button/';

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