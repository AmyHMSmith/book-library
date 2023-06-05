const express = require('express');
const { Reader } = require('./models');
const { createReader, getAllReaders, getReaderbyId, updateReader, deleteReader } = require('./controllers/reader');

const app = express();

app.use(express.json());

app.post('/readers', createReader);

app.get('/readers', getAllReaders);

app.get('/readers/:id', getReaderbyId);

app.patch('/readers/:id', updateReader);

app.delete('/readers/:id', deleteReader);

module.exports = app;
