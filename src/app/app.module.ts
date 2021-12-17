import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './services/book/book.service';
import { BooksTableComponent } from './views/books-table/books-table.component';
import { AuthComponent } from './views/auth/auth.component';
import { AuthService } from './services/auth/auth.service';
import { ErrorComponent } from './views/error/error.component';
import { SingleBookComponent } from './views/single-book/single-book.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewBookComponent } from './views/new-book/new-book.component';
import { EditBookComponent } from './views/edit-book/edit-book.component';
import { BookFormComponent } from './components/book-form/book-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksTableComponent,
    AuthComponent,
    ErrorComponent,
    SingleBookComponent,
    HeaderComponent,
    NewBookComponent,
    EditBookComponent,
    BookFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [BookService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
