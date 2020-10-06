import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import product from './routes/product.js';

dotenv.config();

connectDB();
const app = express();

app.use('/api/products', product);

const PORT = process.env.PORT || 5000;
const ENVIROMENT = process.env.NODE_ENV;

app.listen(PORT, console.log(`Server running in [${ENVIROMENT}] mode on port ${PORT}`.yellow.bold));
