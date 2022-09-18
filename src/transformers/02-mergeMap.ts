import { of, interval, fromEvent } from 'rxjs';
import { takeUntil, mergeMap, take, map } from 'rxjs/operators';
const letters$ = of('a', 'b', 'c', 'd', 'e', 'f');

letters$
  .pipe(
    mergeMap((char) =>
      interval(500).pipe(
        map((index) => char + index),
        take(5)
      )
    )
  )
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed'),
  });

// Example 2
const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');

mouseDown$
    .pipe(
      mergeMap(() => interval()
        .pipe(takeUntil(mouseUp$))
      )
    )
.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});
