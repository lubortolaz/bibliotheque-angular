import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './views/auth/auth.component';
import { BooksTableComponent } from './views/books-table/books-table.component';
import { ErrorComponent } from './views/error/error.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { SingleBookComponent } from './views/single-book/single-book.component';
import { NewBookComponent } from './views/new-book/new-book.component';
import { EditBookComponent } from './views/edit-book/edit-book.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'books',
    canActivate: [AuthGuard],
    component: BooksTableComponent,
  },
  {
    path: 'book/new',
    canActivate: [AuthGuard],
    component: NewBookComponent,
  },
  {
    path: 'book/:id',
    canActivate: [AuthGuard],
    component: SingleBookComponent,
  },
  {
    path: 'book/edit/:id',
    canActivate: [AuthGuard],
    component: EditBookComponent,
  },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
