const express = require('express');
const bodyParser = require('body-parser');
const { saveMessage } = require('./commandController');
const { getMessage } = require('./queryController');

const app = express();
app.use(bodyParser.json());

app.post('/command', saveMessage); // Ruta de escritura (command)
app.get('/query', getMessage);     // Ruta de lectura (query)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor CQRS simulado en http://localhost:${PORT}`);
});
