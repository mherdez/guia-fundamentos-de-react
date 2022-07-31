import React, { useState } from 'react';
import './App.css';

import Title from './components/Title';
import UsersList from './components/UsersList';

function App() {
	const [users, setUsers] = useState([]);

	const newUser = async () => {
		const respuesta = await fetch(
			'https://randomuser.me/api/?gender=female'
		);
		const { results } = await respuesta.json();
		const newUser = { ...results[0], activo: true };
		setUsers([newUser, ...users]);
	};

	const cambiarActivo = (id) => {
		const newUsers = [...users];
		const userChange = newUsers.find(
			(user) => user.login.uuid === id
		);
		userChange.activo = !userChange.activo;
		setUsers(newUsers);
	};

	const deleteUsers = () => {
		setUsers(users.filter((user) => user.activo));
	};

	return (
		<>
			<Title newUser={newUser} deleteUsers={deleteUsers} />
			<div className='container'>
				<UsersList
					users={users}
					cambiarActivo={cambiarActivo}
				/>
			</div>
		</>
	);
}

export default App;
