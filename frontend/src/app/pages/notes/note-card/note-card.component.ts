import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() body;
  @Input() title;
  @Input() link:string;
  @Output('delete') deleteEvent: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  onButtonDelete() {
    this.deleteEvent.emit();
  }

}
