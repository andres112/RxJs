import { ajax } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=10';

ajax.getJSON(url).subscribe(console.log);
