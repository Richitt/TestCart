import { Item } from '../item';

let collector: Item[] = [
  { amount: 1, name: '16lb of Skittles', price: 16.00},
  { amount: 1, name: 'Walkman', price: 99.99},
  { amount: 1, name: 'bag of microwave Popcorn', price: 0.99}
];
let outer: Item[] = [];
export const BASKET = {
  itemArray: collector,
  itemOutputArray: outer,
  salesTax:0,
  totalCost:0
};
