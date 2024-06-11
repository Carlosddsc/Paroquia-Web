import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log('Login successful');
        this.searchUsersByEmail(email).subscribe(users => {
          // Verifica se há usuários retornados
          if (users.length > 0) {
            const user = users[0];
            if (user.adm) {
              this.router.navigate(['/admin-home']);
            } else {
              this.router.navigate(['/home']);
            }
          } else {
            console.error('User not found');
            // Trate aqui o caso em que o usuário não foi encontrado
          }
        });
      })
      .catch(error => {
        console.error('Login error:', error);
        alert('Login failed. Please check your credentials.');
      });
  }

  
  searchUsersByEmail(nome: string): Observable<any[]> {
    console.log('Searching users with name:', nome);
    return this.firestore.collection('users', ref => ref.where('nome', '==', nome)).get()
      .pipe(
        map(querySnapshot => {
          const users: any[] = [];
          querySnapshot.forEach(doc => {
            users.push(doc.data());
          });
          return users;
        })
      );
  }
  
  logout() {
    return this.afAuth.signOut()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }
}
