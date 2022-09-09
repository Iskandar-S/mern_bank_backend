const Account = require('../models/Account');
const accountsData = require('../utilities/accounts-db');

module.exports = {
	seed: async (req, res) => {
		await Account.deleteMany({});
		await Account.create(accountsData);
		res.redirect('/api/accounts/');
	},
	get: async (req, res) => {
		try {
			const accounts = await Account.find({});
			res.json(accounts);
		} catch (err) {
			console.log(err);
		}
	},
	show: async (req, res) => {
		try {
			const account = await Account.findById(req.params.id);
			res.json(account);
		} catch (err) {
			console.log(err);
		}
	},
	create: async (req, res) => {
		try {
			await Account.create(req.body);
			console.log('Account has been added!');
			res.json('Account has been added!');
		} catch (err) {
			console.log(err);
		}
	},
	update: async (req, res) => {
		try {
			const updatedAccount = await Account.findByIdAndUpdate(
				req.params.id,
				req.body,
				{ new: true },
			);
			console.log('Account has been updated!');
			res.json(updatedAccount);
		} catch (err) {
			console.log(err);
		}
	},
	close: async (req, res) => {
		try {
			await Account.findByIdAndDelete(req.params.id);
			console.log('Closed Account');
			res.json('Closed Account');
		} catch (err) {
			console.log(err);
		}
	},
};
