const dbUtils = require('./dbUtils')

const ohmValueCalculator = {
    // Calculates the Ohm value of a resistor based on the band colors.
    // _bandDColor is not required for this method
CalculateOhmValue:(bandAColor, bandBColor, bandCColor, _bandDColor) => {
    let aVal = dbUtils.getBandRow(bandAColor).band
    let bVal = dbUtils.getBandRow(bandBColor).band
    let cVal = dbUtils.getBandRow(bandCColor).multiplier
    // let dVal = dbUtils.getBandRow(bandDColor).tolerance
    return ((aVal*10) + bVal) * (Math.pow(10, cVal))
},
    // Calculates the min & max Ohm value of a resistor based on the band colors.
    GetToleranceRange:(bandAColor, bandBColor, bandCColor, bandDColor) => {
        let aVal = dbUtils.getBandRow(bandAColor).band
        let bVal = dbUtils.getBandRow(bandBColor).band
        let cVal = dbUtils.getBandRow(bandCColor).multiplier
        let dVal = dbUtils.getBandRow(bandDColor).tolerance

        let baseRes = ((aVal*10) + bVal) * (Math.pow(10, cVal))
        return {
            min: baseRes - baseRes*(dVal/100),
            max: baseRes + baseRes*(dVal/100)
        }
    },
};

module.exports = ohmValueCalculator
