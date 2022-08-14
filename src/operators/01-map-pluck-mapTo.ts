import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

range(1, 5)
  .pipe(map<number, string>((x) => 'number:' + x * 10))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyup$.pipe(map<KeyboardEvent, string>((x) => 'key:' + x.code)).subscribe(console.log);

// obtain the value of a parameter directly with the key name
keyup$.pipe(pluck<KeyboardEvent>('key')).subscribe(console.log);
// even for nested keys
keyup$.pipe(pluck<KeyboardEvent>('target', 'baseURI')).subscribe(console.log);

keyup$.pipe(mapTo<KeyboardEvent, string>('key pressed')).subscribe(console.log);
