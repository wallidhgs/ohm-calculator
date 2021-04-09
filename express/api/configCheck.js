const config = require('config')

const appConfig = config.get('appConfig');
const dbConfig = config.get('dbConfig');
const configCheck = config.get('configCheck');

module.exports = (req, res) => {
    if (!req.headers.usr || !req.headers.pass) {
        return res.status(403).json({ error: 'No credentials sent' });
    }
    if (req.headers.usr !== configCheck.usr || req.headers.pass !== configCheck.pass) {
        return res.status(405).json({ error: 'Wrong credentials' });
    }

    res.status(200).json({ appConfig, dbConfig })
}
