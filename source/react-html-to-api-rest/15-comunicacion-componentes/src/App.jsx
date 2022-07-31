import React, { useState, useEffect } from 'react';
import './App.css';

import Title from './components/Title';
import UsersList from './components/UsersList';

function App() {
	const [users, setUsers] = useState([]);
	const [enabled, setEnabled] = useState(true);

	const usuariosAsyncAwait = async () => {
		const respuesta = await fetch(
			'https://randomuser.me/api/?gender=female&results=24'
		);
		const { results } = await respuesta.json();
		setUsers(results);
	};
	const cambiaActivo = () => {
		setEnabled(!enabled);
	};

	useEffect(() => {
		usuariosAsyncAwait();
	}, []);

	return (
		<>
			<Title />
			<UsersList
				users={users}
				cambiaActivo={cambiaActivo}
				enabled={enabled}
			/>
		</>
	);
}

export default App;
