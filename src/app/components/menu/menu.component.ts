import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, NgIf],
  template: `
    <mat-toolbar class="menu-toolbar">
      <div class="brand" routerLink="/voitures">
        <mat-icon class="brand-icon">directions_car</mat-icon>
        <span class="brand-text">Gestion Voitures</span>
      </div>
      <span class="spacer"></span>
      <div class="nav-buttons">
        <button mat-button routerLink="/voitures" routerLinkActive="active-link">
          <mat-icon>directions_car</mat-icon>
          <span>Voitures</span>
        </button>
        
        <ng-container *ngIf="!authService.isAuthenticated()">
          <button mat-button routerLink="/auth" routerLinkActive="active-link">
            <mat-icon>login</mat-icon>
            <span>Connexion</span>
          </button>
        </ng-container>

        <ng-container *ngIf="authService.isAuthenticated()">
          <span class="user-info">
            <mat-icon>{{ authService.isAdmin() ? 'admin_panel_settings' : 'person' }}</mat-icon>
            {{ authService.getCurrentUser() }}
          </span>
          <button mat-button (click)="logout()">
            <mat-icon>logout</mat-icon>
            <span>Déconnexion</span>
          </button>
        </ng-container>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .menu-toolbar {
      background-color: var(--primary-color);
      padding: 0 24px;
      height: 64px;
    }

    .brand {
      display: flex;
      align-items: center;
      cursor: pointer;
      text-decoration: none;
      color: white;
    }

    .brand-icon {
      font-size: 32px;
      height: 32px;
      width: 32px;
      margin-right: 12px;
    }

    .brand-text {
      font-size: 24px;
      font-weight: 500;
    }

    .spacer {
      flex: 1 1 auto;
    }

    .nav-buttons {
      display: flex;
      gap: 16px;
      align-items: center;
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 8px;
      color: white;
      background: rgba(255, 255, 255, 0.1);
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 500;
    }

    button {
      border-radius: 8px;
      padding: 0 16px;
      height: 40px;
      transition: all 0.3s ease;
      color: white;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      mat-icon {
        margin-right: 8px;
      }

      span {
        font-weight: 500;
      }
    }

    .active-link {
      background-color: rgba(255, 255, 255, 0.15);
    }

    @media (max-width: 600px) {
      .brand-text {
        display: none;
      }
      
      button span {
        display: none;
      }
      
      .nav-buttons {
        gap: 8px;
      }

      .user-info {
        padding: 8px;
        
        span {
          display: none;
        }
      }
    }
  `]
})
export class MenuComponent {
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
