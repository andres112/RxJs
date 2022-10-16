import { forkJoin, of, catchError } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const URL = 'https://api.github.com/users';
const user = 'andres112';

forkJoin({
  user: ajax.getJSON(`${URL}/${user}`),
  repos: ajax.getJSON(`${URL}/${user}/reposs`).pipe(catchError((err) => of([]))),
  gists: ajax.getJSON(`${URL}/${user}/gists`),
})
  .pipe(catchError((error) => of(error)))
  .subscribe(console.log);
