import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // jeton d'identification : variable observable
  token: BehaviorSubject<string>;

  constructor() {
    // initialisation
    this.token = new BehaviorSubject<string>('');
  }

  /**
   * Connexion de l'utilisateur
   * @param email
   * @param password
   * @returns Promise<void>
   */
  signin(email: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (
        email === 'contact@bibliotheque.fr' &&
        password === 'sdjfh0sdkfh!jsdjhf'
      ) {
        // instantation
        this.token.next('kdfsqfjqsdfjsdfhnsudfhndsjnfksdnf');
        resolve();
      } else {
        reject('Identifiants incorrects !');
      }
    });
  }

  /**
   * Déconnexion de l'utilisateur
   * @returns Promise<void>
   */
  signout(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.token.next('');
      resolve();
    });
  }
}
