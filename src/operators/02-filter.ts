import { range, from } from 'rxjs';
import { filter } from 'rxjs/operators';

range(1, 10)
  .pipe(filter<number>((x) => x % 2 === 1))
  .subscribe(console.log);

interface Character {
  name: string;
  type: string;
}

const characters: Character[] = [
  { name: 'Batman', type: 'hero' },
  { name: 'Superman', type: 'hero' },
  { name: 'Guason', type: 'villain' },
];

from(characters)
  .pipe(filter((x) => x.type === 'hero'))
  .subscribe(console.log);
