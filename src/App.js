import React, { useState } from 'react';

function App() {
  const [techs, setTech] = useState(['Node.js', 'ReactJS', 'React Native']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...techs, newTech]);
    setNewTech('');
  }

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
