import { endWith, of, startWith } from 'rxjs';

const numbers$ = of(1, 2, 3, 4, 5).
pipe(
    startWith('hello'), 
    endWith('world')
);

numbers$.subscribe(console.log); 
// hello
// 1
// 2
// 3
// 4
// 5
// world
