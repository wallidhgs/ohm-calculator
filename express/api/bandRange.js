const dbUtils = require('../helpers/dbUtils')

module.exports = (_req, res) => {
    const cbErr = (err) => { res.status(500).json({ err: err }) }
    const cbSuccess = (rows) => { res.status(200).json({ res: rows }) }

    dbUtils.getOhmRange(cbErr, cbSuccess)
}
