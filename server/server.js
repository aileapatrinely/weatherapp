const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

//Routers

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('build'));

//Routes

app.listen(PORT, () => {
    console.log(`LISTENING ON PORT: ${PORT}`);
  });  