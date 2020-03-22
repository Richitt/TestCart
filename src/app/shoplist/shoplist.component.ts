import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../updateableList';
import { BASKET } from '../mockLists/ShoppingBasket1';
import { BASKETT } from '../mockLists/ShoppingBasket2';
import { BASKETTT} from '../mockLists/ShoppingBasket3';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {
  selectedItem: Item;
  items = ITEMS;
  basket1 = BASKET;
  basket2 = BASKETT;
  basket3 = BASKETTT;
  constructor() {
  }

  ngOnInit(): void {
  }

  addItem(newItemAmount: number, newItem: string, newItemPrice: number) {
    var test: Item = {
      amount: newItemAmount,
      name: newItem,
      price: newItemPrice
    }
    if (newItem) {
      this.items.itemArray.push(test);
    }
  }
  onBlur(event){
  }
  calculateGivenList(given){
    console.log("give " + JSON.stringify(given));
    var totalCost = 0;
    var totalTax = 0;
    for (let i = 0; i<given.itemArray.length; i++){
      var item = given.itemArray[i];
      var name = item.name;
      var amount = item.amount;
      var price = item.price;
      var currTax = 0;
      var addedTax = 0;
      if (!name.toUpperCase().includes("SKITTLES") && !name.toUpperCase().includes("COFFEE")
              && !name.toUpperCase().includes("POPCORN") && !name.toUpperCase().includes("SNICKERS")){
          currTax = +(Math.ceil((amount * price * 0.10)*20)/20).toFixed(2)
      }
      if (name.toUpperCase().includes("IMPORTED")){
          addedTax = +(Math.ceil((amount * price * 0.05)*20)/20).toFixed(2)
      }
      totalTax = +totalTax + +currTax + +addedTax;
      var newPrice = +price + +currTax + +addedTax;
      totalCost = +(+totalCost + +newPrice).toFixed(2)
      var outputItem: Item = {
        amount: amount,
        name: name,
        price: newPrice
      }
      given.itemOutputArray.push(outputItem);
      given.salesTax = totalTax;
      given.totalCost = totalCost;
    }
  }
  calculateOwnList(){
    var totalCost = 0;
    var totalTax = 0;
    for (let i = 0; i<this.items.itemArray.length; i++){
      var item = this.items.itemArray[i];
      var name = item.name;
      var amount = item.amount;
      var price = item.price;
      var currTax = 0;
      var addedTax = 0;
      if (!name.toUpperCase().includes("SKITTLES") && !name.toUpperCase().includes("COFFEE")
              && !name.toUpperCase().includes("POPCORN") && !name.toUpperCase().includes("SNICKERS")){
          currTax = +(Math.ceil((amount * price * 0.10)*20)/20).toFixed(2)
      }
      if (name.toUpperCase().includes("IMPORTED")){
          addedTax = +(Math.ceil((amount * price * 0.05)*20)/20).toFixed(2)
      }
      totalTax = +totalTax + +currTax + +addedTax;
      var newPrice = +price + +currTax + +addedTax;
      totalCost = +totalCost + +newPrice;
      var outputItem: Item = {
        amount: amount,
        name: name,
        price: newPrice
      }
      this.items.itemOutputArray.push(outputItem);
      this.items.salesTax = totalTax;
      this.items.totalCost = totalCost;
    }
  }
}
