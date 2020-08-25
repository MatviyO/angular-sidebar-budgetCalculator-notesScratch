import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {NoteModel} from "../../../shared/models/note.model";
import {NotesService} from "../../../shared/services/notes.service";

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.scss']
})
export class EditNotesComponent implements OnInit {
  note: NoteModel;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.note = new NoteModel();
  }

  onSubmit(form: NgForm) {
    this.notesService.add(form.value)

  }

}
