import { asyncScheduler, range } from "rxjs";

// the second parameter indicates the number of counts not the final number
const src$ = range(-1,10)

src$.subscribe(console.log);

