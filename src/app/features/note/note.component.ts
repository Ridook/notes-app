import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { map, tap } from 'rxjs';
import { INote, NoteService } from 'src/app/services/note.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  providers: [NoteService],
})
export class NoteComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly noteService = inject(NoteService);
  public notes!: INote[];
  public selectedNote!: any;

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((id) => {
          this.notes = this.noteService
            .getNotes()
            .filter((note) => note.id === Number(id.get('id')));
          return id;
        })
      )
      .subscribe((params: ParamMap) => {
        console.log(params);
        console.log(this.notes);
      });
  }
}