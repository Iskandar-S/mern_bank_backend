const Transaction = require('../models/Transaction');
const transactionsData = require('../utilities/transactions-db');

module.exports = {
	seed: async (req, res) => {
		await Transaction.deleteMany({});
		await Transaction.create(transactionsData);
		res.redirect('/api/transactions/');
	},
	get: async (req, res) => {
		try {
			const transactions = await Transaction.find({});
			res.json(transactions);
		} catch (err) {
			console.log(err);
		}
	},
	show: async (req, res) => {
		try {
			const account = await Transaction.findById(req.params.id).sort({
				date: -1,
			});
			res.json(account);
		} catch (err) {
			console.log(err);
		}
	},
	create: async (req, res) => {
		try {
			await Transaction.create(req.body);
			console.log('Transaction has been added!');
			// res.json('/transactions');
		} catch (err) {
			console.log(err);
		}
	},
	edit: async (req, res) => {
		try {
			await Transaction.findOneAndUpdate(
				{ _id: req.body._id },
				req.body,
				{ returnDocument: 'after' },
			);
			console.log('Transaction has been updated!');
			// res.json();
		} catch (err) {
			console.log(err);
		}
	},
	delete: async (req, res) => {
		console.log(req.body._id);
		try {
			await Todo.findOneAndDelete({ _id: req.body._id });
			console.log('Deleted Transaction');
			res.json('Deleted Transaction');
		} catch (err) {
			console.log(err);
		}
	},
};
