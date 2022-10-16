import { combineLatest, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const click$ = fromEvent<PointerEvent>(document, 'click');

// only emits if the 2 observables have emitted the something
combineLatest<[KeyboardEvent, PointerEvent]>([keyup$, click$])
  .pipe(
    map(([k, c]) => ({
      key: k.key,
      click: { x: c.x, y: c.y },
    }))
  )
  .subscribe(console.log);
