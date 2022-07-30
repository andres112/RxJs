import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value: any) => console.log("next: ", value),
  error: (error: any) => console.log("error: ", error),
  complete: () => console.info("completed!"),
};

const interval$ = new Observable<number>((subs) => {
  const random = setInterval(() => subs.next(Math.random()), 1000);
  return () => clearInterval(random);
});

interval$.subscribe(observer);
