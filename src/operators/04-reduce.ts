import { from, tap, reduce } from 'rxjs';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const totalReducer = (ac: number, current: number) => ac + current;

from(numbers)
  .pipe(tap(console.log), reduce(totalReducer))
  .subscribe({
    next: (val) => console.log('cumulated: ', val),
    complete: () => console.log('complete'),
  });
