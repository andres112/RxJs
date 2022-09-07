import { fromEvent } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
    takeWhile(({ x, y }) => x < 500 || y < 500, true) //inclusive in true
    )
.subscribe({
  next: console.log,
  complete: () => console.log('completed after condition'),
});
