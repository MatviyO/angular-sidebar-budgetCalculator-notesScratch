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
  filter(query: string) {
    query = query.toLowerCase().trim();

    let allREsults: NoteModel[] = new Array<NoteModel>()
    let terms: string[] = query.split(' ');
    terms = this.removeDuplicaess(terms);
    terms.forEach(element => {

    })



  }
  removeDuplicaess(arr: Array<any>): Array<any> {
    let uniqueResults: Set<any> = new Set<any>();
    arr.forEach(e => uniqueResults.add(e))

    return Array.from(uniqueResults)
  }

  relevateNotes(query: any): Array<NoteModel> {
    query = query.toLowerCase().trim();
    let relevantNotes = this.notes.filter(note => {
      if(note.body.toLowerCase().includes(query || note.title.toLowerCase().includes(query))) {
        return true
      }
       return false
    })

    return relevantNotes
  }
}
