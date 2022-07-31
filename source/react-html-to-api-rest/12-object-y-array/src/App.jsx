import React, { useState } from 'react';
import './App.css';

import Card from './components/Card';
import Title from './components/Title';

function App() {
  const usuariosIniciales = [
    { id: 5, name: 'User A' },
    { id: 4, name: 'User B' },
    { id: 7, name: 'User C' },
    { id: 8, name: 'User D' },
    { id: 9, name: 'User E' },
    { id: 29, name: 'User F' },
  ];

  const [users, setUsers] = useState(usuariosIniciales);

  return (
    <>
      <Title />
      <div className='container'>
        {users.map((user) => (
          <Card key={user.id} id={user.id} name={user.name} />
        ))}
      </div>
    </>
  );
}

export default App;
