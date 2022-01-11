const fp = require('lodash/fp');

/**
 * 数据
 * horsepower 马力， doller_value 加个， in_stock 库存
 */
const cars = [
  {
    name: "Ferrari FF",
    horsepower: 660,
    doller_value: 700000,
    in_stock: true
  },
  {
    name: "Spyker C12 Zagatao",
    horsepower: 650,
    doller_value: 648000,
    in_stock: false
  },
  {
    name: "Jaguar XKR-S",
    horsepower: 550,
    doller_value: 1320000,
    in_stock: false
  },
  {
    name: "Audi A8",
    horsepower: 525,
    doller_value: 1142000,
    in_stock: false
  },
  {
    name: "Aston Martin One-77",
    horsepower: 750,
    doller_value: 1850000,
    in_stock: true
  },
  {
    name: "Pagani Huayra",
    horsepower: 700,
    doller_value: 1300000,
    in_stock: false
  }
];


module.exports = cars;