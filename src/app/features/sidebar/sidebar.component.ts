import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import { INote, NoteService } from 'src/app/services/note.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddNoteComponent } from '../add-note/add-note.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule,
    MatDialogModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [],
})
export class SidebarComponent {
  private noteService = inject(NoteService);
  public notes: INote[] = this.noteService.getNotes();
  public dialog = inject(MatDialog);

  public openDialog() {
    const dialogRef = this.dialog.open(AddNoteComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const note = {
          title: result.noteTitle,
          text: result.noteText,
          id: this.notes.length + 1,
        };
        this.noteService.addNote(note)
      }
    });
  }
}
