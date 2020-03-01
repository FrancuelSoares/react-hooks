import React, { useState, useEffect } from 'react';

function App() {
  const [techs, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...techs, newTech]);
    setNewTech('');
  }

  // Executado uma única vez quando o componente é carregado
  useEffect(() => {
    const storage = localStorage.getItem('techs');

    if (storage) {
      setTech(JSON.parse(storage));
    }

    // Executa sempre que um componente deixa de existir
    return () => {};
  }, []);

  // Executado toda vez que o estado de techs mudar
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li>{tech}</li>
        ))}
      </ul>
      <input
        type="text"
        onChange={e => setNewTech(e.target.value)}
        value={newTech}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
