import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://api.github.com/usrs?per_page=10';

ajax
  .getJSON(url)
  .pipe(
    catchError((err: AjaxError) => {
      console.warn('something went wrong:', err.message);
      return of([]);
    })
  )
  .subscribe(console.log);
