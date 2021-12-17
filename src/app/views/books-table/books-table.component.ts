import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css'],
})
export class BooksTableComponent implements OnInit {
  books!: Book[];

  // référence au tableau de produits dans le service BookService
  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.books = this.bookService.books;
  }

  /**
   * Quand l'utilisateur appuie sur le bouton pour udpater un status
   * @param arrayIndex
   */
  onClickBtnStatus(arrayIndex: number) {
    this.bookService
      .updateStatus(this.books[arrayIndex].id)
      .then((book: Book) => {
        console.log(`ok`);
        this.books[arrayIndex] = book;
      })
      .catch(() => {
        console.log(`pas ok`);
      });
  }

  /**
   * Quand l'utilisateur appuie sur le bouton udpate all status
   * @param status
   */
  onClickBtnAllStatus(status: boolean) {
    this.bookService
      .updateAllStatus(status)
      .then((books: Book[]) => {
        console.log(`ok`);
        this.books = books;
      })
      .catch(() => {
        console.log(`pas ok`);
      });
  }

  /**
   * Quand l'utilisateur click sur le bouton supprimer
   * @param arrayIndex
   */
  onClickBtnDelete(arrayIndex: number) {
    if (
      confirm(
        `Êtes-vous sûr·e de vouloir supprimer ${this.books[arrayIndex].name} de la bibliothèque ?`
      )
    ) {
      this.bookService
        .deleteBook(this.books[arrayIndex].id)
        .then(() => {
          console.log(`ok`);
          this.router.navigateByUrl('/books');
        })
        .catch(() => {
          console.log(`pas ok`);
        });
    }
  }
}
