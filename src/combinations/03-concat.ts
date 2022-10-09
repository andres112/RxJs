import { concat, interval, take, of } from 'rxjs';


const interval$ = interval(1000);

concat(
    interval$.pipe(take(5)),
    interval$.pipe(take(2)),
    of('end')
).subscribe(console.log)

// 0
// 1
// 2
// 3
// 4
// 0
// 1
// end