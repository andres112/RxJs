import { of } from "rxjs";

const obs$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const obs1$ = of([1, 2], { a: 3, b: 4 }, function () {}, true, Promise.resolve());

obs$.subscribe({
  next: (digit) => console.log(digit),
  complete: () => console.log("Sequence completed!"),
});

obs1$.subscribe({
  next: (digit) => console.log(digit),
  complete: () => console.log("Sequence completed!"),
});
