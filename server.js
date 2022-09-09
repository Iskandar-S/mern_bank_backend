// Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const accountRoutes = require('./routes/accounts');
const transactionRoutes = require('./routes/transactions');

// Environment Variables
require('dotenv').config();
const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3003;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true }, () =>
	console.log('MongoDB connection established: ', mongoURI),
);
// Error / Disconnection
db.on('error', (err) =>
	console.log(err.message + 'is mongo not running?'),
);
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/accounts', accountRoutes);
app.use('/api/transactions', transactionRoutes);

app.listen(PORT, () => {
	console.log('listening on port ', PORT);
});
