import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  bookForm!: FormGroup;

  book!: Book;

  // nouvel objet de type emitter pour envoyer le formulaire
  @Output() formSubmitted: EventEmitter<Book>;

  // label du bouton (ajouter ou modifier)
  @Input() btnLabel!: string;

  // si on a un livre à éditer
  @Input() bookToEdit!: Book;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Book>();
  }

  ngOnInit(): void {
    // initialisation du formulaire
    this.initForm();
  }

  private initForm(): void {
    // nouveau livre ou livre à éditer
    this.book = this.bookToEdit
      ? this.bookToEdit
      : new Book(0, '', '', '', false);

    // formulaire
    this.bookForm = this.fb.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
      author: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(60),
      ]),
      description: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(450),
        ],
      ],
      status: new FormControl(null),
    });
  }

  /**
   * Fonction appelée lors de la soumission du formulaire
   */
  onSubmitBookForm() {
    console.log('soumission formulaire');
    // 3) émission
    this.formSubmitted.emit(this.book);
  }
}
