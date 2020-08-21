import { Component, OnInit } from '@angular/core';
import {ItemModel} from "../../shared/models/item.model";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  items: ItemModel[] = new Array<ItemModel>();
  constructor() { }

  ngOnInit(): void {
  }
  addItem(newItem: ItemModel) {
    this.items.push(newItem);

  }
  deleteItem(item: ItemModel) {
    let index = this.items.indexOf(item)
    this.items.splice(index, 1)
  }
}
