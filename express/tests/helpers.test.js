const { expect } = require('chai')
const sinon = require('sinon');

const calculator = require('../helpers/ohmValueCalculator')
const dbUtils = require('../helpers/dbUtils')

const dbColorsMock = [
  {
    "color": "black",
    "band": 0,
    "multiplier": 0,
    "tolerance": null
  },
  {
    "color": "brown",
    "band": 1,
    "multiplier": 1,
    "tolerance": 1
  },
  {
    "color": "red",
    "band": 2,
    "multiplier": 2,
    "tolerance": 2
  },
  {
    "color": "orange",
    "band": 3,
    "multiplier": 3,
    "tolerance": 0.05
  },
  {
    "color": "yellow",
    "band": 4,
    "multiplier": 4,
    "tolerance": 0.02
  },
  {
    "color": "green",
    "band": 5,
    "multiplier": 5,
    "tolerance": 0.5
  },
  {
    "color": "blue",
    "band": 6,
    "multiplier": 6,
    "tolerance": 0.25
  },
  {
    "color": "violet",
    "band": 7,
    "multiplier": 7,
    "tolerance": 0.1
  },
  {
    "color": "grey",
    "band": 8,
    "multiplier": 8,
    "tolerance": 0.01
  },
  {
    "color": "white",
    "band": 9,
    "multiplier": 9,
    "tolerance": null
  },
  {
    "color": "gold",
    "band": null,
    "multiplier": -1,
    "tolerance": 5
  },
  {
    "color": "silver",
    "band": null,
    "multiplier": -2,
    "tolerance": 10
  },
  {
    "color": "pink",
    "band": null,
    "multiplier": -3,
    "tolerance": null
  },
  {
    "color": "none",
    "band": null,
    "multiplier": null,
    "tolerance": 20
  }
]

const calculatorTest = [
  { query: { bandAColor: 'brown', bandBColor: 'brown', bandCColor: 'brown', bandDColor: 'brown' }, validate: true, tolerance: { min: 108.9, max: 111.1 }, calculate: 110 },
]
test('calculator_validate', () => {
  dbColors = dbColorsMock
  calculatorTest.forEach((elem) => {
    let res = calculator.ValidateBandColors(elem.query)
    expect(res).to.equal(elem.validate)
  })
});
test('calculator_tolerance', () => {
  dbColors = dbColorsMock
  calculatorTest.forEach((elem) => {
    let res = calculator.GetToleranceRange(elem.query.bandAColor, elem.query.bandBColor, elem.query.bandCColor, elem.query.bandDColor)
    expect(res.min).to.equal(elem.tolerance.min)
    expect(res.max).to.equal(elem.tolerance.max)
  })
});
test('calculator_calculate', () => {
  dbColors = dbColorsMock
  calculatorTest.forEach((elem) => {
    let res = calculator.CalculateOhmValue(elem.query.bandAColor, elem.query.bandBColor, elem.query.bandCColor, elem.query.bandDColor)
    expect(res).to.equal(elem.calculate)
  })
});

// global variable set
test('db_getOhmRange_offline', () => {
  dbColors = dbColorsMock
  const spyFail = sinon.spy();
  const spySuccess = sinon.spy();
  dbUtils.getOhmRange(spyFail, spyFail)
  
  expect(spySuccess.called)
});
test('db_getBand_offline', () => {
  dbColors = dbColorsMock
  let res = dbUtils.getBandRow('black')
  let res2 = dbUtils.getBandRow('other')
  
  expect(res.color).to.equal('black')
  expect(res2).to.equal(undefined)
});

// global variable unset
test('db_getOhmRange', async () => {
  dbColors = null
  const spyFail = sinon.spy();
  const spySuccess = sinon.spy();
  dbUtils.getOhmRange(spyFail, spyFail)
  
  await new Promise(resolve => setTimeout(resolve, 200));
  expect(spySuccess.called)
}, 500);
