import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=10';

ajax(url)
  .pipe(
    map((x) => x.response),
    catchError((err: AjaxError) => {
        console.warn("something went wrong:", err.message);
        return of([])
    })
  )
  .subscribe(console.log);
