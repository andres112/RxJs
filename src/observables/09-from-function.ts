import { from } from "rxjs";

// Sequence from array
const src$ = from(["a", 1, true]);
src$.subscribe(console.log);

// Use of from to fetch data from remote server
const src1$ = from(fetch("https://api.github.com/users/andres112"));
src1$.subscribe({
  next: async (val) => {
    const resp = await val.json();
    console.log(resp);
  },
});

// Use of from with iterators
const generator = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 'I finished!';
}
from(generator()).subscribe(console.log);