import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip } from 'rxjs/operators';

const btn = document.createElement('button');
btn.innerHTML = 'Stop Timer';

document.querySelector('body').append(btn);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(btn, 'click').pipe(skip(5));

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (data) => console.log('data: ', data),
  complete: () => console.log('Completed'),
});
