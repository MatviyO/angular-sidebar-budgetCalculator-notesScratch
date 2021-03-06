import {Injectable} from "@angular/core";
import {NoteModel} from "../models/note.model";
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: NoteModel[] = new Array<NoteModel>();
  constructor() {
  }
  getAll() {
    return this.notes;
  }

  get(id: number) {
    return this.notes[id];
  }
  getId(note: NoteModel) {
    return this.notes.indexOf(note)
  }

  add(note: NoteModel) {
    let newLength = this.notes.push(note);
    let index = newLength - 1;
    return index;

  }

  update(id: number, title: string, body: string) {
    let note = this.notes[id]
    note.title = title;
    note.body = body;
  }

  delete(id:number) {
    this.notes.splice(id, 1)
  }

}
