import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { fromFirebaseAuthPromise } from "../firebase-utils";

@Injectable()
export class AuthProvider {

  constructor(public afAuth: AngularFireAuth) { }

  signIn(user: {email, password}) {
    return fromFirebaseAuthPromise(
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    );
  }

  signUp(user: {email, password}) {
    return fromFirebaseAuthPromise(
        this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    );
  }

  signOut() {
    return fromFirebaseAuthPromise(
      this.afAuth.auth.signOut()
    );
  }

}
