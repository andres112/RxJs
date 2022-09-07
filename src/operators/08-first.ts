import { fromEvent } from 'rxjs';
import { first } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(first()).subscribe({
  next: console.log,
  complete: () => console.log('completed for first click'),
});

click$.pipe(first<MouseEvent>(({clientY}) => clientY >= 500)).subscribe({
  next: console.log,
  complete: () => console.log('completed for first bigger than 500'),
});
