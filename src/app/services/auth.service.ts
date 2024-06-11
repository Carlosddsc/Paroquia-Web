import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  readonly PATH = 'users';

  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public router: Router,
    public ngZone: NgZone,
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  isAuthenticated(): boolean {
    return !!JSON.parse(localStorage.getItem('user')!);
  }

  logout(): void {
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
  }

  login(email: string, password: string): Promise<void> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
        });
        this.setUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  register(email: string, senha: string, nome: string, paroquia: string, servindo: string, idade: string, adm: boolean): Promise<void> {
    return this.afAuth.createUserWithEmailAndPassword(email, senha)
      .then((result) => {
        const create : Usuarios = new Usuarios("", nome, email, paroquia, servindo, idade, adm);
        this.cadastrar(create);
        this.router.navigate(['/login']);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  editarCadastro(usuarios: Usuarios, id: string) {
    return this.afs.collection(this.PATH).doc(id).update({
      email: usuarios.email,
      paroquia: usuarios.paroquia,
      servindo: usuarios.servindo,
      idade: usuarios.idade,
    });
  }

 

  public getUsuarioLogado(){
    const user : any = JSON.parse(localStorage.getItem('user') || 'null');
    return (user !== null) ? user : null;
   }

   public getUserName(): string {
    const user = this.getUsuarioLogado();
    if (user) {
        const atIndex = user.email.indexOf('@');
        return atIndex !== -1 ? user.email.substring(0, atIndex) : user.email;
    } else {
        return '';
    }
}

  

  private setUserData(user: any, nome?: string, paroquia?: string, servindo?: string, idade?: string): void {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData = {
      uid: user.uid,
      email: user.email,
      nome: nome || '',
      paroquia: paroquia || '',
      servindo: servindo || '',
      idade: idade || '',
    };
    userRef.set(userData, { merge: true });
    this.userData = userData;
    localStorage.setItem('user', JSON.stringify(this.userData));
    JSON.parse(localStorage.getItem('user')!);
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  getAllUsers(): Observable<any[]> {
    return this.afs.collection(this.PATH).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  cadastrar(usuarios: Usuarios){
    return this.afs.collection(this.PATH).add({
      nome: usuarios.nome,
      email: usuarios.email,
      paroquia: usuarios.paroquia,
      servindo: usuarios.servindo,
      idade: usuarios.idade,
      adm: usuarios.adm,
    })
  }

  editar(usuario: Usuarios) {
    usuario.adm = !usuario.adm;
  
    return this.afs.collection(this.PATH).doc(usuario.id).update({
      adm: usuario.adm
    });
  }  

  obterTodos() {
    return this.afs.collection(this.PATH).snapshotChanges();
  }

  searchUsersByEmail(email: string): Observable<any[]> {
    console.log('Searching users with email:', email);
    return this.afs.collection('users', ref => ref.where('nome', '==', email)).get()
      .pipe(
        map(querySnapshot => {
          const users: any[] = [];
          querySnapshot.forEach(doc => {
            users.push(doc.data());
          });
          console.log('Users found:', users);
          return users;
        })
      );
  }
  
}
