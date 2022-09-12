import { fromEvent, asyncScheduler } from 'rxjs';
import { map, throttleTime, tap, distinctUntilChanged } from 'rxjs/operators';
const input = document.createElement('input');
input.setAttribute('placeholder', 'Type something');
document.querySelector('body').append(input);

const keyLogger$ = fromEvent(input, 'keyup');

keyLogger$
  .pipe(
    throttleTime(500, asyncScheduler, {
      leading: true,
      trailing: true
    }),
    map((x) => (x?.target as HTMLInputElement)?.value),
    distinctUntilChanged((prev, curr) => prev.trim() === curr.trim()),
    tap(console.log)
  )
  .subscribe();
