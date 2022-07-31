import { useEffect, useState } from 'react';

import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardArrows } from './CardArrows';

export const Card = ({ users, newUser }) => {
	const [actual, setActual] = useState(0);
	const [textos, setTextos] = useState({});

	const previo = () => {
		setActual(actual - 1);
		if (actual === 0) {
			setActual(0);
		}
	};

	const siguiente = () => {
		setActual(actual + 1);
		if (actual === users.length - 5) {
			newUser();
			console.log(users);
			// setActual(users.length - 1);
		}
	};

	useEffect(() => {
		cambiaTextos('user');
	}, [actual]);

	const cambiaTextos = (icono) => {
		switch (icono) {
			case 'user':
				setTextos({
					parrafo: 'Hi, My name is',
					main: `${users[actual].name.first} ${users[actual].name.last}`,
					icono: 'user',
				});
				break;
			case 'email':
				setTextos({
					parrafo: 'My email address is',
					main: `${users[actual].email}`,
					icono: 'email',
				});
				break;
			case 'birthday':
				setTextos({
					parrafo: 'My birthday is',
					main: `${users[actual].dob.date.slice(
						8,
						10
					)}/${users[actual].dob.date.slice(5, 7)}/${users[
						actual
					].dob.date.slice(0, 4)}`,
					icono: 'birthday',
				});
				break;
			case 'address':
				setTextos({
					parrafo: 'My address is',
					main: `${users[actual].location.street.number} ${users[actual].location.street.name}`,
					icono: 'address',
				});
				break;
			case 'phone':
				setTextos({
					parrafo: 'My phone number is',
					main: `${users[actual].phone}`,
					icono: 'phone',
				});
				break;
			case 'username':
				setTextos({
					parrafo: 'My username is',
					main: `${users[actual].login.username}`,
					icono: 'username',
				});
				break;

			default:
				break;
		}
	};

	return (
		<>
			<div className='card'>
				<CardHeader user={users[actual]} />
				<CardBody textos={textos} />
				<CardFooter
					user={users[actual]}
					cambiaTextos={cambiaTextos}
					textos={textos}
				/>
				<CardArrows
					users={users}
					actual={actual}
					previo={previo}
					siguiente={siguiente}
				/>
			</div>
		</>
	);
};
