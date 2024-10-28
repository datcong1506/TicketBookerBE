const adminView = require('./admin/adminView');
const express = require('express');
const bodyParser = require('body-parser');
const app = express() // Ensure the path to your views module is correct
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Ensure this is called as a function

function Init() {
  adminView.Init(app);
  app.listen(PORT, () => {
    console.log(`It's alive on http://localhost:${PORT}`);
  });
}
module.exports = { Init, app };