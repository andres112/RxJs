import { fromEvent, tap, map, switchMap, exhaustMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
// Formular
const form = document.createElement('form');
const email = document.createElement('input');
const pass = document.createElement('input');
const submit = document.createElement('button');

//Config using testing tool https://reqres.in/
email.type = 'email';
email.placeholder = 'Enter your email address';
email.value = 'eve.holt@reqres.in';

pass.type = 'password';
pass.placeholder = 'Enter your email password';
pass.value = 'cityslicka';

submit.innerHTML = 'Ingress';
submit.style.cursor = 'pointer';

form.append(email, pass, submit);

document.querySelector('body').append(form);

//observables
const submitForm$ = fromEvent(form, 'submit')
  .pipe(
    tap((ev) => ev.preventDefault()),
    map((ev) => ({
      email: ev.target[0].value,
      password: ev.target[1].value,
    })),
    exhaustMap((data) =>
      ajax.post('https://reqres.in/api/login?delay=3', data).pipe(map((x) => x.response))
    )
  )
  .subscribe(console.log);
