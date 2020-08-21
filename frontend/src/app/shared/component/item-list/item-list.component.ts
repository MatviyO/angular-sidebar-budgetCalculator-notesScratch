import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemModel} from "../../models/item.model";
import {MatDialog} from '@angular/material/dialog';
import {EditItemComponent} from "../edit-item/edit-item.component";

export interface UpdateEvent {
  old: ItemModel;
  new: ItemModel;

}
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})


export class ItemListComponent implements OnInit {

  @Input() items: ItemModel[];
  @Output() deleteElem: EventEmitter<ItemModel> = new EventEmitter<ItemModel>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  deleteItem(item: ItemModel) {
    this.deleteElem.emit(item);

  }
  onCardClick(item: ItemModel) {
    const dialogRef = this.dialog.open(EditItemComponent, {
      width: '580px',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.update.emit({
          old: item,
          new: result
        })
      }
    })
  }

}
