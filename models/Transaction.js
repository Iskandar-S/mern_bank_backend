const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema(
	{
		accountNumber: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		cleared: {
			type: Boolean,
			default: false,
		},
		amount: {
			type: Number,
			required: true,
		},
		merchantName: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true },
);

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
