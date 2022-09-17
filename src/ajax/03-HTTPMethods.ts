import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// parameters in GET or DELETE is url and header
ajax.get(url, {
    id: '1',
    name: 'andres',
  })
  .subscribe({
    next: (data) => console.log(data),
  });

// parameters in PUT or POST is url,body and header
ajax.put(
    url,
    {
      id: '1',
      name: 'andres',
    },
    {
      token: '12345',
    }
  )
  .subscribe({
    next: (data) => console.log(data),
  });