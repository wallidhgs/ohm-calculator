
const express = require('express')
const cors = require('cors')
const config = require('config');

const appConfig = config.get('appConfig');

const app = express()

const { version, port } = appConfig

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

const bandRange = require('./api/bandRange')
const calculator = require('./api/calculator')

app.get(`/v${version}/band_range`, bandRange)
app.get(`/v${version}/calculator`, calculator)

app.listen(port, () => {
    console.log(`Back End app listening at http://localhost:${port}`)
})
