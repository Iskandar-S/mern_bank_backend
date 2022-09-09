const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true,
		default: 123456789,
	},
	description: {
		type: String,
	},
	accountNumber: {
		type: Number,
		required: true,
		default: Math.floor(Math.random() * 10 ** 12),
	},
	routingNumber: {
		type: Number,
		required: true,
		default: Math.floor(Math.random() * 10 ** 12),
	},
	card: {
		number: {
			type: Number,
			required: true,
			default: Math.floor(Math.random() * 10 ** 16),
		},
		expirationDate: {
			month: {
				type: Number,
				required: true,
				default: Math.floor(Math.random() * 13),
			},
			year: {
				type: Number,
				required: true,
				default: 22 + Math.floor(Math.random() * 4),
			},
		},
	},
	type: {
		type: String,
		required: true,
	},
	balance: {
		type: Number,
		required: true,
	},
	category: {
		type: String,
		default: 'personal',
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
