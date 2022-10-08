import { interval, take, fromEvent } from 'rxjs';
import { concatMap, switchMap } from 'rxjs/operators';

const interval$ = interval(1000).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$
  .pipe(concatMap(() => interval$))
  .subscribe((data) => console.log('concatMap', data));
click$
  .pipe(switchMap(() => interval$))
  .subscribe((data) => console.log('switchMap', data));
