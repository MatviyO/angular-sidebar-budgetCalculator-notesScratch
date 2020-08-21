import {Component, Input, OnInit} from '@angular/core';
import {ItemModel} from "../../models/item.model";
import {MatD}

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  @Input() item: ItemModel;
  constructor(
    public dialogRef: MatDialogRef<EditItemComponent>
  ) { }

  ngOnInit() {
  }
  onSubmitted(updateItem: ItemModel) {

  }

}
