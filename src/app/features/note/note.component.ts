import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { INote, NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  providers: [],
})
export class NoteComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly noteService = inject(NoteService);
  private readonly destroyRef = inject(DestroyRef);
  public notes!: INote[];

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((id) => {
          this.notes = this.noteService
            .getNotes()
            .filter((note) => note.id === Number(id.get('id')));
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
