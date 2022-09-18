import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, mergeAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubUsers, GithubUser } from '../interfaces/github-users.interface';

const body = document.querySelector('body');
const input = document.createElement('input');
const list = document.createElement('ul');

body.append(input, list);

const showUsers = (users: GithubUser[]) => {
    list.innerHTML =null;
    users.forEach((user) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;
        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'See user';
        anchor.target = '_blank';

        li.append(img, user.login +' ' ,anchor)
        list.append(li)
    })
}

// getInput information
const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
const url = 'https://api.github.com/search/users?q=';

input$
  .pipe(
    debounceTime(500),
    // this map returns an observable
    map<KeyboardEvent, Observable<GithubUsers>>((data) =>
      ajax.getJSON(`${url}${data.target['value']}`)
    ),
    // automatically merge the result of the previous ajax observable
    mergeAll(),
    map((data) => data.items)
  )
  .subscribe({
    next: (data) => showUsers(data),
  });
