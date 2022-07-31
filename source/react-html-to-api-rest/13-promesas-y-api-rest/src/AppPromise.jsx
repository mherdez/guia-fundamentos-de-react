import React, { useState } from 'react';
import './App.css';

import Card from './components/Card';
import Title from './components/Title';

function App() {
	const [users, setUsers] = useState([]);

	const usuariosPromise = new Promise((resolve, reject) => {
		const peticion = fetch(
			'https://randomuser.me/api/?gender=female&results=6'
		);
		if (peticion) {
			resolve(
				peticion.then((data) =>
					data.json().then(({ results }) => results)
				)
			);
		} else {
			reject();
		}
	});

	if (users.length === 0) {
		usuariosPromise
			.then((respuesta) => {
				setUsers(respuesta);
			})
			.catch((error) => console.log(error.message));
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
