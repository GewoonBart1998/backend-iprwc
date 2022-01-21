const routesManager = require('./routes/routesManager')
const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors')

require('dotenv').config()

const app = express();

app.use(cors({
    origin: '*'
}))

app.use(bodyParser.urlencoded({ extended: false }));



console.log("   ----Start Backend----   ")

app.use(bodyParser.json())
app.use('/', routesManager)


app.listen(process.env.PORT | 2580);

