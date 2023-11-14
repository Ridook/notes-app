import { Routes } from '@angular/router';
import { NoteComponent } from './features/note/note.component';
import { AppComponent } from './app.component';
import { SidebarComponent } from './features/sidebar/sidebar.component';

export const routes: Routes = [
    {path: 'note/:id', component: NoteComponent}
];
