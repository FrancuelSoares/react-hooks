import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  // Só vai ser reacriada na memória quando newTech ou techs mudarem
  const handleAdd = useCallback(() => {
    setTech([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

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

  // Realizar operações matemáticas
  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li>{tech}</li>
        ))}
      </ul>
      <p>
        Você possui <strong>{techSize}</strong> tecnologia(s).
      </p>
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
