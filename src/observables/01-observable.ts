import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value: any) => console.log("next: ", value),
  error: (error: any) => console.log("error: ", error),
  complete: () => console.info("complete"),
};

const obs$ = new Observable((subs) => {
  subs.next("hello"); // everything emitted for the observable
  subs.next("world"); // is done with next
  subs.complete(); // complete the subscription
  subs.next("bye"); // but no the emission of data
});

// Subscribe to the observable to listen the emissions
obs$.subscribe({
  next: (data) => console.log(data), // each time observable emits a value
  error: (err) => console.warn(err), // if observable emits and error
  complete: () => console.info("complete"), // When observable emits complete
});

// Subscribe to the observable using the observer
obs$.subscribe(observer);
