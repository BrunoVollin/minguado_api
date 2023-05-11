const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./src/routes/userRoutes');

require('dotenv').config();

console.log("->", process.env.MONGODB_URI);
// Configurar o servidor
const app = express();
app.use(express.json());

// Conectar ao banco de dados
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
})
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error(err));

// Configurar as rotas da API
app.use('/users', userRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`
  Servidor rodando na porta ${PORT}
`));
