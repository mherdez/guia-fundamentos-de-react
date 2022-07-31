import React, { useState } from 'react';
import './App.css';

import Card from './components/Card';
import Title from './components/Title';

function App() {
	const [users, setUsers] = useState([]);

	const usuariosAsyncAwait = async () => {
		const respuesta = await fetch(
			'https://randomuser.me/api/?gender=female&results=6'
		);
		const { results } = await respuesta.json();
		setUsers(results);
	};

	if (users.length === 0) {
		usuariosAsyncAwait();
	}

	return (
		<>
			<Title />
			<div className='container'>
				{users.map(({ name, login, picture }) => (
					<Card
						key={login.uuid}
						id={login.uuid}
						name={`${name.first} ${name.last}`}
						photo={picture.large}
					/>
				))}
			</div>
		</>
	);
}

export default App;
