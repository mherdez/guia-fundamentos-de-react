const URL =
	'https://randomuser.me/api/?gender=female&results=10';

export const userInicial = {
	gender: 'female',
	name: {
		title: 'Miss',
		first: 'Iida',
		last: 'Heikkinen',
	},
	location: {
		street: {
			number: 4129,
			name: 'Hermiankatu',
		},
		city: 'Kajaani',
		state: 'Ostrobothnia',
		country: 'Finland',
		postcode: 96699,
		coordinates: {
			latitude: '-14.9033',
			longitude: '122.4488',
		},
		timezone: {
			offset: '+9:30',
			description: 'Adelaide, Darwin',
		},
	},
	email: 'iida.heikkinen@example.com',
	login: {
		uuid: '524e6238-fadd-4469-a430-44f42094e7fe',
		username: 'angryelephant360',
		password: 'chevrole',
		salt: 'M1ZqzMyp',
		md5: 'ee6406abf2cb21bc41a92d676061cfaf',
		sha1: '93bc043e31d73a812a597ef4f6b626677c4eb3b9',
		sha256:
			'5716d27773fb091afe29276cccfb25dcb8504a0b1ddea21071c3a742f4123a17',
	},
	dob: {
		date: '1998-08-24T06:55:01.481Z',
		age: 24,
	},
	registered: {
		date: '2007-04-18T18:03:14.911Z',
		age: 15,
	},
	phone: '02-529-499',
	cell: '044-240-19-77',
	id: {
		name: 'HETU',
		value: 'NaNNA184undefined',
	},
	picture: {
		large:
			'https://randomuser.me/api/portraits/women/14.jpg',
		medium:
			'https://randomuser.me/api/portraits/med/women/14.jpg',
		thumbnail:
			'https://randomuser.me/api/portraits/thumb/women/14.jpg',
	},
	nat: 'FI',
};

export const userRandomFemale = async () => {
	const resultado = await fetch(URL);
	const { results } = await resultado.json();
	return results;
};
