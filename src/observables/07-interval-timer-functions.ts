import { interval, timer } from "rxjs";

const observer = {
  next: (val) => console.log("next:", val),
  complete: () => console.log("complete"),
  error: (err) => console.log("error:", err),
};



// asynchronous
const interval$ = interval(1000);
const timer$ = timer(2500, 1000);

const inTenSeconds = new Date();
inTenSeconds.setSeconds(inTenSeconds.getSeconds() + 10);
const future$ = timer(inTenSeconds);

interval$.subscribe(observer);
timer$.subscribe(observer);
future$.subscribe(observer);
