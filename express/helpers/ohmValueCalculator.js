const dbUtils = require('./dbUtils')


const ohmValueCalculator = {
    // Calculates the Ohm value of a resistor based on the band colors.
    // _bandDColor is not required for this method
    CalculateOhmValue: (bandAColor, bandBColor, bandCColor, _bandDColor) => {
        let aVal = dbUtils.getBandRow(bandAColor).band
        let bVal = dbUtils.getBandRow(bandBColor).band
        let cVal = dbUtils.getBandRow(bandCColor).multiplier
        // let dVal = dbUtils.getBandRow(bandDColor).tolerance //Not required for tolerance calculations
        return ((aVal * 10) + bVal) * (Math.pow(10, cVal))
    },
    // Calculates the min & max Ohm value of a resistor based on the band colors.
    GetToleranceRange: (bandAColor, bandBColor, bandCColor, bandDColor) => {
        let aVal = dbUtils.getBandRow(bandAColor).band
        let bVal = dbUtils.getBandRow(bandBColor).band
        let cVal = dbUtils.getBandRow(bandCColor).multiplier
        let dVal = dbUtils.getBandRow(bandDColor).tolerance

        let baseRes = ((aVal * 10) + bVal) * (Math.pow(10, cVal))
        return {
            min: baseRes - baseRes * (dVal / 100),
            max: baseRes + baseRes * (dVal / 100)
        }
    },
    ValidateBandColors: (query) => {
        // for empty values should use 'none' string
        if (query.bandAColor === undefined || query.bandBColor === undefined  || query.bandCColor === undefined  || query.bandDColor === undefined) {
            return false
        }
    
        let foundA = dbColors.find(row => row.color === query.bandAColor.toLowerCase())
        let foundB = dbColors.find(row => row.color === query.bandBColor.toLowerCase())
        let foundC = dbColors.find(row => row.color === query.bandCColor.toLowerCase())
        let foundD = dbColors.find(row => row.color === query.bandDColor.toLowerCase())
        // Checking color in db range
        if (foundA == null || foundB == null || foundC == null || foundD == null) return false
        if (foundA.band === null || foundB.band === null || foundC.multiplier === null || foundD.tolerance === null) return false
        return true
    }
};

module.exports = ohmValueCalculator
