import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ItemModel} from "../../models/item.model";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Input() item: ItemModel = new ItemModel('', null);
  @Output() formSubmit: EventEmitter<ItemModel> = new EventEmitter<ItemModel>();
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value)
    form.reset()
  }
}
