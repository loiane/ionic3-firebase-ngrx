import { Observable } from 'rxjs/Observable';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'display-error',
  templateUrl: 'display-error.html'
})
export class DisplayErrorComponent {

  @Input('error') error$: Observable<any>;

}
