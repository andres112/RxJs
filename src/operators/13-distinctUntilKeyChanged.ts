import { from, distinctUntilKeyChanged } from 'rxjs';

const objects$ = from([
  { name: 'andres' },
  { name: 'andres' },
  { name: 'felipe' },
  { name: 'dorado' },
]);
objects$.pipe(distinctUntilKeyChanged('name')).subscribe({
  next: (data) => console.log('data: ', data),
  complete: () => console.log('Completed'),
});
