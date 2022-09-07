import { of } from 'rxjs';
import { take } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

numbers$
  .pipe(take(5))
  .subscribe({ next: console.log, complete: () => console.log('completed') });
