import { Observable, debounceTime, distinctUntilChanged, map, tap } from 'rxjs';
const card = document.createElement('div');
card.setAttribute('style', 
'height: 200px; width: 300px; background-color: red; resize: both; overflow: auto');
card.setAttribute('id', 'card');

const body = document.querySelector('body');
body.append(card);

const el = document.querySelector('#card');

function resizeObservable(elem): Observable<ResizeObserverEntry> {
  return new Observable((subscriber) => {
    var ro = new ResizeObserver((entries) => {
      subscriber.next(entries[0]);
    });
    // Observe one or multiple elements
    ro.observe(elem);
    return () => ro.unobserve(elem);
  });
}

const changeHeight = (height) => {
  console.log('new height: ', height);
};

resizeObservable(el)
  .pipe(
    debounceTime(200),
    map((x: ResizeObserverEntry) => x.contentRect.height),
    distinctUntilChanged(),
    tap(changeHeight)
  )
  .subscribe();
