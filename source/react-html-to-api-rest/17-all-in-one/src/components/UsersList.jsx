import Card from './Card';

const UsersList = ({ users, cambiarActivo }) => {
	return (
		<>
			{users.map(({ name, login, picture, activo }) => (
				<Card
					key={login.uuid}
					id={login.uuid}
					name={`${name.first} ${name.last}`}
					photo={picture.large}
					activo={activo}
					cambiarActivo={cambiarActivo}
				/>
			))}
		</>
	);
};

export default UsersList;
