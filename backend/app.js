const express=require('express')
const bodyParser =require('body-parser')
const cors = require('cors')

const cursosRoutes = require('./routes/cursos')
// const {appConfig} =require ('./config')

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use ('/v1', cursosRoutes)

module.exports = app