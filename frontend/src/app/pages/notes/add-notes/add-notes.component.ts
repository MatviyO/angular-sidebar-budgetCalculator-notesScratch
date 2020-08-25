import { Component, OnInit } from '@angular/core';
import {NoteModel} from "../../../shared/models/note.model";
import {NotesService} from "../../../shared/services/notes.service";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {
  note: NoteModel;
  noteId: number;
  newN: boolean;

  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.note = this.notesService.get(params.id);
        this.noteId = params.id;
        this.newN = false;
      } else {
        this.newN = true;
      }
    })

    this.note = new NoteModel();
  }

  onSubmit(form: NgForm) {
    if (this.newN) {
      this.notesService.add(form.value)
      this.router.navigate(['/notes']);
    } else {
      this.notesService.update(this.noteId, form.value.title,form.value.body)
    }


  }
}
