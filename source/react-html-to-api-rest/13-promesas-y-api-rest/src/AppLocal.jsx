import React, { useState } from 'react';
import './App.css';

import Card from './components/Card';
import Title from './components/Title';
import { usuariosLocales } from './helpers/usuariosLocales';

function App() {
	const [users, setUsers] = useState(usuariosLocales);

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
