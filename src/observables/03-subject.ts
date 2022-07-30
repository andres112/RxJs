import { interval, Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value: any) => console.log("next: ", value),
  error: (error: any) => console.log("error: ", error),
  complete: () => console.info("completed!"),
};

const interval$ = new Observable<number>((subs) => {
  const random = setInterval(() => subs.next(Math.random()), 1000);
  return () => {
    clearInterval(random);
    console.log("observable destructed");
  };
});

// The 3 subscriptions will be different
const randomnizer1 = interval$.subscribe(observer);
const randomnizer2 = interval$.subscribe(observer);
const randomnizer3 = interval$.subscribe(observer);

const subject$ = new Subject<number>();
const subjectSubs = interval$.subscribe(subject$);
// The 3 subscriptions will be consistent
subject$.subscribe(observer);
subject$.subscribe(observer);
subject$.subscribe(observer);

setTimeout(() => {
  // Can emits data from outside to the observable inside
  subject$.next(5000);
  // Can manipulate the complete of the observable
  subject$.complete();
  // To destroy the subscription is required unsubscribe the subject subs
  subjectSubs.unsubscribe();

  randomnizer1.add(randomnizer2);
  randomnizer1.add(randomnizer3);
  randomnizer1.unsubscribe();
}, 5000);
