import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import { Book } from '../../models/Book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css'],
})
export class SingleBookComponent implements OnInit {
  book!: Book;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.bookService.getBookById(+id).then((book: Book) => {
      console.log(book);
      this.book = book;
    });
  }

  /**
   * Fonction appelée lorsque l'utilisateur click sur le bouton de suppression
   */
  onClickBtnDelete() {
    if (
      confirm(
        `Êtes-vous sûr·e de vouloir supprimer ${this.book.name} de la bibliothèque ?`
      )
    ) {
      this.bookService
        .deleteBook(this.book.id)
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
