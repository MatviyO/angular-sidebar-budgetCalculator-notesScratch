import { Component, OnInit } from '@angular/core';
import {ItemModel} from "../../shared/models/item.model";
import {UpdateEvent} from "../../shared/component/item-list/item-list.component";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  items: ItemModel[] = new Array<ItemModel>();
  total: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  addItem(newItem: ItemModel) {
    this.items.push(newItem);
    this.total += newItem.amount

  }
  deleteItem(item: ItemModel) {
    let index = this.items.indexOf(item)
    this.items.splice(index, 1)
    this.total -= item.amount
  }
  updateItem(updateEvent: UpdateEvent) {
      this.items[this.items.indexOf(updateEvent.old)] = updateEvent.new;
      this.total -= updateEvent.old.amount;
      this.total += updateEvent.new.amount;
  }
}
