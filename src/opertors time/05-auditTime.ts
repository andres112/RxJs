import { fromEvent } from 'rxjs';
import { map, auditTime } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    auditTime(1000),
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe(console.log);
