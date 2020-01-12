const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());


const game = require('./game');
game(app);



app.listen(4000);
