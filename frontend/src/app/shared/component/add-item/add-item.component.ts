import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ItemModel} from "../../models/item.model";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Input() item: ItemModel;
  @Output() formSubmit: EventEmitter<ItemModel> = new EventEmitter<ItemModel>();
  constructor() { }
  isNewItem: boolean;

  ngOnInit() {
    if (this.item) {
      this.isNewItem = false
    } else {
      this.isNewItem = true
      this.item =  new ItemModel('', null);
    }
  }
  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value)
    form.reset()
  }
}
