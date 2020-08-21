import {Component, Inject, Input, OnInit} from '@angular/core';
import {ItemModel} from "../../models/item.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item: ItemModel
  ) { }

  ngOnInit() {
  }
  onSubmitted(updateItem: ItemModel) {
    this.dialogRef.close(updateItem)
  }

}
