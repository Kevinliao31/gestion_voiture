import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  standalone: true,
  imports: [NgIf, LoginComponent],
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  showLogin: boolean = true;

  toggleView(): void {
    this.showLogin = !this.showLogin;
  }
}