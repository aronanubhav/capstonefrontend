'use strict';
const express = require('express');
// Constants
const PORT = 3000;
const app = express();
app.get('/', (req, res) => {
  res.send('Docker and Nodejs');
});
app.listen(PORT);
console.log(`Running on ${PORT}`);
