const ohmValueCalculator = require('../helpers/ohmValueCalculator.js')
const dbUtils = require('../helpers/dbUtils')

module.exports = (req, res) => {
    let query = req.query
    const calculateOhmValue = () => {
        if (!ohmValueCalculator.ValidateBandColors(query)) {
            res.status(400).json({ res: "Invalid color(s)" })
            return
        }
        let resistance = ohmValueCalculator.CalculateOhmValue(query.bandAColor, query.bandBColor, query.bandCColor, query.bandDColor)
        let tolerance = ohmValueCalculator.GetToleranceRange(query.bandAColor, query.bandBColor, query.bandCColor, query.bandDColor)
        let result = { resistance, tolerance }
        res.status(200).json(result)
    }

    if (dbColors === null) {
        const cbErr = (err) => { res.status(500).json({ err: err }) }
        const cbSuccess = () => { calculateOhmValue() }
        dbUtils.getOhmRange(cbErr, cbSuccess)
    } else {
        calculateOhmValue()
    }
}
