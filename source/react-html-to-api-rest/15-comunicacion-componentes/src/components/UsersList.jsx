import Card from './Card';

const UsersList = ({ users, cambiaActivo, enabled }) => {
	return (
		<div className='container'>
			{users.map(({ name, login, picture }) => (
				<Card
					key={login.uuid}
					id={login.uuid}
					name={`${name.first} ${name.last}`}
					photo={picture.large}
					cambiaActivo={cambiaActivo}
					enabled={enabled}
				/>
			))}
		</div>
	);
};

export default UsersList;
