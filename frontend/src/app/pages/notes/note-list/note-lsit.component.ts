import { Component, OnInit } from '@angular/core';
import {NoteModel} from "../../../shared/models/note.model";
import {NotesService} from "../../../shared/services/notes.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-note-lsit',
  templateUrl: './note-lsit.component.html',
  styleUrls: ['./note-lsit.component.scss'],
  animations: [trigger('itemAnim', [
    transition('void => *', [
      style({
        height: 0,
        opacity: 0,
        transform: 'scale(0.8)',
        'margin-bottom': 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        paddingLeft: 0,
      }),
      animate('50ms', style({
        height: '*',
        'margin-bottom': '*',
        paddingTop: '*',
        paddingBottom: '*',
        paddingRight: '*',
        paddingLeft: '*',
      })),
      animate(250)
    ]),
    transition('* => void', [
      animate(50, style({
        transform: 'scale(1.05)'
      })),
      animate(50, style({
        transform: 'scale(1)',
        opacity: 0.75
      })),
      animate('120ms ease-put', style({
        transform: 'scale(0.69)',
        opacity: 0
      }))

    ])
  ])]
})
export class NoteLsitComponent implements OnInit {

  notes: NoteModel[] = new Array<NoteModel>();
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notes = this.notesService.getAll();
  }
  deleteNote(id: number) {
    this.notesService.delete(id);
  }

}
