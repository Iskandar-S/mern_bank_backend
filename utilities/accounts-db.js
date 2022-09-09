accounts = [
	{
		userId: 123456789,
		description: 'Joint',
		accountNumber: 84793357388,
		routingNumber: 26770108310,
		card: {
			number: 5505746150111240,
			expirationDate: { month: 04, year: 25 },
		},
		type: 'Debit',
		balance: 67892,
		category: 'Personal',
	},
	{
		userId: 123456789,
		description: 'Personal',
		accountNumber: 42992483991,
		routingNumber: 79508863438,
		card: {
			number: 6556510658828192,
			expirationDate: { month: 02, year: 26 },
		},
		type: 'Debit',
		balance: 73613,
		category: 'Personal',
	},
	{
		userId: 123456789,
		description: 'Purchases',
		accountNumber: 77342610083,
		routingNumber: 90870343466,
		card: {
			number: 4931735656296396,
			expirationDate: { month: 07, year: 24 },
		},
		type: 'Credit',
		balance: 20000,
		category: 'Personal',
	},
	{
		userId: 123456789,
		description: 'Payments',
		accountNumber: 50894840764,
		routingNumber: 84253308053,
		card: {
			number: 4413928669949930,
			expirationDate: { month: 10, year: 23 },
		},
		type: 'Credit',
		balance: 10000,
		category: 'Personal',
	},
];

module.exports = accounts;
