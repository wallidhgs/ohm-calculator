const { mockRequest, mockResponse } = require('mock-req-res')
const { expect } = require('chai')

const bandRange = require('../api/bandRange')
const calculator = require('../api/calculator')

// setting global db variable
dbColors = [
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

test('bandRange_endpoint', async () => {
  let req = mockRequest();
  let res = mockResponse();

  await bandRange(req, res);

  await new Promise(resolve => setTimeout(resolve, 200));

  expect(res.status.calledWith(200)).to.equal(true);
}, 500);

test('calculator_endpoint_400', async () => {
  let req = mockRequest();
  let res = mockResponse();

  await calculator(req, res);

  await new Promise(resolve => setTimeout(resolve, 200));

  expect(res.status.calledWith(400)).to.equal(true);
}, 400);

test('calculator_endpoint_200', async () => {
  let req = mockRequest();
  let res = mockResponse({
    query: {
      bandAColor: 'brown',
      bandBColor: 'brown',
      bandCColor: 'brown',
      bandDColor: 'brown'
    }
  });

  await calculator(req, res);

  await new Promise(resolve => setTimeout(resolve, 200));

  expect(res.status.calledWith(400)).to.equal(true);
}, 400);