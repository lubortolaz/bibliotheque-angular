import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  // est-ce que l'itilisateur est connecté ?
  isConnected!: boolean;

  // on crée un observateur pour observer l'observable
  tokenSub!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // on demande à l'observateur d'observer le token
    this.tokenSub = this.authService.token.subscribe((token) => {
      this.isConnected = !!token;
    });
  }

  /**
   * Fonction appelée lors du click sur le bouton de déconnexion
   */
  onClickSignout() {
    this.authService.signout().then(() => {
      this.router.navigateByUrl('');
    });
  }

  ngOnDestroy(): void {
    // on arrête d'observer
    this.tokenSub.unsubscribe();
  }
}
