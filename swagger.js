const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes/*.js']; // Replace with the path to your route files

swaggerAutogen(outputFile, endpointsFiles);
