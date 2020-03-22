import { Item } from '../item';

let collector: Item[] = [
  { amount: 1, name: 'imported bag of Almond Snickers', price: 75.99},
  { amount: 1, name: 'Discman', price: 55.00},
  { amount: 1, name: 'imported Bottle of Wine', price: 10.00},
  { amount: 1, name: '300# bag of Fair-Trade Coffee', price: 997.99},
];
let outer: Item[] = [];
export const BASKETTT = {
  itemArray: collector,
  itemOutputArray: outer,
  salesTax:0,
  totalCost:0
};
