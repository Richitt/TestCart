import { Item } from '../item';

let collector: Item[] = [
  { amount: 1, name: 'imported bag of Vanilla-Hazelnut Coffee', price: 11.00},
  { amount: 1, name: 'Imported Vespa', price: 15001.25}
];
let outer: Item[] = [];
export const BASKETT = {
  itemArray: collector,
  itemOutputArray: outer,
  salesTax:0,
  totalCost:0
};
