
const express = require('express')
const cors = require('cors')
const config = require('config');

const appConfig = config.get('appConfig');

const app = express()

const { version, port, originAllowed } = appConfig

var corsOptions = {
    origin: originAllowed,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

const bandRange = require('./api/bandRange')
const calculator = require('./api/calculator')
const configCheck = require('./api/configCheck')

app.get(`/v${version}/band_range`, bandRange)
app.get(`/v${version}/calculator`, calculator)

app.get(`/health`, (_req, res) => { res.status(200).json({ version: appConfig.version }) })
app.get(`/config`, configCheck)

app.get(`*`, (req, res) => { res.status(405).json({ error: `${req.originalUrl} resource not allowed` }) })

app.listen(port, () => {
    console.log(`Back End app listening at http://localhost:${port}`)
})
