import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  book!: Book;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // on récupère l'id du livre à éditer dans l'url
    const id = this.route.snapshot.params['id'];
    this.bookService.getBookById(+id).then((book: Book) => {
      this.book = book;
    });
  }

  /**
   * Fonction appelée lorsque l'utilisateur valide le formulaire d'édition
   * @param editedBook
   */
  onSubmitEditBook(editedBook: Book) {
    this.bookService.editBook(editedBook).then(() => {
      console.log('modif ok !!');
      // redirection
      this.router.navigateByUrl('/books');
    });
  }
}
