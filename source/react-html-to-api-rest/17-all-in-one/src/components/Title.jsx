import './Title.css';

export default function Title({ newUser, deleteUsers }) {
	const eventAddUser = () => {
		newUser();
	};
	const eventDeleteUsers = () => {
		deleteUsers();
	};

	return (
		<>
			<h1 className='title'>Random Users v3.0</h1>
			<div className='buttons'>
				<button
					className='btn btn-add'
					onClick={eventAddUser}
				>
					Añadir usuario
				</button>
				<button
					className='btn btn-delete'
					onClick={eventDeleteUsers}
				>
					Eliminar suspendidas
				</button>
			</div>
		</>
	);
}
