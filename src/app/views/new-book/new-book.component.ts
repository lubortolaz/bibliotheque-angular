import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { BookService } from '../../services/book/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
})
export class NewBookComponent implements OnInit {
  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {}

  /**
   * Fonction appelée lorsque l'utilisateur valide le formulaire d'ajout
   * @param newBook nouveau livre à sauvegarder dans la liste
   */
  onSubmitNewBook(newBook: Book) {
    console.warn(newBook);
    this.bookService.addBook(newBook).then(() => {
      console.log('ajout ok !!');
      // redirection
      this.router.navigateByUrl('/books');
    });
  }
}
