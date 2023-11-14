import { Injectable } from '@angular/core';

export interface INote {
  title: string;
  text: string;
  id: number
}

Injectable({
  providedIn: 'root',
});

export class NoteService {
  public notes: INote[] = [
    { title: 'Заметка 1', text: 'Текст первой заметки', id: 1 },
    { title: 'Заметка 2', text: 'Текст второй заметки', id: 2  },
    { title: 'Заметка 3', text: 'Текст третьей заметки' , id: 3 },
    { title: 'Заметка 4', text: 'Текст четвертой заметки' , id: 4 },
  ];

  getNotes() {
    return this.notes;
  }
  addNote(note: INote) {
    this.notes.push(note);
  }
}
