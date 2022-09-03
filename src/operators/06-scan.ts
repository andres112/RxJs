import { from } from 'rxjs';
import { reduce, scan } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const total = (acc, cur) => acc + cur;

// Reduce
console.log('Use of Reduce');
from(numbers).pipe(reduce(total, 0)).subscribe(console.log);

// Scan
console.log('Use of Scan');
from(numbers).pipe(scan(total, 0)).subscribe(console.log);

// Manage global state
// How to reproduce the use of global state handler
interface User {
  id?: string;
  token?: string;
  age?: number;
  authenticated?: boolean;
}

const user: User[] = [
  {
    id: 'aja',
    authenticated: false,
    token: null,
  },
  {
    id: 'aja',
    authenticated: true,
    token: 'sd4SD-aR554#4',
  },
  {
    id: 'aja',
    authenticated: true,
    token: 'qwepoASDF566&',
  },
];

const state$ = from(user).pipe(
  scan<User>((ac: User, cu) => {
    return { ...ac, ...cu };
  })
);
console.log("State handler like redux or vuex");

state$.subscribe(console.log);
