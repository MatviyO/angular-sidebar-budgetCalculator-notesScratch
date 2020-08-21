import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemModel} from "../../models/item.model";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: ItemModel;
  @Output() deleteClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardLick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  onDeleteClick() {
    this.deleteClick.emit();
  }
  onCardClick() {
    this.cardLick.emit();
  }

}
