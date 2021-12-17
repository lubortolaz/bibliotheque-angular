import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  email!: string;
  password!: string;

  errMsg!: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.email = 'contact@bibliotheque.fr';
    this.password = 'sdjfh0sdkfh!jsdjhf';
  }

  /**
   * Fonction appelée lors du click sur le bouton de connexion
   */
  onSubmitAuthForm() {
    this.errMsg = '';
    this.authService
      .signin(this.email, this.password)
      .then(() => {
        console.log('connexion ok');
        // redirection
        this.router.navigateByUrl('/books');
      })
      .catch((errMsg) => {
        this.errMsg = errMsg;
      });
  }
}
