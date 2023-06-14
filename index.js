const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./src/routes/userRoutes');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');

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

  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'My API',
        version: '1.0.0',
      },
    },
    // Paths to the API routes
    apis: ['./routes/*.js'],
  };

  // Initialize Swagger-jsdoc
const specs = swaggerJsdoc(options);

// Serve Swagger API documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Configurar as rotas da API
app.use('/users', userRoutes);


// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`
  Servidor rodando na porta ${PORT}
`));

// retorne em "/" um json com a mensagem "Bem vindo ao servidor de usuários"

app.get('/', (req, res) => {
  // return html
  res.send('<h1>Bem vindo ao servidor de usuários</h1>');
})
