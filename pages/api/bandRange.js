const dbUtils = require('../../helpers/dbUtils')

export default function handler(req, res) {
    const cbErr = (err) => { res.status(500).json({ err: err }) }
    const cbSuccess = (rows) => { res.status(200).json({ res: rows }) }

    dbUtils.getOhmRange(cbErr, cbSuccess)
}
