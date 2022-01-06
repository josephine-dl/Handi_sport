export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Sabrina',
		imageUri: 'https://zupimages.net/up/22/01/nu7y.jpeg',
	}, {
		id: 'u2',
		name: 'Vanessa',
		imageUri: 'https://zupimages.net/up/22/01/nu7y.jpeg',
	}],
	messages: [{
		id: 'm1',
		content: 'Salut Vanessa !',
		createdAt: '2021-11-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Sabrina',
		},
	}, {
		id: 'm2',
		content: 'Comment vas-tu ?',
		createdAt: '2021-11-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Vanessa',
		},
	}, {
		id: 'm3',
		content: 'Très bien et toi ?',
		createdAt: '2021-11-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Vanessa',
		},
	}, {
		id: 'm4',
		content: 'Ça va merci.',
		createdAt: '2021-11-03T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Sabrina',
		},
	}, {
		id: 'm5',
		content: 'Tu commences les cours à quelle heure ?',
		createdAt: '2021-11-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Sabrina',
		},
	}, {
		id: 'm6',
		content: 'À 8h et toi ?',
		createdAt: '2021-11-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Vanessa',
		},
	}, {
		id: 'm7',
		content: 'Pareil.',
		createdAt: '2021-11-03T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Sabrina',
		},
	}]
}