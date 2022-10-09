import { ajax } from 'rxjs/ajax';
import { startWith, endWith } from 'rxjs';
const loading = document.createElement('div');
loading.classList.add('loading');
loading.innerHTML = 'Loading...';

const body = document.querySelector('body');

ajax
  .getJSON('https://reqres.in/api/users?delay=5')
  .pipe(startWith(true), endWith(false))
  .subscribe((data) => {
    if (data === true) {
      body.append(loading);
    }
    if(data=== false){
        document.querySelector('.loading').remove();
    }
    console.log(data);
  });
