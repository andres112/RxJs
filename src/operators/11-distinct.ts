import { distinct, from } from 'rxjs';

const numbers$ = from([1, 1, 1, 2, 2, 1, 3, 1, 1, 3, 4, 5, 1, 2, 5, 3]);
const objects$ = from([
  { name: 'andres' },
  { name: 'andres' },
  { name: 'felipe' },
  { name: 'dorado' },
]);

numbers$.pipe(distinct()).subscribe({
  next: (data) => console.log('data: ', data),
  complete: () => console.log('Completed'),
});

objects$.pipe(distinct((x) => x.name)).subscribe({
  next: (data) => console.log('data: ', data),
  complete: () => console.log('Completed'),
});
