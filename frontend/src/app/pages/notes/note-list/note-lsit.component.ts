import { Component, OnInit } from '@angular/core';
import {NoteModel} from "../../../shared/models/note.model";
import {NotesService} from "../../../shared/services/notes.service";

@Component({
  selector: 'app-note-lsit',
  templateUrl: './note-lsit.component.html',
  styleUrls: ['./note-lsit.component.scss']
})
export class NoteLsitComponent implements OnInit {

  notes: NoteModel[] = new Array<NoteModel>();
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notes = this.notesService.getAll();
  }

}
