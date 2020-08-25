import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() body;
  @Input() title;


  constructor() { }

  ngOnInit(): void {
  }

}