const config = require('config');
const ohmValueCalculator = require('../../helpers/ohmValueCalculator.js')

const dbUtils = require('../../helpers/dbUtils')

const validateBandColors = (query) => {
    // for empty values should use 'none' string
    if (query.bandAColor === undefined || query.bandBColor === undefined  || query.bandCColor === undefined  || query.bandDColor === undefined) {
        return false
    }

    let foundA = dbColors.find(row => row.color === query.bandAColor.toLowerCase())
    let foundB = dbColors.find(row => row.color === query.bandBColor.toLowerCase())
    let foundC = dbColors.find(row => row.color === query.bandCColor.toLowerCase())
    let foundD = dbColors.find(row => row.color === query.bandDColor.toLowerCase())
    // Checking color in db range
    if (foundA === null || foundB === null || foundC === null || foundD === null) return false
    if (foundA.band === null || foundB.band === null || foundC.multiplier === null || foundD.tolerance === null) return false
    return true
};

export default function handler(req, res) {
    let query = req.query
    const calculateOhmValue = () => {
        if (!validateBandColors(query)) {
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
