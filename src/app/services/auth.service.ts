import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

interface User {
  id: number;
  username: string;
  password: string;
  role: 'ADMIN' | 'USER';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    console.log('Tentative de connexion avec:', { username });
    return this.http.get<User[]>(this.apiUrl).pipe(
      tap(users => console.log('Utilisateurs récupérés:', users)),
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        console.log('Utilisateur trouvé:', user);
        if (user) {
          this.isAuthenticatedSubject.next(true);
          this.currentUserSubject.next(user);
          return true;
        }
        return false;
      })
    );
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  getCurrentUser(): string | null {
    return this.currentUserSubject.value?.username ?? null;
  }

  isAdmin(): boolean {
    return this.currentUserSubject.value?.role === 'ADMIN';
  }

  isUser(): boolean {
    return this.currentUserSubject.value?.role === 'USER';
  }
}
