import { useState } from 'react';
import './App.css';

import { userRandomFemale } from './helpers/getUsuario';
import { Card } from './components/Card';

function App() {
	const [users, setUsers] = useState([]);

	const newUser = () => {
		const oldUsers = [...users];
		userRandomFemale().then((usuarios) => {
			setUsers([...oldUsers, ...usuarios]);
		});
	};

	if (users.length === 0) {
		userRandomFemale().then((usuarios) => {
			setUsers(usuarios);
		});
	} else {
		return (
			<>
				<header>
					<div className='title'>
						<h1>Random Users v4.0</h1>
						{/* <h1>Profiles App</h1> */}
						{/* <h3>From Html to Api Rest </h3> */}
					</div>
				</header>
				<main>
					<Card users={users} newUser={newUser} />
				</main>
			</>
		);
	}
}

export default App;
