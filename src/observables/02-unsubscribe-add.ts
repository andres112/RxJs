import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value: any) => console.log("next: ", value),
  error: (error: any) => console.log("error: ", error),
  complete: () => console.info("completed!"),
};

const interval$ = new Observable<number>((subs) => {
  let seed = 0;
  const counter = setInterval(() => subs.next(seed++), 1000);

  // complete observable after 5 seconds
  setTimeout(() =>subs.complete(), 5000);
  // Stop the function once the unsubscribe is called
  return () => (clearInterval(counter), console.log("observable destructed"));
});

const counter = interval$.subscribe(observer);
counter.add(interval$.subscribe(observer));
counter.add(interval$.subscribe(observer));

setTimeout(() => counter.unsubscribe(), 10000);
