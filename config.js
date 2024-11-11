const path = require('path');

const config = {
  PORT: process.env.PORT || 3000,
  TASKS_FILE: 'tasks.json', 
  DATA_PATH: path.join(__dirname, 'data')
};

module.exports = config;
