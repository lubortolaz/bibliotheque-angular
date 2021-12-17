import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[];

  constructor() {
    this.books = [];

    this.createFakeListOfSuperBooks();
  }

  /**
   * Ajoute le livre passé en paramètre à la liste de livres
   * @param newBook nouveau livre
   * @returns Promise<void>
   */
  addBook(newBook: Book) {
    console.log(newBook);
    if (this.books.length === 0) {
      newBook.id = 0;
    } else {
      newBook.id = this.books[this.books.length - 1].id + 1;
    }

    return new Promise<void>((resolve, reject) => {
      this.books.push(newBook);
      resolve();
    });
  }

  /**
   * Modifie le livre passé en paramètre dans la liste de livres
   * @param editedBook livre édité
   * @returns Promise<void>
   */
  editBook(editedBook: Book) {
    return new Promise<void>((resolve, reject) => {
      for (let [index, book] of this.books.entries()) {
        if (book.id === editedBook.id) {
          this.books[index] = editedBook;
          resolve();
          break;
        }
      }
    });
  }

  /**
   * Supprime le livre dont l'identifiant est passé en paramètre de la liste de livres
   * @param idBook Identifiant du livre à supprimer
   * @returns Promise<void>
   */
  deleteBook(idBook: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      for (let [index, book] of this.books.entries()) {
        if (book.id === idBook) {
          this.books.splice(index, 1);
          resolve();
          break;
        }
      }
    });
  }

  /**
   * Changer le status du produit dont l'id est entré en paramètre
   * @param idBook Identifiant du livre dont il faut changer le status
   * @returns le produit modifié
   */
  updateStatus(idBook: number): Promise<Book> {
    return new Promise<Book>((resolve, reject) => {
      for (let [index, book] of this.books.entries()) {
        if (book.id === idBook) {
          this.books[index].status = !this.books[index].status;
          resolve(this.books[index]);
          break;
        }
      }
    });
  }

  /**
   * Changer le status de tous les produits
   * @param status Nouveau status (true/false)
   * @returns Promise<Book[]> le tableau de produits
   */
  updateAllStatus(status: boolean): Promise<Book[]> {
    return new Promise<Book[]>((resolve, reject) => {
      for (let [index, book] of this.books.entries()) {
        book.status = status;
      }
      resolve(this.books);
    });
  }

  /**
   * Renvoie le livre dont l'id est passé en paramètre
   * @param id
   * @returns Promise<Book> le livre
   */
  getBookById(id: number) {
    return new Promise<Book>((resolve, reject) => {
      console.log('je suis dans getBookById');
      console.info(this.books);
      for (let [index, book] of this.books.entries()) {
        if (book.id === id) {
          console.log(book.id);
          resolve(book);
          break;
        }
      }
    });
  }

  /**
   * Fonction servant aux tests en l'absence de BDD
   */
  createFakeListOfSuperBooks() {
    this.books.push(
      new Book(
        0,
        'Quand les ténèbres viendront',
        'Isaac Asimov',
        'Lagash est une extraordinaire planète dont les habitants ne voient jamais la nuit puisque leur système solaire est composé de six soleils. Or, voici venir une tragédie terrifiante : le crépuscule tombe sur Lagash...',
        false
      )
    );

    this.books.push(
      new Book(
        1,
        "La Communauté de l'Anneau",
        'J.R.R. Tolkien',
        "Le Tiers Age touche à sa fin, et la Terre du Milieu à son crépuscule. La Compagnie de l'Anneau va donc tâcher de déjouer les projets infernaux de Sauron, force du mal d'autant plus difficile à combattre qu'elle est désincarnée...",
        true
      )
    );

    this.books.push(
      new Book(
        2,
        'Chroniques martiennes',
        'Ray Bradbury',
        "Les Martiens de l'An 2000 de Bradbury ne sont pas très différents des Terriens. Mais ils sont télépathes... ",
        true
      )
    );

    this.books.push(
      new Book(
        3,
        'Entretien avec un vampire',
        'Anne Rice',
        "Dans une pièce sombre se déroule lentement l'histoire d'un être que le temps délaisse et que le soleil blesse... De nos jours, à la Nouvelle-Orléans, un jeune homme a été convoqué dans l'obscurité d'une chambre d'hôtel pour écouter la plus étrange histoire qui soit...",
        true
      )
    );

    this.books.push(
      new Book(
        4,
        'Ubik',
        'Philip K. Dick',
        "Qu'est-ce qu'Ubik ? Une marque de bière ? Une sauce salade ? Une variété de café ? Un médicament ? Peut-être...",
        false
      )
    );

    this.books.push(
      new Book(
        5,
        "L'Assassin royal",
        'Robin Hobb',
        "Au château de Castelcerf le roi Subtil Loinvoyant règne sur les Six Duchés ; il est aidé dans sa lourde tâche par son fils Chevalerie. Suite à une aventure restée inconnue de tous, Chevalerie donne à la lignée un nouveau descendant : un bâtard, dont la simple existence va bouleverser le fragile équilibre qu'avait établi le roi...",
        true
      )
    );

    this.books.push(
      new Book(
        6,
        "L'Oeil du Monde",
        'Robert Jordan',
        'La Roue du Temps tourne et les Âges naissent et meurent, laissant dans leur sillage des souvenirs destinés à devenir des légendes.',
        true
      )
    );

    this.books.push(
      new Book(
        7,
        'Le pion blanc des présages ',
        'David Eddings',
        "Et les dieux créèrent l'homme, et chaque dieu choisit son peuple. Mais Torak, le dieu jaloux, vola l'Orbe d'Aldur, le joyau vivant; façonné par l'aîné des dieux, et ce fut la guerre. Le félon fut châtié; à Cthol Mishrak, la Cité de la Nuit, il dort toujours d'un long sommeil hanté par la souffrance...",
        false
      )
    );

    this.books.push(
      new Book(
        8,
        'Le Sorceleur, tome 1 : Le Dernier Voeu',
        'Andrzej Sapkowski',
        'Geralt de Riv est un homme inquiétant, un mutant devenu le parfait assassin. En ces temps obscurs, ogres, goules et vampires pullulent...',
        false
      )
    );

    this.books.push(
      new Book(
        9,
        'Dune',
        'Frank Herbert',
        "Voici l'épopée prodigieuse de Paul Atréides, connu comme prophète sous le nom de Paul Muad'Dib, seigneur d'Arrakis et empereur appelé à devenir le messie de Dune.",
        true
      )
    );

    this.books.push(
      new Book(
        10,
        'Le Chardon et le Tartan',
        'Diana Gabaldon',
        "Ancienne infirmière de l'armée britannique, Claire Beauchamp-Randall passe des vacances tranquilles en Écosse où elle s'efforce d'oublier les horreurs de la Seconde Guerre mondiale auprès de son mari. Au cours d'une promenade sur la lande, elle est précipitée deux cents ans en arrière, dans un monde en plein bouleversement...",
        true
      )
    );

    this.books.push(
      new Book(
        11,
        'Légende',
        'David Gemmell',
        "Druss est une légende. Ses exploits sont connus de tous. Surnommé le Capitaine à la Hache lors de ses plus grandes batailles, il aurait pu devenir riche en tant que mercenaire... Au contraire, fuyant la célébrité, il a choisi de vivre retiré loin des hommes, perché au sommet d'une montagne glacée...",
        true
      )
    );

    this.books.push(
      new Book(
        12,
        'Elantris',
        'Brandon Sanderson',
        "Il y a dix ans, la sublime cité d'Elantris, capitale de l'Aléron, a été frappée de malédiction. Ses portes sont désormais closes et nul ne sait ce qui se passe derrière ses murailles...",
        true
      )
    );
  }
}
