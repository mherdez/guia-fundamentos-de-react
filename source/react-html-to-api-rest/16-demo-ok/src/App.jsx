import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

import Title from './components/Title';
import UsersList from './components/UsersList';

function App() {
	const [users, setUsers] = useState([]);

	const newUser = async () => {
		const respuesta = await fetch(
			'https://randomuser.me/api/?gender=female&results=9'
		);
		const { results } = await respuesta.json();
		const getUsers = results.map((user) => ({ ...user, activo: true }));
		setUsers([...getUsers, ...users]);
	};

	const cambiarActivo = (id) => {
		const newUsers = [...users];
		const userChange = newUsers.find((user) => user.login.uuid === id);
		userChange.activo = !userChange.activo;
		setUsers(newUsers);
	};

	useEffect(() => {
		newUser();
	}, []);

	return (
		<>
			<Title />
			<div className='container'>
				<UsersList users={users} cambiarActivo={cambiarActivo} />
			</div>
		</>
	);
}

export default App;
