import { fromEvent, distinctUntilChanged } from 'rxjs';
import { map, debounceTime, tap } from 'rxjs/operators';
const input = document.createElement('input');
input.setAttribute('placeholder', 'Type something');
document.querySelector('body').append(input);

const keyLogger$ = fromEvent(input, 'keyup');

keyLogger$
  .pipe(
    debounceTime(500),
    map((x) => (x?.target as HTMLInputElement)?.value),
    distinctUntilChanged((prev, curr) => prev.trim() === curr.trim()),
    tap(console.log)
  )
  .subscribe();
