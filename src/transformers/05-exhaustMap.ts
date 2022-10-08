import { interval, take, fromEvent } from 'rxjs';
import { exhaustMap, switchMap } from 'rxjs/operators';

const interval$ = interval(1000).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$
  .pipe(exhaustMap(() => interval$))
  .subscribe((data) => console.log('exhaustMap', data));
click$
  .pipe(switchMap(() => interval$))
  .subscribe((data) => console.log('switchMap', data));
