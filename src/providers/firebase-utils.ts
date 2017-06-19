import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

export function fromFirebaseAuthPromise(promise): Observable<any> {
    return Observable.fromPromise(<Promise<any>>promise);
  }
