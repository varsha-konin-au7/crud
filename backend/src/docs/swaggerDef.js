const { version } = require('../../package.json');
const config = require('../config/config');


const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Ryde assignment',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/varsha-konin-au7/crud_assignment',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
  
};

module.exports = swaggerDef;